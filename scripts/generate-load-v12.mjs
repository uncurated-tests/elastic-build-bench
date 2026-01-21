#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing - v12
 * 
 * v12 Strategy: SSG Pages + Heavy TypeScript + CSS Complexity (NO DELAYS)
 * - SSG pages drive base build time (~0.10s per page + 25s overhead)
 * - Max ~2000 pages before OOM (~225s or 3.75min of page time)
 * - Heavy TypeScript components add compile time
 * - Multiple CSS modules per page to scale CSS processing
 * - NO delays - all time comes from actual compilation work
 * 
 * Usage: node scripts/generate-load-v12.mjs <buildMinutes>
 * Example: node scripts/generate-load-v12.mjs 10
 */

import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Parse arguments
const buildMinutes = parseFloat(process.argv[2] || '1');

console.log(`\n========================================`);
console.log(`v12 Load Generator: SSG + TypeScript + CSS`);
console.log(`========================================`);
console.log(`Target: ${buildMinutes}min build`);

// =============================================================================
// v12 CALIBRATION - Empirical data from v11 + estimates for new components
// =============================================================================

const BASE_OVERHEAD = 25;           // seconds (Next.js startup)
const SECONDS_PER_PAGE = 0.10;      // Empirical from v11
const MAX_SSG_PAGES = 2000;         // Cap to avoid OOM errors

// Heavy TypeScript component calibration (ESTIMATE - needs testing)
// Complex generic types and mapped types should add ~0.03-0.05s per component
const SECONDS_PER_HEAVY_COMPONENT = 0.04;
const MAX_HEAVY_COMPONENTS = 15000;

// CSS module calibration (ESTIMATE - needs testing)
// Each CSS file with complex selectors should add ~0.015-0.025s
const SECONDS_PER_CSS_MODULE = 0.02;
const MAX_CSS_MODULES_PER_PAGE = 20;

// Target build time in seconds
const targetSeconds = buildMinutes * 60;

// Calculate strategy
let numSSGPages = Math.min(MAX_SSG_PAGES, Math.ceil((targetSeconds - BASE_OVERHEAD) / SECONDS_PER_PAGE));
let pageTime = numSSGPages * SECONDS_PER_PAGE;
let remainingAfterPages = targetSeconds - BASE_OVERHEAD - pageTime;

// Phase 2: Heavy TypeScript components for remaining time
let numHeavyComponents = 0;
let heavyComponentTime = 0;
if (remainingAfterPages > 0) {
  numHeavyComponents = Math.min(
    MAX_HEAVY_COMPONENTS,
    Math.ceil(remainingAfterPages / SECONDS_PER_HEAVY_COMPONENT)
  );
  heavyComponentTime = numHeavyComponents * SECONDS_PER_HEAVY_COMPONENT;
}

let remainingAfterHeavy = remainingAfterPages - heavyComponentTime;

// Phase 3: Additional CSS modules per page
let numCSSModulesPerPage = 1;
let totalExtraCSSTime = 0;
if (remainingAfterHeavy > 0 && numSSGPages > 0) {
  const extraCSSNeeded = Math.ceil(remainingAfterHeavy / SECONDS_PER_CSS_MODULE);
  const extraCSSPerPage = Math.min(MAX_CSS_MODULES_PER_PAGE - 1, Math.ceil(extraCSSNeeded / numSSGPages));
  numCSSModulesPerPage = 1 + extraCSSPerPage;
  totalExtraCSSTime = (numCSSModulesPerPage - 1) * numSSGPages * SECONDS_PER_CSS_MODULE;
}

const expectedBuildTime = BASE_OVERHEAD + pageTime + heavyComponentTime + totalExtraCSSTime;

// Fixed values
const numSharedComponents = 500;
const numApiRoutes = 5;

console.log(`\nv12 Load Composition:`);
console.log(`  Target: ${targetSeconds}s (${buildMinutes}min)`);
console.log(`  Base overhead: ${BASE_OVERHEAD}s`);
console.log(`  SSG pages: ${numSSGPages} (~${Math.round(pageTime)}s)`);
console.log(`  Heavy TS components: ${numHeavyComponents} (~${Math.round(heavyComponentTime)}s)`);
console.log(`  CSS modules per page: ${numCSSModulesPerPage} (~${Math.round(totalExtraCSSTime)}s extra)`);
console.log(`  Expected total: ~${Math.round(expectedBuildTime)}s`);

// =============================================================================
// Clean up previous generated files
// =============================================================================

const generatedDir = join(projectRoot, 'src', 'generated');
if (existsSync(generatedDir)) {
  rmSync(generatedDir, { recursive: true });
}
mkdirSync(generatedDir, { recursive: true });
mkdirSync(join(generatedDir, 'components'), { recursive: true });
mkdirSync(join(generatedDir, 'heavy'), { recursive: true });
mkdirSync(join(generatedDir, 'styles'), { recursive: true });

const apiGeneratedDir = join(projectRoot, 'src', 'app', 'api', 'generated');
if (existsSync(apiGeneratedDir)) {
  rmSync(apiGeneratedDir, { recursive: true });
}

const ssgDir = join(projectRoot, 'src', 'app', 'ssg');
if (existsSync(ssgDir)) {
  rmSync(ssgDir, { recursive: true });
}

// =============================================================================
// Shared Components (simple)
// =============================================================================

function generateSharedComponent(index) {
  return `'use client';
import React, { memo } from 'react';

interface Props {
  id: string;
  value: number;
  label?: string;
}

const SharedComponent${index} = memo(function SharedComponent${index}({ id, value, label }: Props) {
  const computed = Math.sin(value * ${index + 1}) * Math.cos(value);
  
  return (
    <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded">
      <span className="font-medium">{label || 'Item'} {id}</span>
      <span className="ml-2 text-zinc-500">{computed.toFixed(2)}</span>
    </div>
  );
});

SharedComponent${index}.displayName = 'SharedComponent${index}';
export default SharedComponent${index};
`;
}

// =============================================================================
// Heavy TypeScript Components (complex generics to slow compilation)
// =============================================================================

function generateHeavyComponent(index) {
  return `'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly${index}<T> = T extends (infer U)[]
  ? DeepReadonlyArray${index}<U>
  : T extends object
  ? DeepReadonlyObject${index}<T>
  : T;

interface DeepReadonlyArray${index}<T> extends ReadonlyArray<DeepReadonly${index}<T>> {}

type DeepReadonlyObject${index}<T> = {
  readonly [P in keyof T]: DeepReadonly${index}<T[P]>;
};

type UnionToIntersection${index}<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf${index}<T> = UnionToIntersection${index}<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push${index}<T extends unknown[], V> = [...T, V];

type TuplifyUnion${index}<T, L = LastOf${index}<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push${index}<TuplifyUnion${index}<Exclude<T, L>>, L>;

type DeepPartial${index}<T> = T extends object
  ? { [P in keyof T]?: DeepPartial${index}<T[P]> }
  : T;

type Paths${index}<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? \`\${K}\` | Join${index}<K, Paths${index}<T[K], Prev${index}[D]>> : never }[keyof T]
  : never;

type Prev${index} = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join${index}<K, P> = K extends string | number
  ? P extends string | number
    ? \`\${K}.\${P}\`
    : never
  : never;

interface NestedConfig${index} {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths${index} = Paths${index}<NestedConfig${index}>;

interface HeavyProps${index} {
  config: DeepPartial${index}<NestedConfig${index}>;
  path?: ConfigPaths${index};
}

const HeavyComponent${index} = memo(function HeavyComponent${index}({ config }: HeavyProps${index}) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * ${index}) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-${index} p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H${index}: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent${index}.displayName = 'HeavyComponent${index}';
export default HeavyComponent${index};
`;
}

// =============================================================================
// CSS Files (complex selectors for processing time)
// =============================================================================

function generateCssModule(pageIndex, moduleIndex) {
  const hue = ((pageIndex * 37) + (moduleIndex * 17)) % 360;
  let css = `/* Page ${pageIndex} Module ${moduleIndex} */\n`;
  
  // Generate multiple complex selectors
  for (let i = 0; i < 30; i++) {
    const h = (hue + i * 12) % 360;
    css += `
.p${pageIndex}-m${moduleIndex}-v${i} {
  --idx: ${i};
  color: hsl(${h}, 70%, 50%);
  background: linear-gradient(${i * 12}deg, hsl(${h}, 60%, 95%), hsl(${(h + 30) % 360}, 60%, 90%));
  padding: ${1 + (i % 4)}rem;
  border-radius: ${4 + (i % 8)}px;
  box-shadow: 0 ${i % 4}px ${i % 8}px rgba(0,0,0,0.${i % 10});
  transform: rotate(${i}deg) scale(1.0${i % 10});
  transition: all 0.${i % 5}s ease;
}
.p${pageIndex}-m${moduleIndex}-v${i}:hover {
  transform: rotate(${i + 5}deg) scale(1.0${(i + 5) % 10});
}
.p${pageIndex}-m${moduleIndex}-v${i}::before {
  content: "v${i}";
  position: absolute;
  top: ${i % 10}px;
  left: ${i % 10}px;
}
`;
  }
  
  return css;
}

// =============================================================================
// SSG Pages
// =============================================================================

function generateSSGPage(pageIndex, cssModulesPerPage, heavyComponentCount) {
  const imports = [];
  const componentUses = [];
  
  // Import CSS modules
  for (let m = 0; m < cssModulesPerPage; m++) {
    imports.push(`import '@/generated/styles/p${pageIndex}_m${m}.css';`);
  }
  
  // Import shared components
  const sharedCount = 5;
  const startIdx = (pageIndex * 7) % numSharedComponents;
  for (let i = 0; i < sharedCount; i++) {
    const compIdx = (startIdx + i) % numSharedComponents;
    imports.push(`import SharedComponent${compIdx} from '@/generated/components/SharedComponent${compIdx}';`);
    componentUses.push(`<SharedComponent${compIdx} id="${pageIndex}-${i}" value={${pageIndex * 100 + i}} label="S" />`);
  }
  
  // Import heavy components if available
  if (heavyComponentCount > 0) {
    const heavyCount = Math.min(2, heavyComponentCount);
    const heavyStartIdx = (pageIndex * 11) % heavyComponentCount;
    for (let i = 0; i < heavyCount; i++) {
      const compIdx = (heavyStartIdx + i) % heavyComponentCount;
      imports.push(`import HeavyComponent${compIdx} from '@/generated/heavy/HeavyComponent${compIdx}';`);
      componentUses.push(`<HeavyComponent${compIdx} config={{ level1: { level2: { level3: { value: "p${pageIndex}", count: ${pageIndex}, enabled: true, items: [] }}}}} />`);
    }
  }
  
  return `// SSG Page ${pageIndex} - v12
${imports.join('\n')}

export default function SSGPage${pageIndex}() {
  return (
    <div className="p${pageIndex}-m0-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page ${pageIndex}</h1>
      <div className="grid grid-cols-2 gap-1">
        ${componentUses.join('\n        ')}
      </div>
    </div>
  );
}
`;
}

// =============================================================================
// API Routes
// =============================================================================

function generateApiRoute(index) {
  return `import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    id: ${index},
    timestamp: Date.now(),
  });
}
`;
}

// =============================================================================
// Build Config
// =============================================================================

function updateBuildConfig() {
  const config = {
    BuildTimeOnStandard: `${buildMinutes}min`,
    FullTimeOnStandard: `${buildMinutes}min`,
    MachineType: "Standard",
    ssgPages: numSSGPages,
    sharedComponents: numSharedComponents,
    heavyComponents: numHeavyComponents,
    cssModulesPerPage: numCSSModulesPerPage,
    apiRoutes: numApiRoutes,
    prebuildDelaySeconds: 0,
    strategy: "ssg-ts-css-v12",
    expectedBuildTime: Math.round(expectedBuildTime),
    generatedAt: new Date().toISOString(),
    buildId: randomUUID(),
  };
  writeFileSync(
    join(projectRoot, 'build-config.json'),
    JSON.stringify(config, null, 2) + '\n'
  );
  console.log(`\nUpdated build-config.json`);
}

// =============================================================================
// Generate All Files
// =============================================================================

// 1. Shared components
console.log('\n1. Generating shared components...');
for (let i = 0; i < numSharedComponents; i++) {
  writeFileSync(join(generatedDir, 'components', `SharedComponent${i}.tsx`), generateSharedComponent(i));
  if ((i + 1) % 100 === 0) console.log(`   ${i + 1}/${numSharedComponents}`);
}
console.log(`   Done: ${numSharedComponents} shared components`);

// 2. Heavy TypeScript components
if (numHeavyComponents > 0) {
  console.log('\n2. Generating heavy TypeScript components...');
  for (let i = 0; i < numHeavyComponents; i++) {
    writeFileSync(join(generatedDir, 'heavy', `HeavyComponent${i}.tsx`), generateHeavyComponent(i));
    if ((i + 1) % 1000 === 0) console.log(`   ${i + 1}/${numHeavyComponents}`);
  }
  console.log(`   Done: ${numHeavyComponents} heavy components`);
}

// 3. CSS modules
console.log('\n3. Generating CSS modules...');
let cssCount = 0;
for (let p = 0; p < numSSGPages; p++) {
  for (let m = 0; m < numCSSModulesPerPage; m++) {
    writeFileSync(join(generatedDir, 'styles', `p${p}_m${m}.css`), generateCssModule(p, m));
    cssCount++;
  }
  if ((p + 1) % 500 === 0) console.log(`   ${cssCount} CSS files (${p + 1}/${numSSGPages} pages)`);
}
console.log(`   Done: ${cssCount} CSS files`);

// 4. SSG pages
console.log('\n4. Generating SSG pages...');
mkdirSync(ssgDir, { recursive: true });
for (let i = 0; i < numSSGPages; i++) {
  const pageDir = join(ssgDir, `page${i}`);
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, 'page.tsx'), generateSSGPage(i, numCSSModulesPerPage, numHeavyComponents));
  if ((i + 1) % 500 === 0) console.log(`   ${i + 1}/${numSSGPages}`);
}
console.log(`   Done: ${numSSGPages} SSG pages`);

// 5. API routes
console.log('\n5. Generating API routes...');
mkdirSync(apiGeneratedDir, { recursive: true });
for (let i = 0; i < numApiRoutes; i++) {
  const routeDir = join(apiGeneratedDir, `route${i}`);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'route.ts'), generateApiRoute(i));
}
console.log(`   Done: ${numApiRoutes} API routes`);

updateBuildConfig();

console.log('\n========================================');
console.log('Generation complete!');
console.log(`Strategy: v12 SSG + Heavy TS + CSS`);
console.log(`Expected build time: ~${Math.round(expectedBuildTime)}s (~${(expectedBuildTime/60).toFixed(1)}min)`);
console.log('========================================\n');

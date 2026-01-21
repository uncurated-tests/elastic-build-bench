#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing
 * 
 * v10 Strategy: Barrel Imports + SSG Pages
 * - SSG pages drive base build time (~0.13s per page + 19s overhead)
 * - Heavy barrel-file imports (MUI Icons, React Icons, Lucide) add compile time
 * - Each barrel import is used in multiple components to ensure it's bundled
 * - Complex TypeScript types for additional overhead
 * - No MDX (incompatible with Turbopack)
 * 
 * Usage: node scripts/generate-load.mjs <buildMinutes> <e2eMultiplier>
 * Example: node scripts/generate-load.mjs 4 2  # 4min build, 2x E2E (8min total)
 */

import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Parse arguments
const buildMinutes = parseFloat(process.argv[2] || '1');
const e2eMultiplier = parseFloat(process.argv[3] || '2');

console.log(`\n========================================`);
console.log(`v10 Load Generator: Barrel Imports Strategy`);
console.log(`========================================`);
console.log(`Target: ${buildMinutes}min build, ${e2eMultiplier}x E2E multiplier`);

// =============================================================================
// v10 CALIBRATION - Based on v8 learnings + barrel import strategy
// =============================================================================
// 
// Build time components (on Standard 4 vCPU):
//   1. Base overhead: ~19s (Next.js startup, compile setup)
//   2. SSG pages: ~0.13s per page (up to 2000 pages max due to OOM)
//   3. Heavy barrel imports: Each import forces parsing all exports
//      - @mui/icons-material: ~11,000 icons - adds ~20-40s when used widely
//      - react-icons: ~40,000 icons across subpackages - adds ~15-30s  
//      - lucide-react: ~1,500 icons - adds ~10-20s
//   4. Component complexity: More components using icons = more build time
//
// Key insight: Barrel imports add the most time when:
//   - Used with `import * as X from 'package'` pattern
//   - Used across MANY components (forces repeated parsing/bundling)
//   - Each component that imports adds incremental overhead
//
// Strategy by target:
//   1-4min: SSG pages only (proven linear scaling)
//   5-7min: SSG pages + MUI icons barrel in many components
//   8-10min: SSG pages + MUI + React Icons barrels
//   10-20min: All barrels + max SSG pages + more icon-heavy components
//
// =============================================================================

const BASE_OVERHEAD = 19;           // seconds
const MAX_SSG_PAGES = 2000;         // Cap to avoid OOM errors
const SECONDS_PER_PAGE = 0.13;      // Empirical from v8
const MAX_PAGE_TIME = MAX_SSG_PAGES * SECONDS_PER_PAGE; // ~260s or 4.3min

// Barrel import overhead (when used across many components)
// These add time by forcing the bundler to parse and process large export lists
const BARREL_IMPORT_OVERHEAD = {
  muiIcons: 25,       // @mui/icons-material - 11k icons
  reactIcons: 20,     // react-icons - multiple sub-packages
  lucide: 12,         // lucide-react - 1.5k icons
};

// Components using barrel imports add incremental time
const SECONDS_PER_BARREL_COMPONENT = 0.15;

// Target build time in seconds
const targetSeconds = buildMinutes * 60;
const targetE2EMinutes = buildMinutes * e2eMultiplier;

// =============================================================================
// Calculate load composition based on target
// =============================================================================

let remainingTime = targetSeconds - BASE_OVERHEAD;

// Determine barrel import strategy based on target
let useBarrelImports = {
  muiIcons: false,
  reactIcons: false,
  lucide: false,
};

let barrelComponentCounts = {
  muiIcons: 0,
  reactIcons: 0,
  lucide: 0,
};

// For 5+ min builds, start using barrel imports
if (buildMinutes >= 5) {
  useBarrelImports.muiIcons = true;
  remainingTime -= BARREL_IMPORT_OVERHEAD.muiIcons;
  // Use barrel imports in many components to maximize overhead
  barrelComponentCounts.muiIcons = Math.min(Math.ceil((buildMinutes - 4) * 30), 200);
  remainingTime -= barrelComponentCounts.muiIcons * SECONDS_PER_BARREL_COMPONENT;
}

if (buildMinutes >= 8) {
  useBarrelImports.reactIcons = true;
  remainingTime -= BARREL_IMPORT_OVERHEAD.reactIcons;
  barrelComponentCounts.reactIcons = Math.min(Math.ceil((buildMinutes - 7) * 25), 150);
  remainingTime -= barrelComponentCounts.reactIcons * SECONDS_PER_BARREL_COMPONENT;
}

if (buildMinutes >= 10) {
  useBarrelImports.lucide = true;
  remainingTime -= BARREL_IMPORT_OVERHEAD.lucide;
  barrelComponentCounts.lucide = Math.min(Math.ceil((buildMinutes - 9) * 20), 100);
  remainingTime -= barrelComponentCounts.lucide * SECONDS_PER_BARREL_COMPONENT;
}

// For very long builds (15+min), increase barrel component usage significantly
if (buildMinutes >= 15) {
  barrelComponentCounts.muiIcons = Math.min(barrelComponentCounts.muiIcons + 100, 400);
  barrelComponentCounts.reactIcons = Math.min(barrelComponentCounts.reactIcons + 80, 300);
  barrelComponentCounts.lucide = Math.min(barrelComponentCounts.lucide + 60, 200);
  remainingTime -= 80 * SECONDS_PER_BARREL_COMPONENT; // Additional overhead
}

// Calculate SSG pages from remaining time
let numSSGPages = Math.ceil(Math.max(0, remainingTime) / SECONDS_PER_PAGE);
numSSGPages = Math.min(numSSGPages, MAX_SSG_PAGES);
numSSGPages = Math.max(100, numSSGPages); // Minimum 100 pages

// Complex TypeScript types (scaled by build target, adds modest overhead)
const numComplexTypes = Math.min(30 + Math.floor(buildMinutes * 8), 150);

// Fixed values
const numApiRoutes = 5;
const numSharedComponents = 500; // Base component pool

// Calculate total barrel components
const totalBarrelComponents = 
  barrelComponentCounts.muiIcons + 
  barrelComponentCounts.reactIcons + 
  barrelComponentCounts.lucide;

console.log(`\nv10 Load Composition:`);
console.log(`  Base overhead: ${BASE_OVERHEAD}s`);
console.log(`  SSG pages: ${numSSGPages} (~${Math.round(numSSGPages * SECONDS_PER_PAGE)}s)`);
console.log(`  Barrel imports:`);
if (useBarrelImports.muiIcons) {
  console.log(`    - MUI Icons: ${barrelComponentCounts.muiIcons} components (~${Math.round(BARREL_IMPORT_OVERHEAD.muiIcons + barrelComponentCounts.muiIcons * SECONDS_PER_BARREL_COMPONENT)}s)`);
}
if (useBarrelImports.reactIcons) {
  console.log(`    - React Icons: ${barrelComponentCounts.reactIcons} components (~${Math.round(BARREL_IMPORT_OVERHEAD.reactIcons + barrelComponentCounts.reactIcons * SECONDS_PER_BARREL_COMPONENT)}s)`);
}
if (useBarrelImports.lucide) {
  console.log(`    - Lucide: ${barrelComponentCounts.lucide} components (~${Math.round(BARREL_IMPORT_OVERHEAD.lucide + barrelComponentCounts.lucide * SECONDS_PER_BARREL_COMPONENT)}s)`);
}
if (!useBarrelImports.muiIcons && !useBarrelImports.reactIcons && !useBarrelImports.lucide) {
  console.log(`    (none - using SSG pages only for <5min builds)`);
}
console.log(`  Complex types: ${numComplexTypes}`);
console.log(`  Expected total: ~${targetSeconds}s`);

// =============================================================================
// Clean up previous generated files
// =============================================================================

const generatedDir = join(projectRoot, 'src', 'generated');
if (existsSync(generatedDir)) {
  rmSync(generatedDir, { recursive: true });
}
mkdirSync(generatedDir, { recursive: true });
mkdirSync(join(generatedDir, 'components'), { recursive: true });
mkdirSync(join(generatedDir, 'barrel-components'), { recursive: true });
mkdirSync(join(generatedDir, 'types'), { recursive: true });
mkdirSync(join(generatedDir, 'styles'), { recursive: true });

const apiGeneratedDir = join(projectRoot, 'src', 'app', 'api', 'generated');
if (existsSync(apiGeneratedDir)) {
  rmSync(apiGeneratedDir, { recursive: true });
}

const ssgDir = join(projectRoot, 'src', 'app', 'ssg');
if (existsSync(ssgDir)) {
  rmSync(ssgDir, { recursive: true });
}

// Clean up old MDX directories if they exist
const mdxDir = join(generatedDir, 'mdx');
if (existsSync(mdxDir)) {
  rmSync(mdxDir, { recursive: true });
}
const docsDir = join(projectRoot, 'src', 'app', 'docs');
if (existsSync(docsDir)) {
  rmSync(docsDir, { recursive: true });
}

// =============================================================================
// Complex TypeScript Types (Deep Inference)
// =============================================================================

function generateComplexTypeFile(index) {
  const depth = 8 + (index % 6);
  const unionSize = 10 + (index % 20);
  
  const unionMembers = Array.from({ length: unionSize }, (_, i) => 
    `'option_${index}_${i}'`
  ).join(' | ');
  
  return `// Complex type file ${index} - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_${index}<T, D extends number = ${depth}> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: ${index}; depth: D };
      nested: DeepNested_${index}<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_${index}<T, Prev[D]>;
    };

type Distributed_${index}<T> = T extends string
  ? { type: 'string'; value: T; index: ${index} }
  : T extends number
  ? { type: 'number'; value: T; computed: \`value_\${T}\` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_${index} = ${unionMembers};
type OptionMap_${index} = {
  [K in OptionKey_${index}]: {
    key: K;
    index: ${index};
    handler: (input: K) => Distributed_${index}<K>;
  };
};

type ExtractReturn_${index}<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_${index} = \`on\$\{Capitalize<OptionKey_${index}>\}Change\`;

export type {
  DeepNested_${index},
  Distributed_${index},
  OptionKey_${index},
  OptionMap_${index},
  ExtractReturn_${index},
  EventName_${index},
};
`;
}

// =============================================================================
// Barrel Import Components (MUI Icons, React Icons, Lucide)
// These components use `import * as X` pattern to force full barrel parsing
// =============================================================================

function generateMuiIconsComponent(index) {
  // Use wildcard import to force parsing all 11k icons
  return `'use client';
import React, { memo } from 'react';
import * as MuiIcons from '@mui/icons-material';

// This component forces the bundler to parse all MUI icons
const iconNames = Object.keys(MuiIcons);
const IconComponent = (MuiIcons as Record<string, React.ComponentType>)[iconNames[${index} % iconNames.length]];

interface Props {
  size?: number;
  color?: string;
}

const MuiIconComponent${index} = memo(function MuiIconComponent${index}({ size = 24, color }: Props) {
  const selectedIconName = iconNames[${index} % iconNames.length];
  const randomIndex = (${index} * 17 + 13) % iconNames.length;
  const SecondIcon = (MuiIcons as Record<string, React.ComponentType>)[iconNames[randomIndex]];
  
  return (
    <div className="flex items-center gap-2 p-2">
      <span className="text-sm text-zinc-500">#{${index}}</span>
      {IconComponent && <IconComponent style={{ fontSize: size, color }} />}
      {SecondIcon && <SecondIcon style={{ fontSize: size * 0.8, color }} />}
      <span className="text-xs">{selectedIconName}</span>
    </div>
  );
});

MuiIconComponent${index}.displayName = 'MuiIconComponent${index}';
export default MuiIconComponent${index};
`;
}

function generateReactIconsComponent(index) {
  // Use multiple react-icons subpackages to maximize overhead
  const subpackages = ['fa', 'md', 'io', 'gi', 'fi', 'ai', 'bs', 'bi'];
  const pkg = subpackages[index % subpackages.length];
  
  return `'use client';
import React, { memo } from 'react';
import * as Icons from 'react-icons/${pkg}';

// This component forces the bundler to parse react-icons/${pkg}
const iconNames = Object.keys(Icons).filter(k => typeof (Icons as Record<string, unknown>)[k] === 'function');
const IconComponent = (Icons as Record<string, React.ComponentType>)[iconNames[${index} % Math.max(1, iconNames.length)]];

interface Props {
  size?: number;
  color?: string;
}

const ReactIconComponent${index} = memo(function ReactIconComponent${index}({ size = 24, color }: Props) {
  const selectedName = iconNames[${index} % Math.max(1, iconNames.length)];
  
  return (
    <div className="flex items-center gap-2 p-2">
      <span className="text-sm text-zinc-500">ri#${index}</span>
      {IconComponent && <IconComponent size={size} color={color} />}
      <span className="text-xs">{selectedName}</span>
    </div>
  );
});

ReactIconComponent${index}.displayName = 'ReactIconComponent${index}';
export default ReactIconComponent${index};
`;
}

function generateLucideComponent(index) {
  return `'use client';
import React, { memo } from 'react';
import * as LucideIcons from 'lucide-react';

// This component forces the bundler to parse all lucide icons
const iconEntries = Object.entries(LucideIcons).filter(([, v]) => typeof v === 'function' && v.toString().includes('createElement'));
const IconComponent = iconEntries[${index} % Math.max(1, iconEntries.length)]?.[1] as React.ComponentType<{ size?: number; color?: string }> | undefined;

interface Props {
  size?: number;
  color?: string;
}

const LucideComponent${index} = memo(function LucideComponent${index}({ size = 24, color }: Props) {
  const [iconName] = iconEntries[${index} % Math.max(1, iconEntries.length)] || ['Unknown'];
  
  return (
    <div className="flex items-center gap-2 p-2">
      <span className="text-sm text-zinc-500">lu#${index}</span>
      {IconComponent && <IconComponent size={size} color={color} />}
      <span className="text-xs">{iconName}</span>
    </div>
  );
});

LucideComponent${index}.displayName = 'LucideComponent${index}';
export default LucideComponent${index};
`;
}

// =============================================================================
// Shared Components (simple, no heavy imports)
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
// CSS Files
// =============================================================================

function generateCssFile(index) {
  return `/* Page ${index} styles */
.page-${index} {
  --page-index: ${index};
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.page-${index}-header {
  font-size: calc(1rem + ${index % 10}px);
  color: hsl(${(index * 37) % 360}, 70%, 50%);
}

.page-${index}-content {
  padding: ${1 + (index % 4)}rem;
  border-radius: ${4 + (index % 8)}px;
}
`;
}

// =============================================================================
// SSG Pages
// =============================================================================

function generateSSGPage(pageIndex, useBarrelImports, barrelComponentCounts) {
  const imports = [];
  const componentUses = [];
  
  // Import some shared components
  const sharedCount = 10;
  const startIdx = (pageIndex * 7) % numSharedComponents;
  for (let i = 0; i < sharedCount; i++) {
    const compIdx = (startIdx + i) % numSharedComponents;
    imports.push(`import SharedComponent${compIdx} from '@/generated/components/SharedComponent${compIdx}';`);
    componentUses.push(`<SharedComponent${compIdx} id="${pageIndex}-${i}" value={${pageIndex * 100 + i}} label="Item" />`);
  }
  
  // For pages that use barrel components, import them
  // Spread barrel component usage across pages
  if (useBarrelImports.muiIcons && pageIndex < barrelComponentCounts.muiIcons) {
    imports.push(`import MuiIconComponent${pageIndex} from '@/generated/barrel-components/MuiIconComponent${pageIndex}';`);
    componentUses.push(`<MuiIconComponent${pageIndex} size={20} color="#1976d2" />`);
  }
  
  if (useBarrelImports.reactIcons && pageIndex < barrelComponentCounts.reactIcons) {
    imports.push(`import ReactIconComponent${pageIndex} from '@/generated/barrel-components/ReactIconComponent${pageIndex}';`);
    componentUses.push(`<ReactIconComponent${pageIndex} size={20} color="#61dafb" />`);
  }
  
  if (useBarrelImports.lucide && pageIndex < barrelComponentCounts.lucide) {
    imports.push(`import LucideComponent${pageIndex} from '@/generated/barrel-components/LucideComponent${pageIndex}';`);
    componentUses.push(`<LucideComponent${pageIndex} size={20} color="#f97316" />`);
  }
  
  return `// SSG Page ${pageIndex}
import '@/generated/styles/page${pageIndex}.css';
${imports.join('\n')}

export default async function SSGPage${pageIndex}() {
  return (
    <div className="page-${pageIndex} p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-${pageIndex}-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page ${pageIndex}
      </h1>
      <div className="page-${pageIndex}-content grid grid-cols-2 md:grid-cols-4 gap-2">
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
    message: 'API Route ${index}',
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
    FullTimeOnStandard: `${targetE2EMinutes}min`,
    MachineType: "Standard",
    ssgPages: numSSGPages,
    sharedComponents: numSharedComponents,
    barrelComponents: {
      muiIcons: barrelComponentCounts.muiIcons,
      reactIcons: barrelComponentCounts.reactIcons,
      lucide: barrelComponentCounts.lucide,
    },
    complexTypes: numComplexTypes,
    apiRoutes: numApiRoutes,
    strategy: "barrel-imports-v10",
    generatedAt: new Date().toISOString(),
    buildId: randomUUID(),
  };
  writeFileSync(
    join(projectRoot, 'build-config.json'),
    JSON.stringify(config, null, 2) + '\n'
  );
  console.log(`\nUpdated build-config.json:`, config);
}

// =============================================================================
// Generate All Files
// =============================================================================

// 1. Generate complex type files
console.log('\n1. Generating complex TypeScript types...');
const typeExports = [];
for (let i = 0; i < numComplexTypes; i++) {
  const typePath = join(generatedDir, 'types', `complex${i}.ts`);
  writeFileSync(typePath, generateComplexTypeFile(i));
  typeExports.push(`export * from './complex${i}';`);
}
writeFileSync(join(generatedDir, 'types', 'index.ts'), typeExports.join('\n'));
console.log(`   Generated ${numComplexTypes} complex type files`);

// 2. Generate shared components
console.log('\n2. Generating shared components...');
for (let i = 0; i < numSharedComponents; i++) {
  const componentPath = join(generatedDir, 'components', `SharedComponent${i}.tsx`);
  writeFileSync(componentPath, generateSharedComponent(i));
  
  if ((i + 1) % 100 === 0) {
    console.log(`   Generated ${i + 1}/${numSharedComponents} components`);
  }
}
console.log(`   Generated ${numSharedComponents} shared components`);

// 3. Generate barrel import components
console.log('\n3. Generating barrel import components...');
let barrelCount = 0;

if (useBarrelImports.muiIcons) {
  for (let i = 0; i < barrelComponentCounts.muiIcons; i++) {
    const path = join(generatedDir, 'barrel-components', `MuiIconComponent${i}.tsx`);
    writeFileSync(path, generateMuiIconsComponent(i));
    barrelCount++;
  }
  console.log(`   Generated ${barrelComponentCounts.muiIcons} MUI Icons components`);
}

if (useBarrelImports.reactIcons) {
  for (let i = 0; i < barrelComponentCounts.reactIcons; i++) {
    const path = join(generatedDir, 'barrel-components', `ReactIconComponent${i}.tsx`);
    writeFileSync(path, generateReactIconsComponent(i));
    barrelCount++;
  }
  console.log(`   Generated ${barrelComponentCounts.reactIcons} React Icons components`);
}

if (useBarrelImports.lucide) {
  for (let i = 0; i < barrelComponentCounts.lucide; i++) {
    const path = join(generatedDir, 'barrel-components', `LucideComponent${i}.tsx`);
    writeFileSync(path, generateLucideComponent(i));
    barrelCount++;
  }
  console.log(`   Generated ${barrelComponentCounts.lucide} Lucide components`);
}

if (barrelCount === 0) {
  console.log(`   (skipped - barrel imports not needed for <5min builds)`);
}

// 4. Generate CSS files
console.log('\n4. Generating CSS files...');
for (let i = 0; i < numSSGPages; i++) {
  const cssPath = join(generatedDir, 'styles', `page${i}.css`);
  writeFileSync(cssPath, generateCssFile(i));
  
  if ((i + 1) % 500 === 0) {
    console.log(`   Generated ${i + 1}/${numSSGPages} CSS files`);
  }
}
console.log(`   Generated ${numSSGPages} CSS files`);

// 5. Generate SSG pages
console.log('\n5. Generating SSG pages...');
mkdirSync(ssgDir, { recursive: true });
for (let i = 0; i < numSSGPages; i++) {
  const pageDir = join(ssgDir, `page${i}`);
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, 'page.tsx'), generateSSGPage(i, useBarrelImports, barrelComponentCounts));
  
  if ((i + 1) % 500 === 0) {
    console.log(`   Generated ${i + 1}/${numSSGPages} SSG pages`);
  }
}
console.log(`   Generated ${numSSGPages} SSG pages`);

// 6. Generate API routes
console.log('\n6. Generating API routes...');
mkdirSync(apiGeneratedDir, { recursive: true });
for (let i = 0; i < numApiRoutes; i++) {
  const routeDir = join(apiGeneratedDir, `route${i}`);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'route.ts'), generateApiRoute(i));
}
console.log(`   Generated ${numApiRoutes} API routes`);

// Update build config
updateBuildConfig();

console.log('\n========================================');
console.log('Generation complete!');
console.log('========================================');
console.log(`Strategy: Barrel Imports v10`);
console.log(`Expected build time on Standard: ~${buildMinutes} min`);
console.log(`Expected E2E time on Standard: ~${targetE2EMinutes} min`);
console.log('');

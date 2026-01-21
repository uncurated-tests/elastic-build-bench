#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing - v14
 * 
 * v14 Strategy: Static SSG Pages + CSS Module Scaling ONLY
 * - Max 2000 static SSG pages (~200s)
 * - Many CSS modules per page for additional time (primary scaling mechanism)
 * - NO dynamic routes (caused hangs in v13)
 * - NO heavy TypeScript (caused hangs in v12)
 * - NO delays
 * 
 * Calibration from v12 results:
 * - Base overhead: ~25s
 * - Per SSG page: ~0.10s (validated: 950 pages = ~120s, 2000 pages = ~225s)
 * - Per CSS module: needs calibration, estimate ~0.015-0.025s
 * 
 * Usage: node scripts/generate-load-v14.mjs <buildMinutes>
 * Example: node scripts/generate-load-v14.mjs 10
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
console.log(`v14 Load Generator: Static SSG + CSS Only`);
console.log(`========================================`);
console.log(`Target: ${buildMinutes}min build`);

// =============================================================================
// v14 CALIBRATION
// =============================================================================

const BASE_OVERHEAD = 25;              // seconds (Next.js startup)
const SECONDS_PER_STATIC_PAGE = 0.10;  // Validated from v12
const MAX_STATIC_PAGES = 2000;         // OOM limit

// CSS module calibration - conservative estimate
// Each CSS file has ~40 complex selectors with box-shadows, gradients, etc.
const SECONDS_PER_CSS_MODULE = 0.015;  // Conservative estimate
const MAX_CSS_MODULES_PER_PAGE = 100;  // Allow high scaling

// Target build time in seconds
const targetSeconds = buildMinutes * 60;

// =============================================================================
// Calculate Strategy
// =============================================================================

// Phase 1: Static SSG pages (up to MAX_STATIC_PAGES)
let numStaticPages = Math.min(MAX_STATIC_PAGES, Math.ceil((targetSeconds - BASE_OVERHEAD) / SECONDS_PER_STATIC_PAGE));
let staticPageTime = numStaticPages * SECONDS_PER_STATIC_PAGE;
let remainingAfterStatic = targetSeconds - BASE_OVERHEAD - staticPageTime;

// Phase 2: CSS modules per page for remaining time
let cssModulesPerPage = 1;
let totalExtraCSSTime = 0;
if (remainingAfterStatic > 0 && numStaticPages > 0) {
  const extraCSSNeeded = Math.ceil(remainingAfterStatic / SECONDS_PER_CSS_MODULE);
  const extraCSSPerPage = Math.min(MAX_CSS_MODULES_PER_PAGE - 1, Math.ceil(extraCSSNeeded / numStaticPages));
  cssModulesPerPage = 1 + extraCSSPerPage;
  totalExtraCSSTime = (cssModulesPerPage - 1) * numStaticPages * SECONDS_PER_CSS_MODULE;
}

const totalCSSModules = numStaticPages * cssModulesPerPage;
const expectedBuildTime = BASE_OVERHEAD + staticPageTime + totalExtraCSSTime;

// Fixed values
const numSharedComponents = 500;
const numApiRoutes = 5;

console.log(`\nv14 Load Composition:`);
console.log(`  Target: ${targetSeconds}s (${buildMinutes}min)`);
console.log(`  Base overhead: ${BASE_OVERHEAD}s`);
console.log(`  Static SSG pages: ${numStaticPages} (~${Math.round(staticPageTime)}s)`);
console.log(`  CSS modules per page: ${cssModulesPerPage}`);
console.log(`  Total CSS modules: ${totalCSSModules} (~${Math.round(staticPageTime + totalExtraCSSTime - BASE_OVERHEAD)}s total with pages)`);
console.log(`  Expected total: ~${Math.round(expectedBuildTime)}s`);

if (expectedBuildTime < targetSeconds - 30) {
  console.log(`\n  WARNING: Expected time ${Math.round(expectedBuildTime)}s is less than target ${targetSeconds}s`);
  console.log(`           CSS module constant may need to be lower, or other build sources needed`);
}

// =============================================================================
// Clean up previous generated files
// =============================================================================

const generatedDir = join(projectRoot, 'src', 'generated');
if (existsSync(generatedDir)) {
  rmSync(generatedDir, { recursive: true });
}
mkdirSync(generatedDir, { recursive: true });
mkdirSync(join(generatedDir, 'components'), { recursive: true });
mkdirSync(join(generatedDir, 'styles'), { recursive: true });

const apiGeneratedDir = join(projectRoot, 'src', 'app', 'api', 'generated');
if (existsSync(apiGeneratedDir)) {
  rmSync(apiGeneratedDir, { recursive: true });
}

const ssgDir = join(projectRoot, 'src', 'app', 'ssg');
if (existsSync(ssgDir)) {
  rmSync(ssgDir, { recursive: true });
}

const dynamicDir = join(projectRoot, 'src', 'app', 'dynamic');
if (existsSync(dynamicDir)) {
  rmSync(dynamicDir, { recursive: true });
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
// CSS Files (complex selectors for processing time)
// =============================================================================

function generateCssModule(pageIndex, moduleIndex) {
  const hue = ((pageIndex * 37) + (moduleIndex * 17)) % 360;
  let css = `/* Page ${pageIndex} Module ${moduleIndex} - v14 */\n`;
  
  // Generate 50 complex selectors per file for more processing time
  for (let i = 0; i < 50; i++) {
    const h = (hue + i * 7) % 360;
    css += `
.p${pageIndex}-m${moduleIndex}-s${i} {
  --idx: ${i};
  --page: ${pageIndex};
  --mod: ${moduleIndex};
  color: hsl(${h}, 70%, 50%);
  background: linear-gradient(${i * 7}deg, hsl(${h}, 60%, 95%), hsl(${(h + 30) % 360}, 60%, 90%));
  padding: ${1 + (i % 4)}rem ${0.5 + (i % 3)}rem;
  margin: ${(i % 5) * 0.25}rem ${(i % 3) * 0.25}rem;
  border: ${1 + (i % 3)}px solid hsl(${h}, 50%, 70%);
  border-radius: ${4 + (i % 12)}px;
  box-shadow: 
    0 ${1 + (i % 4)}px ${2 + (i % 8)}px rgba(0,0,0,0.${1 + (i % 10)}),
    inset 0 ${i % 2}px ${i % 4}px rgba(255,255,255,0.${i % 5}),
    ${i % 2}px ${i % 3}px ${i % 5}px rgba(0,0,0,0.05);
  transform: rotate(${(i % 10) - 5}deg) scale(1.0${i % 10}) translateX(${i % 5}px);
  transition: all 0.${2 + (i % 4)}s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${0.75 + (i % 4) * 0.125}rem;
  line-height: ${1.2 + (i % 5) * 0.1};
  text-shadow: ${i % 2}px ${i % 2}px ${i % 3}px rgba(0,0,0,0.1);
  filter: brightness(1.0${i % 5}) contrast(1.0${i % 3});
}
.p${pageIndex}-m${moduleIndex}-s${i}:hover {
  transform: rotate(${(i % 10) - 5 + 2}deg) scale(1.0${(i + 2) % 10}) translateX(${(i + 2) % 5}px);
  box-shadow: 
    0 ${2 + (i % 6)}px ${4 + (i % 12)}px rgba(0,0,0,0.${2 + (i % 10)}),
    inset 0 ${(i + 1) % 3}px ${(i + 1) % 6}px rgba(255,255,255,0.${(i + 2) % 5}),
    ${(i + 1) % 3}px ${(i + 1) % 4}px ${(i + 1) % 6}px rgba(0,0,0,0.08);
}
.p${pageIndex}-m${moduleIndex}-s${i}:focus {
  outline: ${2 + (i % 2)}px solid hsl(${(h + 180) % 360}, 70%, 50%);
  outline-offset: ${1 + (i % 3)}px;
}
.p${pageIndex}-m${moduleIndex}-s${i}::before {
  content: "${pageIndex}-${moduleIndex}-${i}";
  position: absolute;
  top: ${i % 10}px;
  left: ${i % 10}px;
  font-size: 0.5rem;
  opacity: 0.3;
  color: hsl(${h}, 30%, 50%);
}
.p${pageIndex}-m${moduleIndex}-s${i}::after {
  content: "";
  position: absolute;
  bottom: ${i % 5}px;
  right: ${i % 5}px;
  width: ${8 + (i % 16)}px;
  height: ${8 + (i % 16)}px;
  background: radial-gradient(circle, hsl(${(h + 60) % 360}, 50%, 80%), transparent);
  border-radius: 50%;
  opacity: 0.5;
}
`;
  }
  
  return css;
}

// =============================================================================
// Static SSG Pages
// =============================================================================

function generateStaticSSGPage(pageIndex) {
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
  
  return `// Static SSG Page ${pageIndex} - v14
${imports.join('\n')}

export default function SSGPage${pageIndex}() {
  return (
    <div className="p${pageIndex}-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page ${pageIndex}</h1>
      <div className="grid grid-cols-2 gap-1">
        ${componentUses.join('\n        ')}
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        v14: ${cssModulesPerPage} CSS modules
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
    staticSsgPages: numStaticPages,
    sharedComponents: numSharedComponents,
    cssModulesPerPage: cssModulesPerPage,
    totalCSSModules: totalCSSModules,
    apiRoutes: numApiRoutes,
    prebuildDelaySeconds: 0,
    strategy: "ssg-css-v14",
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

// 2. CSS modules for static pages
console.log('\n2. Generating CSS modules...');
let cssCount = 0;
for (let p = 0; p < numStaticPages; p++) {
  for (let m = 0; m < cssModulesPerPage; m++) {
    writeFileSync(join(generatedDir, 'styles', `p${p}_m${m}.css`), generateCssModule(p, m));
    cssCount++;
  }
  if ((p + 1) % 500 === 0) console.log(`   ${cssCount} CSS files (${p + 1}/${numStaticPages} pages)`);
}
console.log(`   Done: ${cssCount} CSS files`);

// 3. Static SSG pages
console.log('\n3. Generating static SSG pages...');
mkdirSync(ssgDir, { recursive: true });
for (let i = 0; i < numStaticPages; i++) {
  const pageDir = join(ssgDir, `page${i}`);
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, 'page.tsx'), generateStaticSSGPage(i));
  if ((i + 1) % 500 === 0) console.log(`   ${i + 1}/${numStaticPages}`);
}
console.log(`   Done: ${numStaticPages} static SSG pages`);

// 4. API routes
console.log('\n4. Generating API routes...');
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
console.log(`Strategy: v14 Static SSG + CSS Only`);
console.log(`Expected build time: ~${Math.round(expectedBuildTime)}s (~${(expectedBuildTime/60).toFixed(1)}min)`);
console.log('========================================\n');

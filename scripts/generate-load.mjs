#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing
 * 
 * v8 Strategy: SSG Pages + PostCSS CPU Burn
 * - SSG pages drive base build time (~0.124s per page + 19s overhead on Vercel)
 * - PostCSS CPU burn adds additional time for longer targets
 * - Each SSG page imports a unique CSS file that gets processed by PostCSS
 * - No prebuild delays - all time is real CPU work
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
console.log(`v8 Load Generator: PostCSS CPU Burn Strategy`);
console.log(`========================================`);
console.log(`Target: ${buildMinutes}min build, ${e2eMultiplier}x E2E multiplier`);

// =============================================================================
// v8 CALIBRATION - Based on empirical measurements
// =============================================================================
// 
// From v7 data on Standard machine:
//   360 pages → 64s total
//   840 pages → 122s total
//   2000 pages → 268s total
//
// Fitted formula: totalVercelTime = 19 + (pages × 0.124)
// Max with 2000 pages: 19 + (2000 × 0.124) = 267s (~4.5min)
//
// For targets > 4.5min, we use PostCSS CPU burn to add more time.
// Each SSG page imports a CSS file, and PostCSS runs on each CSS file.
// With N CSS files and I iterations each: additionalTime ≈ N × I × (time/iteration)
//
// =============================================================================

const BASE_OVERHEAD = 19;           // seconds (Vercel overhead + Next.js startup)
const MAX_SSG_PAGES = 2000;         // Cap to avoid OOM errors
const SECONDS_PER_PAGE = 0.124;     // From v7 empirical data
const BASE_COMPONENTS = 500;        // Shared component pool (fixed)

// Target build time in seconds
const targetSeconds = buildMinutes * 60;
const targetE2EMinutes = buildMinutes * e2eMultiplier;

// Calculate optimal page count
let numSSGPages = Math.ceil((targetSeconds - BASE_OVERHEAD) / SECONDS_PER_PAGE);
numSSGPages = Math.min(numSSGPages, MAX_SSG_PAGES);
numSSGPages = Math.max(100, numSSGPages);

// Calculate expected time from pages alone
const expectedPageTime = BASE_OVERHEAD + (numSSGPages * SECONDS_PER_PAGE);

// Calculate additional time needed from PostCSS CPU burn
const additionalTimeNeeded = Math.max(0, targetSeconds - expectedPageTime);

// Calculate PostCSS iterations
// PostCSS runs once per CSS file. Each page will have its own CSS file.
// Local testing: 10M iterations ≈ 7s for 1 CSS file on M1
// On Vercel Standard: estimate ~2x slower, so 10M iterations ≈ 14s per file
// 
// For N CSS files with I iterations each:
//   additionalTime = N × I × (timePerIteration)
//   On Standard: timePerIteration ≈ 14s / 10M = 0.0000014s
//   So: I = additionalTime / (N × 0.0000014)
//
// But PostCSS might parallelize, so let's be conservative:
// Assume effective parallelism of 4x on Standard (4 vCPU)
//   effectiveTime = additionalTime × 4
//   I = effectiveTime / (N × 0.0000014)

let postcssCpuBurnIterations = 0;

if (additionalTimeNeeded > 0) {
  // We'll generate CSS files for pages, so numCssFiles ≈ numSSGPages
  const numCssFiles = numSSGPages;
  
  // Time per iteration on Standard (estimated)
  const timePerIteration = 0.0000014; // seconds
  
  // Account for parallelism (4 vCPU on Standard)
  const parallelism = 4;
  
  // iterations = (additionalTime × parallelism) / (numFiles × timePerIteration)
  postcssCpuBurnIterations = Math.round(
    (additionalTimeNeeded * parallelism) / (numCssFiles * timePerIteration)
  );
  
  // Cap at reasonable maximum
  postcssCpuBurnIterations = Math.min(postcssCpuBurnIterations, 100000000);
}

// Minimal type files
const numTypeFiles = 30;

// Fixed iteration count for SSG computation
const computationIterations = 1000;

// Minimal API routes
const numApiRoutes = 5;

console.log(`\nv8 Calibration:`);
console.log(`  Pages: ${numSSGPages}`);
console.log(`  Expected page time: ${Math.round(expectedPageTime)}s`);
console.log(`  Additional time needed: ${Math.round(additionalTimeNeeded)}s`);
console.log(`  PostCSS CPU burn iterations: ${postcssCpuBurnIterations.toLocaleString()}`);
console.log(`  Total expected: ~${Math.round(targetSeconds)}s`);

console.log(`\nLoad composition:`);
console.log(`  - ${BASE_COMPONENTS} shared React components`);
console.log(`  - ${numTypeFiles} type files`);
console.log(`  - ${numSSGPages} SSG pages with CSS files`);
console.log(`  - ${numApiRoutes} API routes`);
console.log(`  - PostCSS burn: ${postcssCpuBurnIterations > 0 ? postcssCpuBurnIterations.toLocaleString() + ' iterations/file' : 'disabled'}`);

// Clean up previous generated files
const generatedDir = join(projectRoot, 'src', 'generated');
if (existsSync(generatedDir)) {
  rmSync(generatedDir, { recursive: true });
}
mkdirSync(generatedDir, { recursive: true });
mkdirSync(join(generatedDir, 'components'), { recursive: true });
mkdirSync(join(generatedDir, 'types'), { recursive: true });
mkdirSync(join(generatedDir, 'styles'), { recursive: true });

// Clean up previous API routes
const apiGeneratedDir = join(projectRoot, 'src', 'app', 'api', 'generated');
if (existsSync(apiGeneratedDir)) {
  rmSync(apiGeneratedDir, { recursive: true });
}

// Clean up previous SSG pages
const ssgDir = join(projectRoot, 'src', 'app', 'ssg');
if (existsSync(ssgDir)) {
  rmSync(ssgDir, { recursive: true });
}

// Clean up old bench directory
const benchDir = join(projectRoot, 'src', 'app', 'bench');
if (existsSync(benchDir)) {
  rmSync(benchDir, { recursive: true });
}

// =============================================================================
// Type Files
// =============================================================================

function generateComplexTypeFile(index) {
  const depth = 8 + (index % 4);
  return `// Complex type file ${index}
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DeepObject_${index}<T, D extends number = ${depth}> = D extends 0
  ? T
  : { value: T; nested: DeepObject_${index}<T, Prev[D]> };

export type { DeepObject_${index} };
`;
}

// =============================================================================
// Shared Components
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
// CSS Files (for PostCSS processing)
// =============================================================================

function generateCssFile(index) {
  // Generate a unique CSS file that will be processed by PostCSS
  // The content doesn't matter much, just needs to trigger PostCSS
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
  background: linear-gradient(
    ${(index * 45) % 360}deg,
    hsl(${(index * 37) % 360}, 70%, 95%),
    hsl(${((index + 180) * 37) % 360}, 70%, 95%)
  );
  border-radius: ${4 + (index % 8)}px;
}
`;
}

// =============================================================================
// SSG Pages
// =============================================================================

function generateSSGPage(pageIndex, totalComponents, iterations) {
  const componentsPerPage = Math.min(20, totalComponents);
  const startIdx = (pageIndex * 7) % totalComponents;
  
  const imports = [];
  const componentNames = [];
  for (let i = 0; i < componentsPerPage; i++) {
    const compIdx = (startIdx + i) % totalComponents;
    imports.push(`import SharedComponent${compIdx} from '@/generated/components/SharedComponent${compIdx}';`);
    componentNames.push(`SharedComponent${compIdx}`);
  }
  
  return `// SSG Page ${pageIndex}
import '@/generated/styles/page${pageIndex}.css';
${imports.join('\n')}

function computePageData(pageId: number) {
  let result = pageId;
  for (let i = 0; i < ${iterations}; i++) {
    result = Math.sin(result + i * 0.001) * Math.cos(result) + Math.sqrt(Math.abs(result) + 1);
  }
  return {
    pageId,
    checksum: result,
    generatedAt: new Date().toISOString(),
  };
}

export default async function SSGPage${pageIndex}() {
  const data = computePageData(${pageIndex});
  
  const items = Array.from({ length: ${componentsPerPage} }, (_, i) => ({
    id: \`\${${pageIndex}}-\${i}\`,
    value: ${pageIndex} * 100 + i,
    label: \`Page ${pageIndex} Item\`,
  }));
  
  return (
    <div className="page-${pageIndex} p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-${pageIndex}-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page ${pageIndex}
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="page-${pageIndex}-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[${componentNames.join(', ')}].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
        ))}
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
    components: BASE_COMPONENTS,
    typeFiles: numTypeFiles,
    ssgPages: numSSGPages,
    computationIterations: computationIterations,
    postcssCpuBurnIterations: postcssCpuBurnIterations,
    apiRoutes: numApiRoutes,
    strategy: "postcss-cpu-burn-v8",
    // Cache-busting fields - unique per generation to ensure no build cache hits
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

// 1. Generate type files
console.log('\n1. Generating type files...');
const typeExports = [];
for (let i = 0; i < numTypeFiles; i++) {
  const typePath = join(generatedDir, 'types', `complex${i}.ts`);
  writeFileSync(typePath, generateComplexTypeFile(i));
  typeExports.push(`export * from './complex${i}';`);
}
writeFileSync(join(generatedDir, 'types', 'index.ts'), typeExports.join('\n'));
console.log(`   Generated ${numTypeFiles} type files`);

// 2. Generate shared components
console.log('\n2. Generating shared components...');
const componentExports = [];
for (let i = 0; i < BASE_COMPONENTS; i++) {
  const componentPath = join(generatedDir, 'components', `SharedComponent${i}.tsx`);
  writeFileSync(componentPath, generateSharedComponent(i));
  componentExports.push(`export { default as SharedComponent${i} } from './components/SharedComponent${i}';`);
  
  if ((i + 1) % 100 === 0) {
    console.log(`   Generated ${i + 1}/${BASE_COMPONENTS} components`);
  }
}
writeFileSync(join(generatedDir, 'index.ts'), componentExports.join('\n'));
console.log(`   Generated ${BASE_COMPONENTS} shared components`);

// 3. Generate CSS files
console.log('\n3. Generating CSS files...');
for (let i = 0; i < numSSGPages; i++) {
  const cssPath = join(generatedDir, 'styles', `page${i}.css`);
  writeFileSync(cssPath, generateCssFile(i));
  
  if ((i + 1) % 200 === 0) {
    console.log(`   Generated ${i + 1}/${numSSGPages} CSS files`);
  }
}
console.log(`   Generated ${numSSGPages} CSS files`);

// 4. Generate SSG pages
console.log('\n4. Generating SSG pages...');
mkdirSync(ssgDir, { recursive: true });
for (let i = 0; i < numSSGPages; i++) {
  const pageDir = join(ssgDir, `page${i}`);
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, 'page.tsx'), generateSSGPage(i, BASE_COMPONENTS, computationIterations));
  
  if ((i + 1) % 200 === 0) {
    console.log(`   Generated ${i + 1}/${numSSGPages} SSG pages`);
  }
}
console.log(`   Generated ${numSSGPages} SSG pages`);

// 5. Generate API routes
console.log('\n5. Generating API routes...');
mkdirSync(apiGeneratedDir, { recursive: true });
for (let i = 0; i < numApiRoutes; i++) {
  const routeDir = join(apiGeneratedDir, `route${i}`);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'route.ts'), generateApiRoute(i));
}
console.log(`   Generated ${numApiRoutes} API routes`);

// 6. Update build config
updateBuildConfig();

console.log('\n========================================');
console.log('Generation complete!');
console.log('========================================');
console.log(`Strategy: PostCSS CPU Burn v8`);
console.log(`Expected build time on Standard: ~${buildMinutes} min`);
console.log(`Expected E2E time on Standard: ~${targetE2EMinutes} min`);
console.log('');

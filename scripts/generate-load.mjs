#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing
 * 
 * v27 Strategy: SSG Pages + Fixed CPU Burn Iterations
 * - SSG pages provide base build time (~0.04s per page + ~75s overhead)
 * - CPU burn uses FIXED total iterations (no machine-type fudging)
 * - More cores = faster burn completion (natural parallelism)
 * 
 * Calibration approach:
 * - Measure actual iteration rate on Standard (8 reported cores)
 * - Calculate total iterations needed for target time
 * - Let the machine's actual parallelism determine completion time
 * 
 * Usage: node scripts/generate-load.mjs <buildMinutes>
 * Example: node scripts/generate-load.mjs 4  # 4min build target on Standard
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
console.log(`v27 Load Generator: SSG + Fixed CPU Burn Iterations`);
console.log(`========================================`);
console.log(`Target: ${buildMinutes}min build on Standard`);

// =============================================================================
// v27 CALIBRATION - Based on empirical data from 2026-02-01 builds
// =============================================================================
//
// Build time components (on Standard, which reports 8 CPUs via os.cpus()):
//   1. Base overhead: ~75s (Next.js startup, compile, SSG with 2000 pages)
//   2. CPU burn rate: ~40M iterations/second total (8 cores × ~5M iter/s/core)
//
// For target time T on Standard:
//   - If T <= 75s: use fewer SSG pages (no CPU burn)
//   - If T > 75s: use 2000 SSG pages + CPU burn for remaining time
//   - CPU burn iterations = (T - 75) × 40M
//
// On Enhanced (also reports 8 CPUs): same burn rate, same time
// On Turbo (reports 8 CPUs but has 30 vCPUs): faster burn (more actual cores)
//
// =============================================================================

const BASE_BUILD_TIME = 75;           // seconds for 2000 SSG pages on Standard
const MAX_SSG_PAGES = 2000;           // Cap to avoid OOM errors
const SECONDS_PER_PAGE = 0.035;       // Empirical: ~70s for 2000 pages
const ITERATIONS_PER_SECOND = 40_000_000;  // Total rate on Standard (8 reported cores)

// Target build time in seconds
const targetSeconds = buildMinutes * 60;

// Calculate SSG pages needed
let numSSGPages;
let prebuildCpuBurnIterations = 0;

if (targetSeconds <= BASE_BUILD_TIME) {
  // Short build - use fewer pages, no CPU burn
  const pagesNeeded = Math.max(100, Math.ceil((targetSeconds - 5) / SECONDS_PER_PAGE));
  numSSGPages = Math.min(pagesNeeded, MAX_SSG_PAGES);
} else {
  // Longer build - use max pages + CPU burn
  numSSGPages = MAX_SSG_PAGES;
  const cpuBurnTime = targetSeconds - BASE_BUILD_TIME;
  prebuildCpuBurnIterations = Math.round(cpuBurnTime * ITERATIONS_PER_SECOND);
}

// Calculate expected build time
const expectedSsgTime = 5 + (numSSGPages * SECONDS_PER_PAGE);
const expectedCpuBurnTime = prebuildCpuBurnIterations / ITERATIONS_PER_SECOND;
const expectedBuildTime = expectedSsgTime + expectedCpuBurnTime;

// Fixed values
const numSharedComponents = 500;
const numApiRoutes = 5;

console.log(`\nv27 Load Composition:`);
console.log(`  Target: ${targetSeconds}s (${buildMinutes}min)`);
console.log(`  SSG pages: ${numSSGPages} (~${Math.round(expectedSsgTime)}s)`);
if (prebuildCpuBurnIterations > 0) {
  console.log(`  CPU burn: ${prebuildCpuBurnIterations.toLocaleString()} iterations (~${Math.round(expectedCpuBurnTime)}s on Standard)`);
}
console.log(`  Expected total on Standard: ~${Math.round(expectedBuildTime)}s`);

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

// Clean up old directories from previous strategies
const oldDirs = [
  join(generatedDir, 'barrel-components'),
  join(generatedDir, 'types'),
  join(generatedDir, 'mdx'),
  join(projectRoot, 'src', 'app', 'docs'),
];
for (const dir of oldDirs) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true });
  }
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

function generateSSGPage(pageIndex) {
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
    MachineType: "Standard",
    ssgPages: numSSGPages,
    sharedComponents: numSharedComponents,
    apiRoutes: numApiRoutes,
    prebuildCpuBurnIterations: prebuildCpuBurnIterations,
    strategy: "ssg-cpu-burn-v27",
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

// 1. Generate shared components
console.log('\n1. Generating shared components...');
for (let i = 0; i < numSharedComponents; i++) {
  const componentPath = join(generatedDir, 'components', `SharedComponent${i}.tsx`);
  writeFileSync(componentPath, generateSharedComponent(i));
  
  if ((i + 1) % 100 === 0) {
    console.log(`   Generated ${i + 1}/${numSharedComponents} components`);
  }
}
console.log(`   Generated ${numSharedComponents} shared components`);

// 2. Generate CSS files
console.log('\n2. Generating CSS files...');
for (let i = 0; i < numSSGPages; i++) {
  const cssPath = join(generatedDir, 'styles', `page${i}.css`);
  writeFileSync(cssPath, generateCssFile(i));
  
  if ((i + 1) % 500 === 0) {
    console.log(`   Generated ${i + 1}/${numSSGPages} CSS files`);
  }
}
console.log(`   Generated ${numSSGPages} CSS files`);

// 3. Generate SSG pages
console.log('\n3. Generating SSG pages...');
mkdirSync(ssgDir, { recursive: true });
for (let i = 0; i < numSSGPages; i++) {
  const pageDir = join(ssgDir, `page${i}`);
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, 'page.tsx'), generateSSGPage(i));
  
  if ((i + 1) % 500 === 0) {
    console.log(`   Generated ${i + 1}/${numSSGPages} SSG pages`);
  }
}
console.log(`   Generated ${numSSGPages} SSG pages`);

// 4. Generate API routes
console.log('\n4. Generating API routes...');
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
console.log(`Strategy: SSG + Fixed CPU Burn Iterations v27`);
console.log(`Expected build time on Standard: ~${buildMinutes}min (~${Math.round(expectedBuildTime)}s)`);
if (prebuildCpuBurnIterations > 0) {
  console.log(`  (includes ${prebuildCpuBurnIterations.toLocaleString()} CPU burn iterations)`);
}
console.log('');

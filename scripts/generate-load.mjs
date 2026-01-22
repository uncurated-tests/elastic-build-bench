#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing
 * 
 * v11 Strategy: SSG Pages + Controlled Prebuild Delay
 * - SSG pages drive base build time (~0.13s per page + 19s overhead)
 * - Max ~2000 pages before OOM (~260s or 4.3min of page time)
 * - For builds > 4.3min, use controlled prebuild delay for remaining time
 * - No heavy icon library imports (they hang Turbopack)
 * - No MDX (incompatible with Turbopack)
 * 
 * This is a pragmatic approach that produces PREDICTABLE build times.
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
console.log(`v26 Load Generator: SSG + Multi-threaded CPU Burn`);
console.log(`========================================`);
console.log(`Target: ${buildMinutes}min build, ${e2eMultiplier}x E2E multiplier`);

// =============================================================================
// v26 CALIBRATION - Based on empirical data from 2026-01-22 builds
// =============================================================================
//
// Build time components (on Standard 4 vCPU):
//   1. Base overhead: ~13.2s (Next.js startup, compile setup)
//   2. SSG pages: ~0.0563s per page (up to 2000 pages max due to OOM)
//   3. CPU burn: Multiplier varies with duration (longer burns run slower)
//
// Calibration data (actual measurements from 2026-01-22):
//   | Target | Config Burn | Actual Build | Actual Burn | Multiplier |
//   |--------|-------------|--------------|-------------|------------|
//   | 4min   |        131s |         223s |         97s |      0.74x |
//   | 8min   |        371s |         576s |        450s |      1.21x |
//   | 10min  |        491s |         830s |        704s |      1.43x |
//   | 15min  |        842s |        1463s |       1337s |      1.59x |
//   | 20min  |       1091s |        2110s |       1984s |      1.82x |
//
// Key insight: CPU burn multiplier INCREASES with duration, likely due to:
//   - Memory pressure / GC overhead on longer runs
//   - Thermal throttling on sustained CPU load
//   - Worker thread coordination overhead
//
// v26 approach:
//   - Use duration-dependent multiplier based on empirical data
//   - Short burns (<150s needed): 0.75x (burn completes faster than config)
//   - Medium burns (150-400s): 1.2x
//   - Long burns (400-800s): 1.5x  
//   - Very long burns (>800s): 1.8x
//
// =============================================================================

const BASE_OVERHEAD = 13.2;         // seconds (Next.js startup)
const MAX_SSG_PAGES = 2000;         // Cap to avoid OOM errors
const SECONDS_PER_PAGE = 0.0563;    // Calibrated from 2026-01-22 data
const MAX_PAGE_BUILD_TIME = MAX_SSG_PAGES * SECONDS_PER_PAGE; // ~113s

// Duration-dependent CPU burn multiplier
function getCpuBurnMultiplier(neededBurnSeconds) {
  if (neededBurnSeconds < 150) return 0.75;
  if (neededBurnSeconds < 400) return 1.2;
  if (neededBurnSeconds < 800) return 1.5;
  return 1.8;
}

// Target build time in seconds
const targetSeconds = buildMinutes * 60;
const targetE2EMinutes = buildMinutes * e2eMultiplier;

// Calculate how much time SSG pages can provide
const maxTimeFromPages = BASE_OVERHEAD + MAX_PAGE_BUILD_TIME; // ~150s or ~2.5min

// Calculate SSG pages needed first
let numSSGPages;
const pagesNeededForTarget = Math.ceil((targetSeconds - BASE_OVERHEAD) / SECONDS_PER_PAGE);

if (pagesNeededForTarget <= MAX_SSG_PAGES) {
  // SSG only - no CPU burn needed
  numSSGPages = Math.max(100, pagesNeededForTarget);
} else {
  // Need CPU burn - use max pages
  numSSGPages = MAX_SSG_PAGES;
}

// Calculate prebuild CPU burn needed (if any)
// This is REAL CPU work, not sleep delay
const ssgTime = BASE_OVERHEAD + (numSSGPages * SECONDS_PER_PAGE);
let prebuildCpuBurnSeconds = 0;
let cpuBurnMultiplier = 1.0;

if (targetSeconds > ssgTime) {
  const remainingTime = targetSeconds - ssgTime;
  cpuBurnMultiplier = getCpuBurnMultiplier(remainingTime);
  prebuildCpuBurnSeconds = Math.ceil(remainingTime / cpuBurnMultiplier);
}

// Calculate expected build time
const expectedBuildTime = ssgTime + (prebuildCpuBurnSeconds * cpuBurnMultiplier);

// Fixed values
const numSharedComponents = 500;
const numApiRoutes = 5;

console.log(`\nv26 Load Composition:`);
console.log(`  Target: ${targetSeconds}s (${buildMinutes}min)`);
console.log(`  Base overhead: ${BASE_OVERHEAD}s`);
console.log(`  SSG pages: ${numSSGPages} (~${Math.round(numSSGPages * SECONDS_PER_PAGE)}s)`);
if (prebuildCpuBurnSeconds > 0) {
  console.log(`  Prebuild CPU burn: ${prebuildCpuBurnSeconds}s config × ${cpuBurnMultiplier}x = ~${Math.round(prebuildCpuBurnSeconds * cpuBurnMultiplier)}s actual`);
}
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
    FullTimeOnStandard: `${targetE2EMinutes}min`,
    MachineType: "Standard",
    ssgPages: numSSGPages,
    sharedComponents: numSharedComponents,
    apiRoutes: numApiRoutes,
    prebuildCpuBurnSeconds: prebuildCpuBurnSeconds,
    strategy: "ssg-cpu-burn-v26",
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
console.log(`Strategy: SSG + Multi-threaded CPU Burn v26`);
console.log(`Expected build time on Standard: ~${buildMinutes} min (~${Math.round(expectedBuildTime)}s)`);
if (prebuildCpuBurnSeconds > 0) {
  console.log(`  (includes ${prebuildCpuBurnSeconds}s CPU burn config × ${cpuBurnMultiplier}x → ~${Math.round(prebuildCpuBurnSeconds * cpuBurnMultiplier)}s actual)`);
}
console.log(`Expected E2E time on Standard: ~${targetE2EMinutes} min`);
console.log('');

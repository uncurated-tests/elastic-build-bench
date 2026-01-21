#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing - v15
 * 
 * v15 Strategy: SSG Pages + Build-time Computation (NO complex TS, NO hanging)
 * 
 * Key learnings from previous versions:
 * - v12 heavy TypeScript generics: HANGS at high counts
 * - v13 dynamic routes: HANGS with many pages
 * - v14 many CSS files: HANGS with too many files
 * 
 * v15 approach:
 * - SSG pages drive base build time (~0.10s per page + 25s overhead)
 * - getStaticProps with CPU-bound work to scale build time
 * - Simple TypeScript (no complex generics)
 * - Minimal CSS files
 * 
 * Usage: node scripts/generate-load-v15.mjs <buildMinutes>
 * Example: node scripts/generate-load-v15.mjs 10
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
console.log(`v15 Load Generator: SSG + Build-time Computation`);
console.log(`========================================`);
console.log(`Target: ${buildMinutes}min build`);

// =============================================================================
// v15 CALIBRATION
// =============================================================================

const BASE_OVERHEAD = 25;           // seconds (Next.js startup)
const SECONDS_PER_PAGE = 0.10;      // Empirical from v11/v12
const MAX_SSG_PAGES = 2000;         // Cap to avoid OOM errors

// Build-time CPU work - this happens during SSG generation
// Each page can do CPU work in generateStaticParams/generateMetadata
// Testing shows ~1,000,000 iterations = ~1 second of CPU time
const ITERATIONS_PER_SECOND = 1000000;  // Calibrated estimate

// Target build time in seconds
const targetSeconds = buildMinutes * 60;

// Calculate how much time we need beyond pages
const maxPageTime = MAX_SSG_PAGES * SECONDS_PER_PAGE; // ~200s
const timeFromPages = Math.min(maxPageTime, targetSeconds - BASE_OVERHEAD);
const numSSGPages = Math.min(MAX_SSG_PAGES, Math.ceil(timeFromPages / SECONDS_PER_PAGE));
const actualPageTime = numSSGPages * SECONDS_PER_PAGE;

// Remaining time needs to come from build-time CPU work
const remainingTime = targetSeconds - BASE_OVERHEAD - actualPageTime;
const cpuIterationsPerPage = remainingTime > 0 
  ? Math.ceil((remainingTime * ITERATIONS_PER_SECOND) / numSSGPages)
  : 0;

// Fixed values
const numSharedComponents = 100;  // Minimal shared components
const numApiRoutes = 3;

const expectedBuildTime = BASE_OVERHEAD + actualPageTime + remainingTime;

console.log(`\nv15 Load Composition:`);
console.log(`  Target: ${targetSeconds}s (${buildMinutes}min)`);
console.log(`  Base overhead: ${BASE_OVERHEAD}s`);
console.log(`  SSG pages: ${numSSGPages} (~${Math.round(actualPageTime)}s)`);
console.log(`  CPU iterations per page: ${cpuIterationsPerPage}`);
console.log(`  Expected remaining time from CPU: ~${Math.round(remainingTime)}s`);
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

// =============================================================================
// Shared Components (simple, no complex generics)
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
// Simple CSS (one file per page, no explosion of files)
// =============================================================================

function generateCssModule(pageIndex) {
  const hue = (pageIndex * 37) % 360;
  let css = `/* Page ${pageIndex} Styles */\n`;
  
  // Just a few selectors per page
  for (let i = 0; i < 5; i++) {
    const h = (hue + i * 60) % 360;
    css += `
.p${pageIndex}-v${i} {
  color: hsl(${h}, 70%, 50%);
  background: linear-gradient(${i * 45}deg, hsl(${h}, 60%, 95%), hsl(${(h + 30) % 360}, 60%, 90%));
  padding: 1rem;
  border-radius: 8px;
}
`;
  }
  
  return css;
}

// =============================================================================
// SSG Pages with Build-time CPU Work
// =============================================================================

function generateSSGPage(pageIndex) {
  const imports = [];
  const componentUses = [];
  
  // Import CSS
  imports.push(`import '@/generated/styles/p${pageIndex}.css';`);
  
  // Import shared components
  const sharedCount = 3;
  const startIdx = (pageIndex * 7) % numSharedComponents;
  for (let i = 0; i < sharedCount; i++) {
    const compIdx = (startIdx + i) % numSharedComponents;
    imports.push(`import SharedComponent${compIdx} from '@/generated/components/SharedComponent${compIdx}';`);
    componentUses.push(`<SharedComponent${compIdx} id="${pageIndex}-${i}" value={${pageIndex * 100 + i}} label="S" />`);
  }
  
  return `// SSG Page ${pageIndex} - v15 (build-time CPU work)
${imports.join('\n')}

// Build-time CPU work - runs synchronously during static generation
// This adds real CPU time to the build without hanging
function buildTimeWork(iterations: number): number {
  let result = 0;
  for (let i = 0; i < iterations; i++) {
    // Mix of operations to prevent optimization
    result += Math.sin(i * 0.001) * Math.cos(i * 0.002);
    result += Math.sqrt(Math.abs(result + i)) * 0.0001;
    result = result % 1000000; // Prevent overflow
  }
  return result;
}

// generateMetadata runs at build time for SSG pages
export async function generateMetadata() {
  const workResult = buildTimeWork(${cpuIterationsPerPage});
  
  return {
    title: \`Page ${pageIndex} | Build Bench\`,
    description: \`SSG page ${pageIndex} - CPU work result: \${workResult.toFixed(2)}\`,
  };
}

export default function SSGPage${pageIndex}() {
  return (
    <div className="p${pageIndex}-v0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Page ${pageIndex}</h1>
      <p className="text-sm text-zinc-500 mb-4">v15 SSG with build-time CPU work</p>
      <div className="grid grid-cols-2 gap-1">
        ${componentUses.join('\n        ')}
      </div>
    </div>
  );
}
`;
}

// =============================================================================
// API Routes (minimal)
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
    cpuIterationsPerPage,
    apiRoutes: numApiRoutes,
    prebuildDelaySeconds: 0,
    strategy: "ssg-cpu-v15",
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
}
console.log(`   Done: ${numSharedComponents} shared components`);

// 2. CSS modules (one per page)
console.log('\n2. Generating CSS modules...');
for (let p = 0; p < numSSGPages; p++) {
  writeFileSync(join(generatedDir, 'styles', `p${p}.css`), generateCssModule(p));
  if ((p + 1) % 500 === 0) console.log(`   ${p + 1}/${numSSGPages}`);
}
console.log(`   Done: ${numSSGPages} CSS files`);

// 3. SSG pages
console.log('\n3. Generating SSG pages...');
mkdirSync(ssgDir, { recursive: true });
for (let i = 0; i < numSSGPages; i++) {
  const pageDir = join(ssgDir, `page${i}`);
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, 'page.tsx'), generateSSGPage(i));
  if ((i + 1) % 500 === 0) console.log(`   ${i + 1}/${numSSGPages}`);
}
console.log(`   Done: ${numSSGPages} SSG pages`);

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
console.log(`Strategy: v15 SSG + Build-time CPU Work`);
console.log(`Expected build time: ~${Math.round(expectedBuildTime)}s (~${(expectedBuildTime/60).toFixed(1)}min)`);
console.log('========================================\n');

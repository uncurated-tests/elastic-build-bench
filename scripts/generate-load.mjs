#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing
 * 
 * Uses two strategies to create long builds without memory overload:
 * 1. Complex TypeScript generic types that stress the compiler (CPU-bound, low memory)
 * 2. Many SSG pages that import shared components (realistic, memory-efficient)
 * 
 * Usage: node scripts/generate-load.mjs <buildMinutes> <e2eMultiplier>
 * Example: node scripts/generate-load.mjs 4 2  # 4min build, 2x E2E (8min total)
 */

import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Parse arguments
const buildMinutes = parseFloat(process.argv[2] || '1');
const e2eMultiplier = parseFloat(process.argv[3] || '2');

console.log(`Generating load for ${buildMinutes}min build, ${e2eMultiplier}x E2E multiplier`);

// =============================================================================
// NEW MEMORY-EFFICIENT APPROACH
// =============================================================================
// 
// Previous approach: Many components with complex types
//   - Problem: 12,000+ components cause OOM on Standard (8GB RAM)
//   - Each component ~3KB, type-checking memory grows non-linearly
//
// New approach combines:
//   1. COMPLEX TYPE FILES: Heavy TypeScript type inference (CPU-bound, ~0 runtime memory)
//      - Recursive types, conditional types, mapped types
//      - Each file can take 1-5 seconds to type-check
//      - Scales predictably: N files ≈ N × (time per file)
//
//   2. SSG PAGES: Many pages importing SAME components (memory-efficient)
//      - Components loaded once, reused across pages
//      - Build processes pages sequentially, not all in memory
//      - Adds realistic bundling/optimization work
//
// Calibration (to be refined):
//   - 1 complex type file ≈ 2-3 seconds of type-checking
//   - 1 SSG page ≈ 0.5-1 second of SSG rendering
//   - Base overhead ≈ 20 seconds
// =============================================================================

const targetBuildSeconds = buildMinutes * 60;
const targetE2EMinutes = buildMinutes * e2eMultiplier;

// Keep component count LOW to avoid OOM (max ~3000 for safety on Standard)
// These are shared components imported by SSG pages
const BASE_COMPONENTS = 500;  // Shared component pool

// =============================================================================
// CALIBRATION (based on empirical measurements on Standard machine)
// =============================================================================
// Base overhead: ~20 seconds
// Type file cost: ~0.15 seconds each (CPU-intensive type checking)
// SSG page cost: ~0.05 seconds each (server-side computation)
//
// Formula: buildTime = 20 + (0.15 * numTypeFiles) + (0.05 * numSSGPages)
//
// Calibrated settings for targets on Standard:
//   1min (60s):   100 types,  800 pages → 20+15+40=75s (buffer for variance)
//   2min (120s):  200 types, 1800 pages → 20+30+90=140s
//   4min (240s):  500 types, 3800 pages → 20+75+190=285s
//   8min (480s): 1000 types, 7600 pages → 20+150+380=550s
//  10min (600s): 1300 types, 9600 pages → 20+195+480=695s
//  20min (1200s): 2600 types, 19200 pages → 20+390+960=1370s
// =============================================================================

// =============================================================================
// Calibration v5: Heavy SSG computation strategy
// =============================================================================
// Problem v4: Type files don't contribute to Turbopack builds
// Finding: Only SSG page count drives build time, but >2000 pages = OOM
// Solution: Make each SSG page do MORE computation for longer builds
//
// Empirical data from Standard builds:
//   480 pages (light) = 75s   → 0.156s/page
//   960 pages (light) = 139s  → 0.145s/page
//   1920 pages (light) = 246s → 0.128s/page
//   2000 pages (light) = ~260s → 0.130s/page
//
// New strategy: Scale computation intensity per page
//   Base: 10,000 iterations = ~0.13s/page  
//   For longer builds: increase iterations proportionally
//
// Target formula: buildTime = 18 + (pages * secondsPerPage)
//   where secondsPerPage scales with computation intensity
// =============================================================================
const BASE_OVERHEAD = 18;           // seconds
const MAX_SSG_PAGES = 2000;         // Cap to avoid OOM errors
const BASE_ITERATIONS = 10000;      // Baseline iterations per page
const BASE_SECONDS_PER_PAGE = 0.13; // Time per page with base iterations

// Calculate target build time and required page time
const targetSeconds = buildMinutes * 60;
const availableSeconds = targetSeconds - BASE_OVERHEAD;

// For builds up to ~4min, use more pages with base computation
// For builds >4min, use max pages with heavier computation
let numSSGPages;
let computationIterations;

if (availableSeconds <= MAX_SSG_PAGES * BASE_SECONDS_PER_PAGE) {
  // Short builds: scale pages, use base computation
  numSSGPages = Math.floor(availableSeconds / BASE_SECONDS_PER_PAGE);
  computationIterations = BASE_ITERATIONS;
} else {
  // Long builds: use max pages, scale computation intensity
  numSSGPages = MAX_SSG_PAGES;
  const requiredSecondsPerPage = availableSeconds / MAX_SSG_PAGES;
  const scaleFactor = requiredSecondsPerPage / BASE_SECONDS_PER_PAGE;
  computationIterations = Math.floor(BASE_ITERATIONS * scaleFactor);
}

// Ensure minimum values
numSSGPages = Math.max(100, numSSGPages);
computationIterations = Math.max(BASE_ITERATIONS, computationIterations);

// Minimal type files (just for TypeScript project realism)
let numTypeFiles = 30;

// Estimate actual build time
const estimatedSecondsPerPage = BASE_SECONDS_PER_PAGE * (computationIterations / BASE_ITERATIONS);
const estimatedSeconds = BASE_OVERHEAD + (numSSGPages * estimatedSecondsPerPage);
console.log(`\nTarget: ${buildMinutes}min (${targetSeconds}s)`);
console.log(`Estimated: ${(estimatedSeconds/60).toFixed(1)}min (${Math.round(estimatedSeconds)}s)`);
console.log(`Computation intensity: ${computationIterations.toLocaleString()} iterations/page`);

if (numSSGPages === MAX_SSG_PAGES && computationIterations > BASE_ITERATIONS) {
  console.log(`Note: Using max pages (${MAX_SSG_PAGES}) with ${(computationIterations/BASE_ITERATIONS).toFixed(1)}x computation`);
}

// Minimal API routes (not for timing, just for realism)
const numApiRoutes = 5;

console.log(`\nMemory-efficient load strategy:`);
console.log(`  - ${BASE_COMPONENTS} shared React components (fixed, low memory)`);
console.log(`  - ${numTypeFiles} complex type files (CPU-intensive type checking)`);
console.log(`  - ${numSSGPages} SSG pages (memory-efficient build work)`);
console.log(`  - ${numApiRoutes} API routes`);
console.log(`  - Target Build: ${buildMinutes}min (${targetBuildSeconds}s)`);

// Clean up previous generated files
const generatedDir = join(projectRoot, 'src', 'generated');
if (existsSync(generatedDir)) {
  rmSync(generatedDir, { recursive: true });
}
mkdirSync(generatedDir, { recursive: true });
mkdirSync(join(generatedDir, 'components'), { recursive: true });
mkdirSync(join(generatedDir, 'types'), { recursive: true });

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

// Clean up old bench directory (from previous approach)
const benchDir = join(projectRoot, 'src', 'app', 'bench');
if (existsSync(benchDir)) {
  rmSync(benchDir, { recursive: true });
}

// =============================================================================
// OPTION 3: Complex Generic Types
// =============================================================================
// These files contain deeply nested type operations that force TypeScript
// to do expensive type resolution. Each file is independent (no cross-imports)
// so they don't accumulate memory.

function generateComplexTypeFile(index) {
  // Each file has unique type names to avoid conflicts but similar complexity
  const depth = 8 + (index % 4);  // Vary depth 8-11 for different complexity
  
  return `// Complex type file ${index} - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_${index}<T, D extends number = ${depth}> = D extends 0
  ? T
  : { value: T; nested: DeepObject_${index}<T, Prev[D]>; meta: { depth: D; index: ${index} } };

// Recursive array flattening
type Flatten_${index}<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_${index}<U>
    : U
  : T;

// Complex conditional type chain
type Transform_${index}<T, D extends number = ${depth}> = D extends 0
  ? T
  : T extends string
    ? Transform_${index}<\`[\${T}]\`, Prev[D]>
    : T extends number
      ? Transform_${index}<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_${index}<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_${index}<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_${index}<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_${index}<T> = 
  UnionToIntersection_${index}<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_${index}<T, L = LastOfUnion_${index}<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_${index}<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_${index}<T, D extends number = ${depth}> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_${index}<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_${index}<U, Prev[D]>[]
      : Transform_${index}<T, D>;

// String manipulation types (expensive)
type Split_${index}<S extends string, D extends string = ''> = 
  S extends \`\${infer H}\${D}\${infer T}\` 
    ? [H, ...Split_${index}<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_${index}<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? \`\${F}\${D}\${Join_${index}<R, D>}\` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_${index}<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_${index}<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_${index}<T = unknown> {
  id: string;
  data: DeepObject_${index}<T>;
  transformed: Transform_${index}<T>;
  flattened: T extends Array<unknown> ? Flatten_${index}<T> : T;
  mapped: MapDeep_${index}<T>;
  meta: {
    index: ${index};
    depth: ${depth};
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_${index}<T> = T extends object
  ? { [K in keyof T]: ForceEval_${index}<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_${index},
  Flatten_${index},
  Transform_${index},
  MapDeep_${index},
  Split_${index},
  Join_${index},
  Permutation_${index},
  ComplexData_${index},
  ForceEval_${index},
};

// Force type instantiation with concrete types
type _Test1_${index} = ForceEval_${index}<ComplexData_${index}<string>>;
type _Test2_${index} = ForceEval_${index}<ComplexData_${index}<number[]>>;
type _Test3_${index} = ForceEval_${index}<ComplexData_${index}<{ a: string; b: number; c: boolean }>>;
type _Test4_${index} = ForceEval_${index}<Transform_${index}<'hello'>>;
type _Test5_${index} = ForceEval_${index}<MapDeep_${index}<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_${index}: _Test1_${index} & _Test2_${index} & _Test3_${index} & _Test4_${index} & _Test5_${index};
`;
}

// =============================================================================
// Shared Components (Memory-Efficient Pool)
// =============================================================================
// These are simpler components that SSG pages will import.
// Kept small and simple to minimize memory usage.

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
// OPTION 5: SSG Pages
// =============================================================================
// Each page imports from the shared component pool and does server-side work.
// Memory efficient because components are already loaded.

function generateSSGPage(pageIndex, totalComponents, iterations) {
  // Each page imports a subset of components (rotating window)
  const componentsPerPage = Math.min(20, totalComponents);
  const startIdx = (pageIndex * 7) % totalComponents;  // Offset to vary imports
  
  const imports = [];
  const componentNames = [];
  for (let i = 0; i < componentsPerPage; i++) {
    const compIdx = (startIdx + i) % totalComponents;
    imports.push(`import SharedComponent${compIdx} from '@/generated/components/SharedComponent${compIdx}';`);
    componentNames.push(`SharedComponent${compIdx}`);
  }
  
  return `// SSG Page ${pageIndex} - Pre-rendered at build time
${imports.join('\n')}

// Server-side computation during SSG (${iterations.toLocaleString()} iterations)
function computePageData(pageId: number) {
  let result = pageId;
  // Expensive computation during build - scaled for target build time
  const ITERATIONS = ${iterations};
  for (let i = 0; i < ITERATIONS; i++) {
    result = Math.sin(result + i * 0.001) * Math.cos(result) + Math.sqrt(Math.abs(result) + 1);
  }
  return {
    pageId,
    checksum: result,
    generatedAt: new Date().toISOString(),
    componentCount: ${componentsPerPage},
    iterations: ITERATIONS,
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
    <div className="p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page ${pageIndex}
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt} | Checksum: {data.checksum.toFixed(4)}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
// API Routes (minimal, for realism)
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
    apiRoutes: numApiRoutes,
    strategy: "heavy-ssg-v5",
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
console.log('\n1. Generating complex type files...');
const typeExports = [];
for (let i = 0; i < numTypeFiles; i++) {
  const typePath = join(generatedDir, 'types', `complex${i}.ts`);
  writeFileSync(typePath, generateComplexTypeFile(i));
  typeExports.push(`export * from './complex${i}';`);
  
  if ((i + 1) % 20 === 0) {
    console.log(`   Generated ${i + 1}/${numTypeFiles} type files`);
  }
}
// Write types index
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
// Write components index
writeFileSync(join(generatedDir, 'index.ts'), componentExports.join('\n'));
console.log(`   Generated ${BASE_COMPONENTS} shared components`);

// 3. Generate SSG pages
console.log('\n3. Generating SSG pages...');
mkdirSync(ssgDir, { recursive: true });
for (let i = 0; i < numSSGPages; i++) {
  const pageDir = join(ssgDir, `page${i}`);
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, 'page.tsx'), generateSSGPage(i, BASE_COMPONENTS, computationIterations));
  
  if ((i + 1) % 50 === 0) {
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

// 5. Update build config
updateBuildConfig();

console.log('\n========================================');
console.log('Generation complete!');
console.log('========================================');
console.log(`Strategy: Memory-efficient (complex types + SSG pages)`);
console.log(`Expected build time on Standard: ~${buildMinutes} min`);
console.log(`Expected E2E time on Standard: ~${targetE2EMinutes} min`);
console.log('');

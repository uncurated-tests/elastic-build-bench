#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing
 * 
 * Usage: node scripts/generate-load.mjs <buildMinutes> <e2eMultiplier>
 * Example: node scripts/generate-load.mjs 1 2  # 1min build, 2x E2E (2min total)
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

// Scaling factors tuned based on actual Vercel build results
// Build time scales linearly with component count after fixed overhead
// 
// RECALIBRATED (Jan 20, 2026) on Standard machine (4 vCPU):
//   3040 components → 72s
//   7600 components → 154s
//
// Linear regression:
//   Δcomponents = 4560, Δtime = 82s → 55.6 components/second
//   Overhead = 72 - (3040/55.6) = 17s
//
// Model: time ≈ 17s (fixed) + components / 55.6 (variable)
// Solving for components: components ≈ (targetSec - 17) × 55.6

const COMPONENT_TARGETS = {
  1: 2400,    // ~1min: (60-17)×55.6 = 2391
  2: 5730,    // ~2min: (120-17)×55.6 = 5727
  4: 12400,   // ~4min: (240-17)×55.6 = 12399
  8: 25750,   // ~8min: (480-17)×55.6 = 25747
  10: 32420,  // ~10min: (600-17)×55.6 = 32417
  20: 65820,  // ~20min: (1200-17)×55.6 = 65815 (may OOM, be careful)
};

// Key insight: E2E time ≈ Build time in Next.js (components dominate)
// The e2eMultiplier is kept for naming convention but doesn't change component count
// Branch name format: build-Xmin-Yxtotal where X = BUILD time target
//
// Model from measurements: time ≈ 17s (fixed) + components / 55.6 (variable)
// Solving: components = (targetSeconds - 17) * 55.6

// Target BUILD time (not E2E time) - this is what the branch name refers to
const targetBuildSeconds = buildMinutes * 60;
const targetE2EMinutes = buildMinutes * e2eMultiplier;  // For config display only

// Calculate components needed for target BUILD time
// Using the formula: time = 17 + components/55.6
// So: components = (time - 17) * 55.6
const numComponents = Math.max(100, Math.floor((targetBuildSeconds - 17) * 55.6));

// No SSG pages needed - component count controls timing
const numSSGPages = 0;

// Minimal API routes (not for timing, just for realism)
const numApiRoutes = 5;

console.log(`Will generate:`);
console.log(`  - ${numComponents} React components`);
console.log(`  - ${numApiRoutes} API routes`);
console.log(`  - Target E2E: ${targetE2EMinutes}min (${targetE2ESeconds}s)`);

// Clean up previous generated files
const generatedDir = join(projectRoot, 'src', 'generated');
if (existsSync(generatedDir)) {
  rmSync(generatedDir, { recursive: true });
}
mkdirSync(generatedDir, { recursive: true });
mkdirSync(join(generatedDir, 'components'), { recursive: true });

// Clean up previous API routes
const apiGeneratedDir = join(projectRoot, 'src', 'app', 'api', 'generated');
if (existsSync(apiGeneratedDir)) {
  rmSync(apiGeneratedDir, { recursive: true });
}

// Clean up previous static pages
const pagesGeneratedDir = join(projectRoot, 'src', 'app', 'bench');
if (existsSync(pagesGeneratedDir)) {
  rmSync(pagesGeneratedDir, { recursive: true });
}

// Generate complex TypeScript types (adds to type-checking time)
function generateComplexTypes() {
  return `
// Complex recursive types to stress TypeScript compiler
type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
type DeepRequired<T> = T extends object ? { [P in keyof T]-?: DeepRequired<T[P]> } : T;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? R : never;

type Push<T extends any[], V> = [...T, V];

type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;

interface NestedConfig<T = unknown> {
  value: T;
  children?: NestedConfig<T>[];
  metadata?: Record<string, DeepPartial<T>>;
  transform?: <U>(input: T) => Promise<U>;
}

type RecursiveRecord<K extends string, V, D extends number = 5> = 
  D extends 0 ? V : { [P in K]: RecursiveRecord<K, V, [-1, 0, 1, 2, 3, 4][D]> };

export type { DeepPartial, DeepRequired, NestedConfig, RecursiveRecord };
`;
}

// Generate a component with heavy computation and complex types
function generateComponent(index) {
  return `'use client';
import React, { useState, useEffect, useMemo, useCallback, useRef, memo } from 'react';

// Complex nested types for this component
interface DataLevel3_${index} {
  value: string;
  computed: number;
  metadata: Record<string, unknown>;
}

interface DataLevel2_${index} {
  level3: DataLevel3_${index};
  items: Array<{ id: number; name: string }>;
}

interface DataLevel1_${index} {
  level2: DataLevel2_${index};
  config: { enabled: boolean; threshold: number };
}

interface Props${index} {
  data: {
    id: string;
    name: string;
    values: number[];
    nested: {
      level1: DataLevel1_${index};
    };
  };
  onUpdate?: (data: Props${index}['data']) => void;
  config?: Partial<{
    enabled: boolean;
    threshold: number;
    options: Array<{ key: string; value: unknown }>;
    callbacks: {
      onStart?: () => void;
      onComplete?: (result: unknown) => void;
      onError?: (error: Error) => void;
    };
  }>;
}

type State${index} = {
  loading: boolean;
  error: Error | null;
  result: Props${index}['data'] | null;
  history: Props${index}['data'][];
  computed: number;
};

type Action${index} = 
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: Props${index}['data'] }
  | { type: 'ERROR'; error: Error }
  | { type: 'COMPUTE'; value: number }
  | { type: 'RESET' };

function reducer${index}(state: State${index}, action: Action${index}): State${index} {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: null };
    case 'SUCCESS':
      return { 
        ...state, 
        loading: false, 
        result: action.payload,
        history: [...state.history, action.payload].slice(-10)
      };
    case 'ERROR':
      return { ...state, loading: false, error: action.error };
    case 'COMPUTE':
      return { ...state, computed: action.value };
    case 'RESET':
      return { loading: false, error: null, result: null, history: [], computed: 0 };
    default:
      return state;
  }
}

function useComputation${index}(input: number[]): number {
  return useMemo(() => {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < 10; j++) {
        result += Math.sin(input[i] + j) * Math.cos(input[i] - j) * Math.tan((input[i] + j) * 0.1 + 0.01);
      }
    }
    return result;
  }, [input]);
}

function useDeepMemo${index}<T>(value: T, deps: React.DependencyList): T {
  const ref = useRef<T>(value);
  const depsRef = useRef<React.DependencyList>(deps);
  
  if (JSON.stringify(deps) !== JSON.stringify(depsRef.current)) {
    ref.current = value;
    depsRef.current = deps;
  }
  
  return ref.current;
}

const Component${index} = memo(function Component${index}({ data, onUpdate, config }: Props${index}) {
  const [state, setState] = useState<State${index}>({
    loading: false,
    error: null,
    result: null,
    history: [],
    computed: 0,
  });
  
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const computation = useComputation${index}(data.values);
  
  const memoizedData = useDeepMemo${index}(data, [data.id, data.name, ...data.values]);
  
  const handleClick = useCallback(() => {
    if (onUpdate && config?.enabled) {
      config?.callbacks?.onStart?.();
      onUpdate({
        ...data,
        values: data.values.map(v => v * (config.threshold || 1)),
      });
      config?.callbacks?.onComplete?.(data);
    }
  }, [data, onUpdate, config]);

  const processData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      await new Promise(resolve => setTimeout(resolve, 10));
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        result: memoizedData,
        history: [...prev.history, memoizedData].slice(-5),
        computed: computation
      }));
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error: error as Error }));
      config?.callbacks?.onError?.(error as Error);
    }
  }, [memoizedData, computation, config?.callbacks]);

  useEffect(() => {
    processData();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [processData]);

  if (state.loading) {
    return <div ref={ref} className="animate-pulse p-4">Loading ${index}...</div>;
  }

  if (state.error) {
    return <div ref={ref} className="text-red-500 p-4">Error: {state.error.message}</div>;
  }

  return (
    <div 
      ref={ref} 
      onClick={handleClick} 
      className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:shadow-md transition-shadow"
    >
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Component ${index}</h3>
      <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
        <p>Computation: {computation.toFixed(4)}</p>
        <p>ID: {data.id}</p>
        <p>Nested: {data.nested.level1.level2.level3.value}</p>
        <p>History: {state.history.length} items</p>
        <p>State computed: {state.computed.toFixed(2)}</p>
      </div>
      {config?.options && (
        <div className="mt-2 flex flex-wrap gap-1">
          {config.options.map((opt, i) => (
            <span key={i} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-xs">
              {opt.key}
            </span>
          ))}
        </div>
      )}
    </div>
  );
});

Component${index}.displayName = 'Component${index}';

export default Component${index};
export type { Props${index}, State${index}, Action${index} };
`;
}

// Generate API route
function generateApiRoute(index) {
  return `import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface RequestBody {
  data: string;
  timestamp: number;
  options?: Record<string, unknown>;
}

interface ResponseData {
  id: number;
  processed: boolean;
  result: string;
  computation: number;
  meta: {
    processingTime: number;
    index: number;
    memoryUsage: number;
  };
}

function heavyComputation(iterations: number): number {
  let result = 0;
  for (let i = 0; i < iterations; i++) {
    result += Math.sin(i * 0.001) * Math.cos(i * 0.001) * Math.tan(i * 0.0001 + 0.01);
  }
  return result;
}

export async function GET(): Promise<NextResponse<ResponseData>> {
  const startTime = Date.now();
  
  const computation = heavyComputation(1000);
  
  return NextResponse.json({
    id: ${index},
    processed: true,
    result: \`API Route ${index} processed successfully\`,
    computation,
    meta: {
      processingTime: Date.now() - startTime,
      index: ${index},
      memoryUsage: process.memoryUsage().heapUsed,
    },
  });
}

export async function POST(request: Request): Promise<NextResponse<ResponseData>> {
  const startTime = Date.now();
  
  let body: RequestBody;
  try {
    body = await request.json();
  } catch {
    body = { data: '', timestamp: Date.now() };
  }
  
  const computation = heavyComputation(500);
  
  return NextResponse.json({
    id: ${index},
    processed: true,
    result: \`Processed: \${body.data} at \${body.timestamp}\`,
    computation,
    meta: {
      processingTime: Date.now() - startTime,
      index: ${index},
      memoryUsage: process.memoryUsage().heapUsed,
    },
  });
}
`;
}

// Generate SSG dynamic route with generateStaticParams
// This creates a single [slug]/page.tsx that pre-renders many pages at build time
function generateSSGRoute(totalPages) {
  return `// SSG route - pre-renders ${totalPages} pages at build time
// Each page does heavy server-side computation to extend E2E time

// Generate static params for all pages
export function generateStaticParams() {
  const params = [];
  for (let i = 0; i < ${totalPages}; i++) {
    params.push({ slug: \`page-\${i}\` });
  }
  return params;
}

// Heavy computation function that runs during SSG
function heavyComputation(seed: number, iterations: number = 50000): number {
  let result = seed;
  for (let i = 0; i < iterations; i++) {
    result = Math.sin(result + i * 0.001) * Math.cos(result - i * 0.001) + Math.sqrt(Math.abs(result));
    result = (result * 1000000) % 1000;
  }
  return result;
}

// Simulate data fetching with computation
async function getPageData(slug: string) {
  const pageNum = parseInt(slug.replace('page-', ''), 10) || 0;
  
  // Heavy computation during SSG - this is what adds time
  const computations = [];
  for (let i = 0; i < 10; i++) {
    computations.push(heavyComputation(pageNum * 1000 + i));
  }
  
  return {
    slug,
    pageNum,
    computations,
    generatedAt: new Date().toISOString(),
    checksum: computations.reduce((a, b) => a + b, 0),
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SSGPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getPageData(slug);
  
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page {data.pageNum}
      </h1>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>Generated at: {data.generatedAt}</p>
        <p>Checksum: {data.checksum.toFixed(4)}</p>
        <div className="grid grid-cols-5 gap-2">
          {data.computations.map((val, i) => (
            <div key={i} className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded text-xs">
              {val.toFixed(2)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`;
}

// Update build-config.json
function updateBuildConfig() {
  const config = {
    BuildTimeOnStandard: `${buildMinutes}min`,
    FullTimeOnStandard: `${targetE2EMinutes}min`,
    MachineType: "Standard",
    components: numComponents,
    apiRoutes: numApiRoutes
  };
  writeFileSync(
    join(projectRoot, 'build-config.json'),
    JSON.stringify(config, null, 2) + '\n'
  );
  console.log(`Updated build-config.json:`, config);
}

// Write types file
writeFileSync(
  join(generatedDir, 'types.ts'),
  generateComplexTypes()
);

// Generate components
console.log('Generating components...');
const componentExports = [];
for (let i = 0; i < numComponents; i++) {
  const componentPath = join(generatedDir, 'components', `Component${i}.tsx`);
  writeFileSync(componentPath, generateComponent(i));
  componentExports.push(`export { default as Component${i} } from './components/Component${i}';`);
  
  if ((i + 1) % 100 === 0) {
    console.log(`  Generated ${i + 1}/${numComponents} components`);
  }
}

// Write index file for components
writeFileSync(
  join(generatedDir, 'index.ts'),
  componentExports.join('\n')
);

// Generate API routes
if (numApiRoutes > 0) {
  console.log('Generating API routes...');
  mkdirSync(apiGeneratedDir, { recursive: true });
  
  for (let i = 0; i < numApiRoutes; i++) {
    const routeDir = join(apiGeneratedDir, `route${i}`);
    mkdirSync(routeDir, { recursive: true });
    writeFileSync(join(routeDir, 'route.ts'), generateApiRoute(i));
    
    if ((i + 1) % 20 === 0) {
      console.log(`  Generated ${i + 1}/${numApiRoutes} API routes`);
    }
  }
}

// SSG pages removed - component count now controls E2E time directly

// Update build config
updateBuildConfig();

console.log('\nGeneration complete!');
console.log(`Total files generated:`);
console.log(`  - ${numComponents} components`);
console.log(`  - ${numApiRoutes} API routes`);
console.log(`Expected E2E on Standard: ~${targetE2EMinutes}min`);

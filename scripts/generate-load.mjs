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
// Build time scales NON-LINEARLY with component count (gets slower with more components)
// 
// Actual measurements (Jan 20, 2026) on Standard machine (4 vCPU):
//   1680 components → 62s   (27 comp/s)
//   3480 components → 108s  (32 comp/s)  
//   5500 components → 162s  (34 comp/s)
//   7200 components → 218s  (33 comp/s) ✓ CONFIRMED
//   8400 components → 486s  (17 comp/s) - memory pressure
//
// Build rate is ~33 comp/s up to ~8000 components, then slows due to memory.
// For >8min targets, use blended rate accounting for overhead.

const COMPONENT_TARGETS = {
  1: 2000,    // ~1min (60s × 33 comp/s, rounded up from 1980)
  2: 4000,    // ~2min (120s × 33 comp/s, rounded up from 3960)
  4: 7900,    // ~4min (7200→218s was 91%, need ~7920)
  8: 10500,   // ~8min (blended rate ~22 comp/s for memory overhead)
  10: 12000,  // ~10min (blended rate ~20 comp/s)
  20: 20000,  // ~20min (17 comp/s rate, may OOM)
};

const API_ROUTES_PER_MULTIPLIER = 100;  // Serverless functions per E2E multiplier
const STATIC_PAGES_PER_MULTIPLIER = 80;  // Static pages to pre-render

// Use predefined targets if available, otherwise estimate linearly
const numComponents = COMPONENT_TARGETS[buildMinutes] || Math.floor(buildMinutes * 1700);
const numApiRoutes = Math.floor((e2eMultiplier - 1) * API_ROUTES_PER_MULTIPLIER);
// Cap static pages to ensure each page has at least some components
const rawStaticPages = Math.floor((e2eMultiplier - 1) * STATIC_PAGES_PER_MULTIPLIER);
const numStaticPages = Math.min(rawStaticPages, numComponents); // Ensure at least 1 component per page

console.log(`Will generate:`);
console.log(`  - ${numComponents} React components`);
console.log(`  - ${numApiRoutes} API routes`);
console.log(`  - ${numStaticPages} static pages`);

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

// Generate static page that imports generated components
function generateStaticPage(index, componentCount) {
  // Each page imports a batch of components
  const batchSize = Math.ceil(componentCount / Math.max(1, numStaticPages));
  const startComponent = index * batchSize;
  const endComponent = Math.min(startComponent + batchSize, componentCount);
  
  const imports = [];
  const components = [];
  
  for (let i = startComponent; i < endComponent; i++) {
    imports.push(`import Component${i} from '@/generated/components/Component${i}';`);
    components.push(`Component${i}`);
  }
  
  // If no components for this page (edge case), import at least one component
  // to avoid TypeScript errors with empty arrays
  if (components.length === 0) {
    const fallbackComponent = index % componentCount;
    imports.push(`import Component${fallbackComponent} from '@/generated/components/Component${fallbackComponent}';`);
    components.push(`Component${fallbackComponent}`);
  }
  
  return `${imports.join('\n')}

const sampleData = {
  id: 'page-${index}',
  name: 'Benchmark Page ${index}',
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  nested: {
    level1: {
      level2: {
        level3: {
          value: 'deep-value-${index}',
          computed: ${index * 1.5},
          metadata: { page: ${index} },
        },
        items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }],
      },
      config: { enabled: true, threshold: ${1 + index * 0.1} },
    },
  },
};

export default function BenchPage${index}() {
  return (
    <div className="p-8 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Benchmark Page ${index}
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        This page imports ${endComponent - startComponent} components for build testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[${components.join(', ')}].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
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
    FullTimeOnStandard: `${buildMinutes * e2eMultiplier}min`,
    MachineType: "Standard",
    components: numComponents,
    apiRoutes: numApiRoutes,
    staticPages: numStaticPages
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

// Generate static pages that import components
if (numStaticPages > 0) {
  console.log('Generating static pages (with component imports)...');
  mkdirSync(pagesGeneratedDir, { recursive: true });
  
  for (let i = 0; i < numStaticPages; i++) {
    const pageDir = join(pagesGeneratedDir, `page${i}`);
    mkdirSync(pageDir, { recursive: true });
    writeFileSync(join(pageDir, 'page.tsx'), generateStaticPage(i, numComponents));
    
    if ((i + 1) % 10 === 0) {
      console.log(`  Generated ${i + 1}/${numStaticPages} static pages`);
    }
  }
}

// Update build config
updateBuildConfig();

console.log('\nGeneration complete!');
console.log(`Total files generated:`);
console.log(`  - ${numComponents} components (imported by pages)`);
console.log(`  - ${numApiRoutes} API routes`);
console.log(`  - ${numStaticPages} static pages`);

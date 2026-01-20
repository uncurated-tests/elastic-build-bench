'use client';
import React, { useState, useEffect, useMemo, useCallback, useRef, memo } from 'react';

// Complex nested types for this component
interface DataLevel3_4939 {
  value: string;
  computed: number;
  metadata: Record<string, unknown>;
}

interface DataLevel2_4939 {
  level3: DataLevel3_4939;
  items: Array<{ id: number; name: string }>;
}

interface DataLevel1_4939 {
  level2: DataLevel2_4939;
  config: { enabled: boolean; threshold: number };
}

interface Props4939 {
  data: {
    id: string;
    name: string;
    values: number[];
    nested: {
      level1: DataLevel1_4939;
    };
  };
  onUpdate?: (data: Props4939['data']) => void;
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

type State4939 = {
  loading: boolean;
  error: Error | null;
  result: Props4939['data'] | null;
  history: Props4939['data'][];
  computed: number;
};

type Action4939 = 
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: Props4939['data'] }
  | { type: 'ERROR'; error: Error }
  | { type: 'COMPUTE'; value: number }
  | { type: 'RESET' };

function reducer4939(state: State4939, action: Action4939): State4939 {
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

function useComputation4939(input: number[]): number {
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

function useDeepMemo4939<T>(value: T, deps: React.DependencyList): T {
  const ref = useRef<T>(value);
  const depsRef = useRef<React.DependencyList>(deps);
  
  if (JSON.stringify(deps) !== JSON.stringify(depsRef.current)) {
    ref.current = value;
    depsRef.current = deps;
  }
  
  return ref.current;
}

const Component4939 = memo(function Component4939({ data, onUpdate, config }: Props4939) {
  const [state, setState] = useState<State4939>({
    loading: false,
    error: null,
    result: null,
    history: [],
    computed: 0,
  });
  
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const computation = useComputation4939(data.values);
  
  const memoizedData = useDeepMemo4939(data, [data.id, data.name, ...data.values]);
  
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
    return <div ref={ref} className="animate-pulse p-4">Loading 4939...</div>;
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
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Component 4939</h3>
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

Component4939.displayName = 'Component4939';

export default Component4939;
export type { Props4939, State4939, Action4939 };

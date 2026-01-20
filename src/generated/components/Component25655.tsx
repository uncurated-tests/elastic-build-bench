'use client';
import React, { useState, useEffect, useMemo, useCallback, useRef, memo } from 'react';

// Complex nested types for this component
interface DataLevel3_25655 {
  value: string;
  computed: number;
  metadata: Record<string, unknown>;
}

interface DataLevel2_25655 {
  level3: DataLevel3_25655;
  items: Array<{ id: number; name: string }>;
}

interface DataLevel1_25655 {
  level2: DataLevel2_25655;
  config: { enabled: boolean; threshold: number };
}

interface Props25655 {
  data: {
    id: string;
    name: string;
    values: number[];
    nested: {
      level1: DataLevel1_25655;
    };
  };
  onUpdate?: (data: Props25655['data']) => void;
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

type State25655 = {
  loading: boolean;
  error: Error | null;
  result: Props25655['data'] | null;
  history: Props25655['data'][];
  computed: number;
};

type Action25655 = 
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: Props25655['data'] }
  | { type: 'ERROR'; error: Error }
  | { type: 'COMPUTE'; value: number }
  | { type: 'RESET' };

function reducer25655(state: State25655, action: Action25655): State25655 {
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

function useComputation25655(input: number[]): number {
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

function useDeepMemo25655<T>(value: T, deps: React.DependencyList): T {
  const ref = useRef<T>(value);
  const depsRef = useRef<React.DependencyList>(deps);
  
  if (JSON.stringify(deps) !== JSON.stringify(depsRef.current)) {
    ref.current = value;
    depsRef.current = deps;
  }
  
  return ref.current;
}

const Component25655 = memo(function Component25655({ data, onUpdate, config }: Props25655) {
  const [state, setState] = useState<State25655>({
    loading: false,
    error: null,
    result: null,
    history: [],
    computed: 0,
  });
  
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const computation = useComputation25655(data.values);
  
  const memoizedData = useDeepMemo25655(data, [data.id, data.name, ...data.values]);
  
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
    return <div ref={ref} className="animate-pulse p-4">Loading 25655...</div>;
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
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Component 25655</h3>
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

Component25655.displayName = 'Component25655';

export default Component25655;
export type { Props25655, State25655, Action25655 };

'use client';
import React, { useState, useEffect, useMemo, useCallback, useRef, memo } from 'react';

interface Props359 {
  data: { id: string; name: string; values: number[]; nested: { level1: { level2: { level3: { value: string } } } } };
  onUpdate?: (data: Props359['data']) => void;
}

function useComputation359(input: number[]): number {
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

const Component359 = memo(function Component359({ data, onUpdate }: Props359) {
  const [state, setState] = useState({ loading: false, computed: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const computation = useComputation359(data.values);
  
  const handleClick = useCallback(() => {
    if (onUpdate) onUpdate({ ...data, values: data.values.map(v => v * 2) });
  }, [data, onUpdate]);

  useEffect(() => {
    setState(prev => ({ ...prev, computed: computation }));
  }, [computation]);

  return (
    <div ref={ref} onClick={handleClick} className="p-4 border rounded-lg hover:shadow-md">
      <h3 className="font-semibold">Component 359</h3>
      <div className="mt-2 text-sm space-y-1">
        <p>Computation: {computation.toFixed(4)}</p>
        <p>ID: {data.id}</p>
        <p>Nested: {data.nested.level1.level2.level3.value}</p>
      </div>
    </div>
  );
});

Component359.displayName = 'Component359';
export default Component359;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10751<T> = T extends (infer U)[]
  ? DeepReadonlyArray10751<U>
  : T extends object
  ? DeepReadonlyObject10751<T>
  : T;

interface DeepReadonlyArray10751<T> extends ReadonlyArray<DeepReadonly10751<T>> {}

type DeepReadonlyObject10751<T> = {
  readonly [P in keyof T]: DeepReadonly10751<T[P]>;
};

type UnionToIntersection10751<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10751<T> = UnionToIntersection10751<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10751<T extends unknown[], V> = [...T, V];

type TuplifyUnion10751<T, L = LastOf10751<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10751<TuplifyUnion10751<Exclude<T, L>>, L>;

type DeepPartial10751<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10751<T[P]> }
  : T;

type Paths10751<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10751<K, Paths10751<T[K], Prev10751[D]>> : never }[keyof T]
  : never;

type Prev10751 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10751<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10751 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths10751 = Paths10751<NestedConfig10751>;

interface HeavyProps10751 {
  config: DeepPartial10751<NestedConfig10751>;
  path?: ConfigPaths10751;
}

const HeavyComponent10751 = memo(function HeavyComponent10751({ config }: HeavyProps10751) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10751) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10751 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10751: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10751.displayName = 'HeavyComponent10751';
export default HeavyComponent10751;

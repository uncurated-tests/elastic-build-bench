'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10065<T> = T extends (infer U)[]
  ? DeepReadonlyArray10065<U>
  : T extends object
  ? DeepReadonlyObject10065<T>
  : T;

interface DeepReadonlyArray10065<T> extends ReadonlyArray<DeepReadonly10065<T>> {}

type DeepReadonlyObject10065<T> = {
  readonly [P in keyof T]: DeepReadonly10065<T[P]>;
};

type UnionToIntersection10065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10065<T> = UnionToIntersection10065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10065<T extends unknown[], V> = [...T, V];

type TuplifyUnion10065<T, L = LastOf10065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10065<TuplifyUnion10065<Exclude<T, L>>, L>;

type DeepPartial10065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10065<T[P]> }
  : T;

type Paths10065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10065<K, Paths10065<T[K], Prev10065[D]>> : never }[keyof T]
  : never;

type Prev10065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10065 {
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

type ConfigPaths10065 = Paths10065<NestedConfig10065>;

interface HeavyProps10065 {
  config: DeepPartial10065<NestedConfig10065>;
  path?: ConfigPaths10065;
}

const HeavyComponent10065 = memo(function HeavyComponent10065({ config }: HeavyProps10065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10065.displayName = 'HeavyComponent10065';
export default HeavyComponent10065;

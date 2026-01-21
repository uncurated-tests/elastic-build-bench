'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10789<T> = T extends (infer U)[]
  ? DeepReadonlyArray10789<U>
  : T extends object
  ? DeepReadonlyObject10789<T>
  : T;

interface DeepReadonlyArray10789<T> extends ReadonlyArray<DeepReadonly10789<T>> {}

type DeepReadonlyObject10789<T> = {
  readonly [P in keyof T]: DeepReadonly10789<T[P]>;
};

type UnionToIntersection10789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10789<T> = UnionToIntersection10789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10789<T extends unknown[], V> = [...T, V];

type TuplifyUnion10789<T, L = LastOf10789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10789<TuplifyUnion10789<Exclude<T, L>>, L>;

type DeepPartial10789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10789<T[P]> }
  : T;

type Paths10789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10789<K, Paths10789<T[K], Prev10789[D]>> : never }[keyof T]
  : never;

type Prev10789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10789 {
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

type ConfigPaths10789 = Paths10789<NestedConfig10789>;

interface HeavyProps10789 {
  config: DeepPartial10789<NestedConfig10789>;
  path?: ConfigPaths10789;
}

const HeavyComponent10789 = memo(function HeavyComponent10789({ config }: HeavyProps10789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10789.displayName = 'HeavyComponent10789';
export default HeavyComponent10789;

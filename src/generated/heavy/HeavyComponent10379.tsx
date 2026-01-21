'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10379<T> = T extends (infer U)[]
  ? DeepReadonlyArray10379<U>
  : T extends object
  ? DeepReadonlyObject10379<T>
  : T;

interface DeepReadonlyArray10379<T> extends ReadonlyArray<DeepReadonly10379<T>> {}

type DeepReadonlyObject10379<T> = {
  readonly [P in keyof T]: DeepReadonly10379<T[P]>;
};

type UnionToIntersection10379<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10379<T> = UnionToIntersection10379<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10379<T extends unknown[], V> = [...T, V];

type TuplifyUnion10379<T, L = LastOf10379<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10379<TuplifyUnion10379<Exclude<T, L>>, L>;

type DeepPartial10379<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10379<T[P]> }
  : T;

type Paths10379<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10379<K, Paths10379<T[K], Prev10379[D]>> : never }[keyof T]
  : never;

type Prev10379 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10379<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10379 {
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

type ConfigPaths10379 = Paths10379<NestedConfig10379>;

interface HeavyProps10379 {
  config: DeepPartial10379<NestedConfig10379>;
  path?: ConfigPaths10379;
}

const HeavyComponent10379 = memo(function HeavyComponent10379({ config }: HeavyProps10379) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10379) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10379 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10379: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10379.displayName = 'HeavyComponent10379';
export default HeavyComponent10379;

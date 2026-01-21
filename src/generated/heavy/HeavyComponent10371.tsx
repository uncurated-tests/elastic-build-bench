'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10371<T> = T extends (infer U)[]
  ? DeepReadonlyArray10371<U>
  : T extends object
  ? DeepReadonlyObject10371<T>
  : T;

interface DeepReadonlyArray10371<T> extends ReadonlyArray<DeepReadonly10371<T>> {}

type DeepReadonlyObject10371<T> = {
  readonly [P in keyof T]: DeepReadonly10371<T[P]>;
};

type UnionToIntersection10371<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10371<T> = UnionToIntersection10371<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10371<T extends unknown[], V> = [...T, V];

type TuplifyUnion10371<T, L = LastOf10371<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10371<TuplifyUnion10371<Exclude<T, L>>, L>;

type DeepPartial10371<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10371<T[P]> }
  : T;

type Paths10371<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10371<K, Paths10371<T[K], Prev10371[D]>> : never }[keyof T]
  : never;

type Prev10371 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10371<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10371 {
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

type ConfigPaths10371 = Paths10371<NestedConfig10371>;

interface HeavyProps10371 {
  config: DeepPartial10371<NestedConfig10371>;
  path?: ConfigPaths10371;
}

const HeavyComponent10371 = memo(function HeavyComponent10371({ config }: HeavyProps10371) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10371) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10371 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10371: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10371.displayName = 'HeavyComponent10371';
export default HeavyComponent10371;

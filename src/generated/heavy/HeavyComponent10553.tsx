'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10553<T> = T extends (infer U)[]
  ? DeepReadonlyArray10553<U>
  : T extends object
  ? DeepReadonlyObject10553<T>
  : T;

interface DeepReadonlyArray10553<T> extends ReadonlyArray<DeepReadonly10553<T>> {}

type DeepReadonlyObject10553<T> = {
  readonly [P in keyof T]: DeepReadonly10553<T[P]>;
};

type UnionToIntersection10553<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10553<T> = UnionToIntersection10553<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10553<T extends unknown[], V> = [...T, V];

type TuplifyUnion10553<T, L = LastOf10553<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10553<TuplifyUnion10553<Exclude<T, L>>, L>;

type DeepPartial10553<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10553<T[P]> }
  : T;

type Paths10553<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10553<K, Paths10553<T[K], Prev10553[D]>> : never }[keyof T]
  : never;

type Prev10553 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10553<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10553 {
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

type ConfigPaths10553 = Paths10553<NestedConfig10553>;

interface HeavyProps10553 {
  config: DeepPartial10553<NestedConfig10553>;
  path?: ConfigPaths10553;
}

const HeavyComponent10553 = memo(function HeavyComponent10553({ config }: HeavyProps10553) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10553) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10553 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10553: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10553.displayName = 'HeavyComponent10553';
export default HeavyComponent10553;

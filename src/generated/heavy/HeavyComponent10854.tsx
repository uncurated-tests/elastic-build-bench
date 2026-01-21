'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10854<T> = T extends (infer U)[]
  ? DeepReadonlyArray10854<U>
  : T extends object
  ? DeepReadonlyObject10854<T>
  : T;

interface DeepReadonlyArray10854<T> extends ReadonlyArray<DeepReadonly10854<T>> {}

type DeepReadonlyObject10854<T> = {
  readonly [P in keyof T]: DeepReadonly10854<T[P]>;
};

type UnionToIntersection10854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10854<T> = UnionToIntersection10854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10854<T extends unknown[], V> = [...T, V];

type TuplifyUnion10854<T, L = LastOf10854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10854<TuplifyUnion10854<Exclude<T, L>>, L>;

type DeepPartial10854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10854<T[P]> }
  : T;

type Paths10854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10854<K, Paths10854<T[K], Prev10854[D]>> : never }[keyof T]
  : never;

type Prev10854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10854 {
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

type ConfigPaths10854 = Paths10854<NestedConfig10854>;

interface HeavyProps10854 {
  config: DeepPartial10854<NestedConfig10854>;
  path?: ConfigPaths10854;
}

const HeavyComponent10854 = memo(function HeavyComponent10854({ config }: HeavyProps10854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10854.displayName = 'HeavyComponent10854';
export default HeavyComponent10854;

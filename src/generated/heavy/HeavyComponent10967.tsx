'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10967<T> = T extends (infer U)[]
  ? DeepReadonlyArray10967<U>
  : T extends object
  ? DeepReadonlyObject10967<T>
  : T;

interface DeepReadonlyArray10967<T> extends ReadonlyArray<DeepReadonly10967<T>> {}

type DeepReadonlyObject10967<T> = {
  readonly [P in keyof T]: DeepReadonly10967<T[P]>;
};

type UnionToIntersection10967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10967<T> = UnionToIntersection10967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10967<T extends unknown[], V> = [...T, V];

type TuplifyUnion10967<T, L = LastOf10967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10967<TuplifyUnion10967<Exclude<T, L>>, L>;

type DeepPartial10967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10967<T[P]> }
  : T;

type Paths10967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10967<K, Paths10967<T[K], Prev10967[D]>> : never }[keyof T]
  : never;

type Prev10967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10967 {
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

type ConfigPaths10967 = Paths10967<NestedConfig10967>;

interface HeavyProps10967 {
  config: DeepPartial10967<NestedConfig10967>;
  path?: ConfigPaths10967;
}

const HeavyComponent10967 = memo(function HeavyComponent10967({ config }: HeavyProps10967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10967.displayName = 'HeavyComponent10967';
export default HeavyComponent10967;

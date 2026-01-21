'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10352<T> = T extends (infer U)[]
  ? DeepReadonlyArray10352<U>
  : T extends object
  ? DeepReadonlyObject10352<T>
  : T;

interface DeepReadonlyArray10352<T> extends ReadonlyArray<DeepReadonly10352<T>> {}

type DeepReadonlyObject10352<T> = {
  readonly [P in keyof T]: DeepReadonly10352<T[P]>;
};

type UnionToIntersection10352<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10352<T> = UnionToIntersection10352<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10352<T extends unknown[], V> = [...T, V];

type TuplifyUnion10352<T, L = LastOf10352<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10352<TuplifyUnion10352<Exclude<T, L>>, L>;

type DeepPartial10352<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10352<T[P]> }
  : T;

type Paths10352<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10352<K, Paths10352<T[K], Prev10352[D]>> : never }[keyof T]
  : never;

type Prev10352 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10352<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10352 {
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

type ConfigPaths10352 = Paths10352<NestedConfig10352>;

interface HeavyProps10352 {
  config: DeepPartial10352<NestedConfig10352>;
  path?: ConfigPaths10352;
}

const HeavyComponent10352 = memo(function HeavyComponent10352({ config }: HeavyProps10352) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10352) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10352 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10352: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10352.displayName = 'HeavyComponent10352';
export default HeavyComponent10352;

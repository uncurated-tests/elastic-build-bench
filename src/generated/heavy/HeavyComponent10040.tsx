'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10040<T> = T extends (infer U)[]
  ? DeepReadonlyArray10040<U>
  : T extends object
  ? DeepReadonlyObject10040<T>
  : T;

interface DeepReadonlyArray10040<T> extends ReadonlyArray<DeepReadonly10040<T>> {}

type DeepReadonlyObject10040<T> = {
  readonly [P in keyof T]: DeepReadonly10040<T[P]>;
};

type UnionToIntersection10040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10040<T> = UnionToIntersection10040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10040<T extends unknown[], V> = [...T, V];

type TuplifyUnion10040<T, L = LastOf10040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10040<TuplifyUnion10040<Exclude<T, L>>, L>;

type DeepPartial10040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10040<T[P]> }
  : T;

type Paths10040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10040<K, Paths10040<T[K], Prev10040[D]>> : never }[keyof T]
  : never;

type Prev10040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10040 {
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

type ConfigPaths10040 = Paths10040<NestedConfig10040>;

interface HeavyProps10040 {
  config: DeepPartial10040<NestedConfig10040>;
  path?: ConfigPaths10040;
}

const HeavyComponent10040 = memo(function HeavyComponent10040({ config }: HeavyProps10040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10040.displayName = 'HeavyComponent10040';
export default HeavyComponent10040;

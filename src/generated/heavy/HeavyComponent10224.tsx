'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10224<T> = T extends (infer U)[]
  ? DeepReadonlyArray10224<U>
  : T extends object
  ? DeepReadonlyObject10224<T>
  : T;

interface DeepReadonlyArray10224<T> extends ReadonlyArray<DeepReadonly10224<T>> {}

type DeepReadonlyObject10224<T> = {
  readonly [P in keyof T]: DeepReadonly10224<T[P]>;
};

type UnionToIntersection10224<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10224<T> = UnionToIntersection10224<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10224<T extends unknown[], V> = [...T, V];

type TuplifyUnion10224<T, L = LastOf10224<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10224<TuplifyUnion10224<Exclude<T, L>>, L>;

type DeepPartial10224<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10224<T[P]> }
  : T;

type Paths10224<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10224<K, Paths10224<T[K], Prev10224[D]>> : never }[keyof T]
  : never;

type Prev10224 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10224<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10224 {
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

type ConfigPaths10224 = Paths10224<NestedConfig10224>;

interface HeavyProps10224 {
  config: DeepPartial10224<NestedConfig10224>;
  path?: ConfigPaths10224;
}

const HeavyComponent10224 = memo(function HeavyComponent10224({ config }: HeavyProps10224) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10224) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10224 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10224: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10224.displayName = 'HeavyComponent10224';
export default HeavyComponent10224;

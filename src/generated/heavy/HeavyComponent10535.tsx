'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10535<T> = T extends (infer U)[]
  ? DeepReadonlyArray10535<U>
  : T extends object
  ? DeepReadonlyObject10535<T>
  : T;

interface DeepReadonlyArray10535<T> extends ReadonlyArray<DeepReadonly10535<T>> {}

type DeepReadonlyObject10535<T> = {
  readonly [P in keyof T]: DeepReadonly10535<T[P]>;
};

type UnionToIntersection10535<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10535<T> = UnionToIntersection10535<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10535<T extends unknown[], V> = [...T, V];

type TuplifyUnion10535<T, L = LastOf10535<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10535<TuplifyUnion10535<Exclude<T, L>>, L>;

type DeepPartial10535<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10535<T[P]> }
  : T;

type Paths10535<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10535<K, Paths10535<T[K], Prev10535[D]>> : never }[keyof T]
  : never;

type Prev10535 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10535<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10535 {
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

type ConfigPaths10535 = Paths10535<NestedConfig10535>;

interface HeavyProps10535 {
  config: DeepPartial10535<NestedConfig10535>;
  path?: ConfigPaths10535;
}

const HeavyComponent10535 = memo(function HeavyComponent10535({ config }: HeavyProps10535) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10535) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10535 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10535: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10535.displayName = 'HeavyComponent10535';
export default HeavyComponent10535;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10054<T> = T extends (infer U)[]
  ? DeepReadonlyArray10054<U>
  : T extends object
  ? DeepReadonlyObject10054<T>
  : T;

interface DeepReadonlyArray10054<T> extends ReadonlyArray<DeepReadonly10054<T>> {}

type DeepReadonlyObject10054<T> = {
  readonly [P in keyof T]: DeepReadonly10054<T[P]>;
};

type UnionToIntersection10054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10054<T> = UnionToIntersection10054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10054<T extends unknown[], V> = [...T, V];

type TuplifyUnion10054<T, L = LastOf10054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10054<TuplifyUnion10054<Exclude<T, L>>, L>;

type DeepPartial10054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10054<T[P]> }
  : T;

type Paths10054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10054<K, Paths10054<T[K], Prev10054[D]>> : never }[keyof T]
  : never;

type Prev10054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10054 {
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

type ConfigPaths10054 = Paths10054<NestedConfig10054>;

interface HeavyProps10054 {
  config: DeepPartial10054<NestedConfig10054>;
  path?: ConfigPaths10054;
}

const HeavyComponent10054 = memo(function HeavyComponent10054({ config }: HeavyProps10054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10054.displayName = 'HeavyComponent10054';
export default HeavyComponent10054;

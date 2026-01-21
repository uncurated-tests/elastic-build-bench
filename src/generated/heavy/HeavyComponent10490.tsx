'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10490<T> = T extends (infer U)[]
  ? DeepReadonlyArray10490<U>
  : T extends object
  ? DeepReadonlyObject10490<T>
  : T;

interface DeepReadonlyArray10490<T> extends ReadonlyArray<DeepReadonly10490<T>> {}

type DeepReadonlyObject10490<T> = {
  readonly [P in keyof T]: DeepReadonly10490<T[P]>;
};

type UnionToIntersection10490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10490<T> = UnionToIntersection10490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10490<T extends unknown[], V> = [...T, V];

type TuplifyUnion10490<T, L = LastOf10490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10490<TuplifyUnion10490<Exclude<T, L>>, L>;

type DeepPartial10490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10490<T[P]> }
  : T;

type Paths10490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10490<K, Paths10490<T[K], Prev10490[D]>> : never }[keyof T]
  : never;

type Prev10490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10490 {
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

type ConfigPaths10490 = Paths10490<NestedConfig10490>;

interface HeavyProps10490 {
  config: DeepPartial10490<NestedConfig10490>;
  path?: ConfigPaths10490;
}

const HeavyComponent10490 = memo(function HeavyComponent10490({ config }: HeavyProps10490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10490.displayName = 'HeavyComponent10490';
export default HeavyComponent10490;

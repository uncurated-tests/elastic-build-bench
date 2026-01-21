'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10615<T> = T extends (infer U)[]
  ? DeepReadonlyArray10615<U>
  : T extends object
  ? DeepReadonlyObject10615<T>
  : T;

interface DeepReadonlyArray10615<T> extends ReadonlyArray<DeepReadonly10615<T>> {}

type DeepReadonlyObject10615<T> = {
  readonly [P in keyof T]: DeepReadonly10615<T[P]>;
};

type UnionToIntersection10615<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10615<T> = UnionToIntersection10615<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10615<T extends unknown[], V> = [...T, V];

type TuplifyUnion10615<T, L = LastOf10615<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10615<TuplifyUnion10615<Exclude<T, L>>, L>;

type DeepPartial10615<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10615<T[P]> }
  : T;

type Paths10615<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10615<K, Paths10615<T[K], Prev10615[D]>> : never }[keyof T]
  : never;

type Prev10615 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10615<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10615 {
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

type ConfigPaths10615 = Paths10615<NestedConfig10615>;

interface HeavyProps10615 {
  config: DeepPartial10615<NestedConfig10615>;
  path?: ConfigPaths10615;
}

const HeavyComponent10615 = memo(function HeavyComponent10615({ config }: HeavyProps10615) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10615) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10615 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10615: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10615.displayName = 'HeavyComponent10615';
export default HeavyComponent10615;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10957<T> = T extends (infer U)[]
  ? DeepReadonlyArray10957<U>
  : T extends object
  ? DeepReadonlyObject10957<T>
  : T;

interface DeepReadonlyArray10957<T> extends ReadonlyArray<DeepReadonly10957<T>> {}

type DeepReadonlyObject10957<T> = {
  readonly [P in keyof T]: DeepReadonly10957<T[P]>;
};

type UnionToIntersection10957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10957<T> = UnionToIntersection10957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10957<T extends unknown[], V> = [...T, V];

type TuplifyUnion10957<T, L = LastOf10957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10957<TuplifyUnion10957<Exclude<T, L>>, L>;

type DeepPartial10957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10957<T[P]> }
  : T;

type Paths10957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10957<K, Paths10957<T[K], Prev10957[D]>> : never }[keyof T]
  : never;

type Prev10957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10957 {
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

type ConfigPaths10957 = Paths10957<NestedConfig10957>;

interface HeavyProps10957 {
  config: DeepPartial10957<NestedConfig10957>;
  path?: ConfigPaths10957;
}

const HeavyComponent10957 = memo(function HeavyComponent10957({ config }: HeavyProps10957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10957.displayName = 'HeavyComponent10957';
export default HeavyComponent10957;

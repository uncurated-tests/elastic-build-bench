'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10730<T> = T extends (infer U)[]
  ? DeepReadonlyArray10730<U>
  : T extends object
  ? DeepReadonlyObject10730<T>
  : T;

interface DeepReadonlyArray10730<T> extends ReadonlyArray<DeepReadonly10730<T>> {}

type DeepReadonlyObject10730<T> = {
  readonly [P in keyof T]: DeepReadonly10730<T[P]>;
};

type UnionToIntersection10730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10730<T> = UnionToIntersection10730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10730<T extends unknown[], V> = [...T, V];

type TuplifyUnion10730<T, L = LastOf10730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10730<TuplifyUnion10730<Exclude<T, L>>, L>;

type DeepPartial10730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10730<T[P]> }
  : T;

type Paths10730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10730<K, Paths10730<T[K], Prev10730[D]>> : never }[keyof T]
  : never;

type Prev10730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10730 {
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

type ConfigPaths10730 = Paths10730<NestedConfig10730>;

interface HeavyProps10730 {
  config: DeepPartial10730<NestedConfig10730>;
  path?: ConfigPaths10730;
}

const HeavyComponent10730 = memo(function HeavyComponent10730({ config }: HeavyProps10730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10730.displayName = 'HeavyComponent10730';
export default HeavyComponent10730;

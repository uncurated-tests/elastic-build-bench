'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10837<T> = T extends (infer U)[]
  ? DeepReadonlyArray10837<U>
  : T extends object
  ? DeepReadonlyObject10837<T>
  : T;

interface DeepReadonlyArray10837<T> extends ReadonlyArray<DeepReadonly10837<T>> {}

type DeepReadonlyObject10837<T> = {
  readonly [P in keyof T]: DeepReadonly10837<T[P]>;
};

type UnionToIntersection10837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10837<T> = UnionToIntersection10837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10837<T extends unknown[], V> = [...T, V];

type TuplifyUnion10837<T, L = LastOf10837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10837<TuplifyUnion10837<Exclude<T, L>>, L>;

type DeepPartial10837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10837<T[P]> }
  : T;

type Paths10837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10837<K, Paths10837<T[K], Prev10837[D]>> : never }[keyof T]
  : never;

type Prev10837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10837 {
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

type ConfigPaths10837 = Paths10837<NestedConfig10837>;

interface HeavyProps10837 {
  config: DeepPartial10837<NestedConfig10837>;
  path?: ConfigPaths10837;
}

const HeavyComponent10837 = memo(function HeavyComponent10837({ config }: HeavyProps10837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10837.displayName = 'HeavyComponent10837';
export default HeavyComponent10837;

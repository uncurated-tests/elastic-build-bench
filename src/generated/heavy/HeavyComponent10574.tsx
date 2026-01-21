'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10574<T> = T extends (infer U)[]
  ? DeepReadonlyArray10574<U>
  : T extends object
  ? DeepReadonlyObject10574<T>
  : T;

interface DeepReadonlyArray10574<T> extends ReadonlyArray<DeepReadonly10574<T>> {}

type DeepReadonlyObject10574<T> = {
  readonly [P in keyof T]: DeepReadonly10574<T[P]>;
};

type UnionToIntersection10574<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10574<T> = UnionToIntersection10574<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10574<T extends unknown[], V> = [...T, V];

type TuplifyUnion10574<T, L = LastOf10574<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10574<TuplifyUnion10574<Exclude<T, L>>, L>;

type DeepPartial10574<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10574<T[P]> }
  : T;

type Paths10574<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10574<K, Paths10574<T[K], Prev10574[D]>> : never }[keyof T]
  : never;

type Prev10574 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10574<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10574 {
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

type ConfigPaths10574 = Paths10574<NestedConfig10574>;

interface HeavyProps10574 {
  config: DeepPartial10574<NestedConfig10574>;
  path?: ConfigPaths10574;
}

const HeavyComponent10574 = memo(function HeavyComponent10574({ config }: HeavyProps10574) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10574) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10574 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10574: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10574.displayName = 'HeavyComponent10574';
export default HeavyComponent10574;

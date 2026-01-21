'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10977<T> = T extends (infer U)[]
  ? DeepReadonlyArray10977<U>
  : T extends object
  ? DeepReadonlyObject10977<T>
  : T;

interface DeepReadonlyArray10977<T> extends ReadonlyArray<DeepReadonly10977<T>> {}

type DeepReadonlyObject10977<T> = {
  readonly [P in keyof T]: DeepReadonly10977<T[P]>;
};

type UnionToIntersection10977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10977<T> = UnionToIntersection10977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10977<T extends unknown[], V> = [...T, V];

type TuplifyUnion10977<T, L = LastOf10977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10977<TuplifyUnion10977<Exclude<T, L>>, L>;

type DeepPartial10977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10977<T[P]> }
  : T;

type Paths10977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10977<K, Paths10977<T[K], Prev10977[D]>> : never }[keyof T]
  : never;

type Prev10977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10977 {
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

type ConfigPaths10977 = Paths10977<NestedConfig10977>;

interface HeavyProps10977 {
  config: DeepPartial10977<NestedConfig10977>;
  path?: ConfigPaths10977;
}

const HeavyComponent10977 = memo(function HeavyComponent10977({ config }: HeavyProps10977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10977.displayName = 'HeavyComponent10977';
export default HeavyComponent10977;

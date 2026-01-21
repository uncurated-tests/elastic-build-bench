'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10066<T> = T extends (infer U)[]
  ? DeepReadonlyArray10066<U>
  : T extends object
  ? DeepReadonlyObject10066<T>
  : T;

interface DeepReadonlyArray10066<T> extends ReadonlyArray<DeepReadonly10066<T>> {}

type DeepReadonlyObject10066<T> = {
  readonly [P in keyof T]: DeepReadonly10066<T[P]>;
};

type UnionToIntersection10066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10066<T> = UnionToIntersection10066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10066<T extends unknown[], V> = [...T, V];

type TuplifyUnion10066<T, L = LastOf10066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10066<TuplifyUnion10066<Exclude<T, L>>, L>;

type DeepPartial10066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10066<T[P]> }
  : T;

type Paths10066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10066<K, Paths10066<T[K], Prev10066[D]>> : never }[keyof T]
  : never;

type Prev10066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10066 {
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

type ConfigPaths10066 = Paths10066<NestedConfig10066>;

interface HeavyProps10066 {
  config: DeepPartial10066<NestedConfig10066>;
  path?: ConfigPaths10066;
}

const HeavyComponent10066 = memo(function HeavyComponent10066({ config }: HeavyProps10066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10066.displayName = 'HeavyComponent10066';
export default HeavyComponent10066;

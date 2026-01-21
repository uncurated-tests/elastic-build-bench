'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10507<T> = T extends (infer U)[]
  ? DeepReadonlyArray10507<U>
  : T extends object
  ? DeepReadonlyObject10507<T>
  : T;

interface DeepReadonlyArray10507<T> extends ReadonlyArray<DeepReadonly10507<T>> {}

type DeepReadonlyObject10507<T> = {
  readonly [P in keyof T]: DeepReadonly10507<T[P]>;
};

type UnionToIntersection10507<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10507<T> = UnionToIntersection10507<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10507<T extends unknown[], V> = [...T, V];

type TuplifyUnion10507<T, L = LastOf10507<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10507<TuplifyUnion10507<Exclude<T, L>>, L>;

type DeepPartial10507<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10507<T[P]> }
  : T;

type Paths10507<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10507<K, Paths10507<T[K], Prev10507[D]>> : never }[keyof T]
  : never;

type Prev10507 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10507<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10507 {
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

type ConfigPaths10507 = Paths10507<NestedConfig10507>;

interface HeavyProps10507 {
  config: DeepPartial10507<NestedConfig10507>;
  path?: ConfigPaths10507;
}

const HeavyComponent10507 = memo(function HeavyComponent10507({ config }: HeavyProps10507) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10507) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10507 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10507: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10507.displayName = 'HeavyComponent10507';
export default HeavyComponent10507;

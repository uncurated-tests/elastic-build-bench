'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10495<T> = T extends (infer U)[]
  ? DeepReadonlyArray10495<U>
  : T extends object
  ? DeepReadonlyObject10495<T>
  : T;

interface DeepReadonlyArray10495<T> extends ReadonlyArray<DeepReadonly10495<T>> {}

type DeepReadonlyObject10495<T> = {
  readonly [P in keyof T]: DeepReadonly10495<T[P]>;
};

type UnionToIntersection10495<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10495<T> = UnionToIntersection10495<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10495<T extends unknown[], V> = [...T, V];

type TuplifyUnion10495<T, L = LastOf10495<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10495<TuplifyUnion10495<Exclude<T, L>>, L>;

type DeepPartial10495<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10495<T[P]> }
  : T;

type Paths10495<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10495<K, Paths10495<T[K], Prev10495[D]>> : never }[keyof T]
  : never;

type Prev10495 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10495<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10495 {
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

type ConfigPaths10495 = Paths10495<NestedConfig10495>;

interface HeavyProps10495 {
  config: DeepPartial10495<NestedConfig10495>;
  path?: ConfigPaths10495;
}

const HeavyComponent10495 = memo(function HeavyComponent10495({ config }: HeavyProps10495) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10495) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10495 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10495: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10495.displayName = 'HeavyComponent10495';
export default HeavyComponent10495;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10630<T> = T extends (infer U)[]
  ? DeepReadonlyArray10630<U>
  : T extends object
  ? DeepReadonlyObject10630<T>
  : T;

interface DeepReadonlyArray10630<T> extends ReadonlyArray<DeepReadonly10630<T>> {}

type DeepReadonlyObject10630<T> = {
  readonly [P in keyof T]: DeepReadonly10630<T[P]>;
};

type UnionToIntersection10630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10630<T> = UnionToIntersection10630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10630<T extends unknown[], V> = [...T, V];

type TuplifyUnion10630<T, L = LastOf10630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10630<TuplifyUnion10630<Exclude<T, L>>, L>;

type DeepPartial10630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10630<T[P]> }
  : T;

type Paths10630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10630<K, Paths10630<T[K], Prev10630[D]>> : never }[keyof T]
  : never;

type Prev10630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10630 {
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

type ConfigPaths10630 = Paths10630<NestedConfig10630>;

interface HeavyProps10630 {
  config: DeepPartial10630<NestedConfig10630>;
  path?: ConfigPaths10630;
}

const HeavyComponent10630 = memo(function HeavyComponent10630({ config }: HeavyProps10630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10630.displayName = 'HeavyComponent10630';
export default HeavyComponent10630;

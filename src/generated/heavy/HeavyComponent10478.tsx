'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10478<T> = T extends (infer U)[]
  ? DeepReadonlyArray10478<U>
  : T extends object
  ? DeepReadonlyObject10478<T>
  : T;

interface DeepReadonlyArray10478<T> extends ReadonlyArray<DeepReadonly10478<T>> {}

type DeepReadonlyObject10478<T> = {
  readonly [P in keyof T]: DeepReadonly10478<T[P]>;
};

type UnionToIntersection10478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10478<T> = UnionToIntersection10478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10478<T extends unknown[], V> = [...T, V];

type TuplifyUnion10478<T, L = LastOf10478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10478<TuplifyUnion10478<Exclude<T, L>>, L>;

type DeepPartial10478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10478<T[P]> }
  : T;

type Paths10478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10478<K, Paths10478<T[K], Prev10478[D]>> : never }[keyof T]
  : never;

type Prev10478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10478 {
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

type ConfigPaths10478 = Paths10478<NestedConfig10478>;

interface HeavyProps10478 {
  config: DeepPartial10478<NestedConfig10478>;
  path?: ConfigPaths10478;
}

const HeavyComponent10478 = memo(function HeavyComponent10478({ config }: HeavyProps10478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10478.displayName = 'HeavyComponent10478';
export default HeavyComponent10478;

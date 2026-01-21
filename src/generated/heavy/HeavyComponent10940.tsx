'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10940<T> = T extends (infer U)[]
  ? DeepReadonlyArray10940<U>
  : T extends object
  ? DeepReadonlyObject10940<T>
  : T;

interface DeepReadonlyArray10940<T> extends ReadonlyArray<DeepReadonly10940<T>> {}

type DeepReadonlyObject10940<T> = {
  readonly [P in keyof T]: DeepReadonly10940<T[P]>;
};

type UnionToIntersection10940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10940<T> = UnionToIntersection10940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10940<T extends unknown[], V> = [...T, V];

type TuplifyUnion10940<T, L = LastOf10940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10940<TuplifyUnion10940<Exclude<T, L>>, L>;

type DeepPartial10940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10940<T[P]> }
  : T;

type Paths10940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10940<K, Paths10940<T[K], Prev10940[D]>> : never }[keyof T]
  : never;

type Prev10940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10940 {
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

type ConfigPaths10940 = Paths10940<NestedConfig10940>;

interface HeavyProps10940 {
  config: DeepPartial10940<NestedConfig10940>;
  path?: ConfigPaths10940;
}

const HeavyComponent10940 = memo(function HeavyComponent10940({ config }: HeavyProps10940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10940.displayName = 'HeavyComponent10940';
export default HeavyComponent10940;

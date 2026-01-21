'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13371<T> = T extends (infer U)[]
  ? DeepReadonlyArray13371<U>
  : T extends object
  ? DeepReadonlyObject13371<T>
  : T;

interface DeepReadonlyArray13371<T> extends ReadonlyArray<DeepReadonly13371<T>> {}

type DeepReadonlyObject13371<T> = {
  readonly [P in keyof T]: DeepReadonly13371<T[P]>;
};

type UnionToIntersection13371<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13371<T> = UnionToIntersection13371<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13371<T extends unknown[], V> = [...T, V];

type TuplifyUnion13371<T, L = LastOf13371<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13371<TuplifyUnion13371<Exclude<T, L>>, L>;

type DeepPartial13371<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13371<T[P]> }
  : T;

type Paths13371<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13371<K, Paths13371<T[K], Prev13371[D]>> : never }[keyof T]
  : never;

type Prev13371 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13371<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13371 {
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

type ConfigPaths13371 = Paths13371<NestedConfig13371>;

interface HeavyProps13371 {
  config: DeepPartial13371<NestedConfig13371>;
  path?: ConfigPaths13371;
}

const HeavyComponent13371 = memo(function HeavyComponent13371({ config }: HeavyProps13371) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13371) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13371 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13371: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13371.displayName = 'HeavyComponent13371';
export default HeavyComponent13371;

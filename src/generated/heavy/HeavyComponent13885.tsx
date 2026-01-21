'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13885<T> = T extends (infer U)[]
  ? DeepReadonlyArray13885<U>
  : T extends object
  ? DeepReadonlyObject13885<T>
  : T;

interface DeepReadonlyArray13885<T> extends ReadonlyArray<DeepReadonly13885<T>> {}

type DeepReadonlyObject13885<T> = {
  readonly [P in keyof T]: DeepReadonly13885<T[P]>;
};

type UnionToIntersection13885<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13885<T> = UnionToIntersection13885<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13885<T extends unknown[], V> = [...T, V];

type TuplifyUnion13885<T, L = LastOf13885<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13885<TuplifyUnion13885<Exclude<T, L>>, L>;

type DeepPartial13885<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13885<T[P]> }
  : T;

type Paths13885<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13885<K, Paths13885<T[K], Prev13885[D]>> : never }[keyof T]
  : never;

type Prev13885 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13885<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13885 {
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

type ConfigPaths13885 = Paths13885<NestedConfig13885>;

interface HeavyProps13885 {
  config: DeepPartial13885<NestedConfig13885>;
  path?: ConfigPaths13885;
}

const HeavyComponent13885 = memo(function HeavyComponent13885({ config }: HeavyProps13885) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13885) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13885 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13885: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13885.displayName = 'HeavyComponent13885';
export default HeavyComponent13885;

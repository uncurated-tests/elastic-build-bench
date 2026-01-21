'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13553<T> = T extends (infer U)[]
  ? DeepReadonlyArray13553<U>
  : T extends object
  ? DeepReadonlyObject13553<T>
  : T;

interface DeepReadonlyArray13553<T> extends ReadonlyArray<DeepReadonly13553<T>> {}

type DeepReadonlyObject13553<T> = {
  readonly [P in keyof T]: DeepReadonly13553<T[P]>;
};

type UnionToIntersection13553<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13553<T> = UnionToIntersection13553<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13553<T extends unknown[], V> = [...T, V];

type TuplifyUnion13553<T, L = LastOf13553<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13553<TuplifyUnion13553<Exclude<T, L>>, L>;

type DeepPartial13553<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13553<T[P]> }
  : T;

type Paths13553<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13553<K, Paths13553<T[K], Prev13553[D]>> : never }[keyof T]
  : never;

type Prev13553 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13553<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13553 {
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

type ConfigPaths13553 = Paths13553<NestedConfig13553>;

interface HeavyProps13553 {
  config: DeepPartial13553<NestedConfig13553>;
  path?: ConfigPaths13553;
}

const HeavyComponent13553 = memo(function HeavyComponent13553({ config }: HeavyProps13553) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13553) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13553 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13553: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13553.displayName = 'HeavyComponent13553';
export default HeavyComponent13553;

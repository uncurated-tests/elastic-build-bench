'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13119<T> = T extends (infer U)[]
  ? DeepReadonlyArray13119<U>
  : T extends object
  ? DeepReadonlyObject13119<T>
  : T;

interface DeepReadonlyArray13119<T> extends ReadonlyArray<DeepReadonly13119<T>> {}

type DeepReadonlyObject13119<T> = {
  readonly [P in keyof T]: DeepReadonly13119<T[P]>;
};

type UnionToIntersection13119<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13119<T> = UnionToIntersection13119<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13119<T extends unknown[], V> = [...T, V];

type TuplifyUnion13119<T, L = LastOf13119<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13119<TuplifyUnion13119<Exclude<T, L>>, L>;

type DeepPartial13119<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13119<T[P]> }
  : T;

type Paths13119<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13119<K, Paths13119<T[K], Prev13119[D]>> : never }[keyof T]
  : never;

type Prev13119 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13119<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13119 {
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

type ConfigPaths13119 = Paths13119<NestedConfig13119>;

interface HeavyProps13119 {
  config: DeepPartial13119<NestedConfig13119>;
  path?: ConfigPaths13119;
}

const HeavyComponent13119 = memo(function HeavyComponent13119({ config }: HeavyProps13119) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13119) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13119 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13119: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13119.displayName = 'HeavyComponent13119';
export default HeavyComponent13119;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13586<T> = T extends (infer U)[]
  ? DeepReadonlyArray13586<U>
  : T extends object
  ? DeepReadonlyObject13586<T>
  : T;

interface DeepReadonlyArray13586<T> extends ReadonlyArray<DeepReadonly13586<T>> {}

type DeepReadonlyObject13586<T> = {
  readonly [P in keyof T]: DeepReadonly13586<T[P]>;
};

type UnionToIntersection13586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13586<T> = UnionToIntersection13586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13586<T extends unknown[], V> = [...T, V];

type TuplifyUnion13586<T, L = LastOf13586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13586<TuplifyUnion13586<Exclude<T, L>>, L>;

type DeepPartial13586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13586<T[P]> }
  : T;

type Paths13586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13586<K, Paths13586<T[K], Prev13586[D]>> : never }[keyof T]
  : never;

type Prev13586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13586 {
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

type ConfigPaths13586 = Paths13586<NestedConfig13586>;

interface HeavyProps13586 {
  config: DeepPartial13586<NestedConfig13586>;
  path?: ConfigPaths13586;
}

const HeavyComponent13586 = memo(function HeavyComponent13586({ config }: HeavyProps13586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13586.displayName = 'HeavyComponent13586';
export default HeavyComponent13586;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13249<T> = T extends (infer U)[]
  ? DeepReadonlyArray13249<U>
  : T extends object
  ? DeepReadonlyObject13249<T>
  : T;

interface DeepReadonlyArray13249<T> extends ReadonlyArray<DeepReadonly13249<T>> {}

type DeepReadonlyObject13249<T> = {
  readonly [P in keyof T]: DeepReadonly13249<T[P]>;
};

type UnionToIntersection13249<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13249<T> = UnionToIntersection13249<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13249<T extends unknown[], V> = [...T, V];

type TuplifyUnion13249<T, L = LastOf13249<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13249<TuplifyUnion13249<Exclude<T, L>>, L>;

type DeepPartial13249<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13249<T[P]> }
  : T;

type Paths13249<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13249<K, Paths13249<T[K], Prev13249[D]>> : never }[keyof T]
  : never;

type Prev13249 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13249<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13249 {
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

type ConfigPaths13249 = Paths13249<NestedConfig13249>;

interface HeavyProps13249 {
  config: DeepPartial13249<NestedConfig13249>;
  path?: ConfigPaths13249;
}

const HeavyComponent13249 = memo(function HeavyComponent13249({ config }: HeavyProps13249) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13249) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13249 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13249: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13249.displayName = 'HeavyComponent13249';
export default HeavyComponent13249;

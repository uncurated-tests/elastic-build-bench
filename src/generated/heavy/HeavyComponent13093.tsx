'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13093<T> = T extends (infer U)[]
  ? DeepReadonlyArray13093<U>
  : T extends object
  ? DeepReadonlyObject13093<T>
  : T;

interface DeepReadonlyArray13093<T> extends ReadonlyArray<DeepReadonly13093<T>> {}

type DeepReadonlyObject13093<T> = {
  readonly [P in keyof T]: DeepReadonly13093<T[P]>;
};

type UnionToIntersection13093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13093<T> = UnionToIntersection13093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13093<T extends unknown[], V> = [...T, V];

type TuplifyUnion13093<T, L = LastOf13093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13093<TuplifyUnion13093<Exclude<T, L>>, L>;

type DeepPartial13093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13093<T[P]> }
  : T;

type Paths13093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13093<K, Paths13093<T[K], Prev13093[D]>> : never }[keyof T]
  : never;

type Prev13093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13093 {
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

type ConfigPaths13093 = Paths13093<NestedConfig13093>;

interface HeavyProps13093 {
  config: DeepPartial13093<NestedConfig13093>;
  path?: ConfigPaths13093;
}

const HeavyComponent13093 = memo(function HeavyComponent13093({ config }: HeavyProps13093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13093.displayName = 'HeavyComponent13093';
export default HeavyComponent13093;

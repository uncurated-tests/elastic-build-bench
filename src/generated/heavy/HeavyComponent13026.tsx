'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13026<T> = T extends (infer U)[]
  ? DeepReadonlyArray13026<U>
  : T extends object
  ? DeepReadonlyObject13026<T>
  : T;

interface DeepReadonlyArray13026<T> extends ReadonlyArray<DeepReadonly13026<T>> {}

type DeepReadonlyObject13026<T> = {
  readonly [P in keyof T]: DeepReadonly13026<T[P]>;
};

type UnionToIntersection13026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13026<T> = UnionToIntersection13026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13026<T extends unknown[], V> = [...T, V];

type TuplifyUnion13026<T, L = LastOf13026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13026<TuplifyUnion13026<Exclude<T, L>>, L>;

type DeepPartial13026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13026<T[P]> }
  : T;

type Paths13026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13026<K, Paths13026<T[K], Prev13026[D]>> : never }[keyof T]
  : never;

type Prev13026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13026 {
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

type ConfigPaths13026 = Paths13026<NestedConfig13026>;

interface HeavyProps13026 {
  config: DeepPartial13026<NestedConfig13026>;
  path?: ConfigPaths13026;
}

const HeavyComponent13026 = memo(function HeavyComponent13026({ config }: HeavyProps13026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13026.displayName = 'HeavyComponent13026';
export default HeavyComponent13026;

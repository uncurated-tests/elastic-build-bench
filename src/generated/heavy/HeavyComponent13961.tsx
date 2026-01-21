'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13961<T> = T extends (infer U)[]
  ? DeepReadonlyArray13961<U>
  : T extends object
  ? DeepReadonlyObject13961<T>
  : T;

interface DeepReadonlyArray13961<T> extends ReadonlyArray<DeepReadonly13961<T>> {}

type DeepReadonlyObject13961<T> = {
  readonly [P in keyof T]: DeepReadonly13961<T[P]>;
};

type UnionToIntersection13961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13961<T> = UnionToIntersection13961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13961<T extends unknown[], V> = [...T, V];

type TuplifyUnion13961<T, L = LastOf13961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13961<TuplifyUnion13961<Exclude<T, L>>, L>;

type DeepPartial13961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13961<T[P]> }
  : T;

type Paths13961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13961<K, Paths13961<T[K], Prev13961[D]>> : never }[keyof T]
  : never;

type Prev13961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13961 {
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

type ConfigPaths13961 = Paths13961<NestedConfig13961>;

interface HeavyProps13961 {
  config: DeepPartial13961<NestedConfig13961>;
  path?: ConfigPaths13961;
}

const HeavyComponent13961 = memo(function HeavyComponent13961({ config }: HeavyProps13961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13961.displayName = 'HeavyComponent13961';
export default HeavyComponent13961;

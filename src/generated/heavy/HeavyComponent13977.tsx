'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13977<T> = T extends (infer U)[]
  ? DeepReadonlyArray13977<U>
  : T extends object
  ? DeepReadonlyObject13977<T>
  : T;

interface DeepReadonlyArray13977<T> extends ReadonlyArray<DeepReadonly13977<T>> {}

type DeepReadonlyObject13977<T> = {
  readonly [P in keyof T]: DeepReadonly13977<T[P]>;
};

type UnionToIntersection13977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13977<T> = UnionToIntersection13977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13977<T extends unknown[], V> = [...T, V];

type TuplifyUnion13977<T, L = LastOf13977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13977<TuplifyUnion13977<Exclude<T, L>>, L>;

type DeepPartial13977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13977<T[P]> }
  : T;

type Paths13977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13977<K, Paths13977<T[K], Prev13977[D]>> : never }[keyof T]
  : never;

type Prev13977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13977 {
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

type ConfigPaths13977 = Paths13977<NestedConfig13977>;

interface HeavyProps13977 {
  config: DeepPartial13977<NestedConfig13977>;
  path?: ConfigPaths13977;
}

const HeavyComponent13977 = memo(function HeavyComponent13977({ config }: HeavyProps13977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13977.displayName = 'HeavyComponent13977';
export default HeavyComponent13977;

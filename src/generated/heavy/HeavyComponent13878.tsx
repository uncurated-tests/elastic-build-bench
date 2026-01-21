'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13878<T> = T extends (infer U)[]
  ? DeepReadonlyArray13878<U>
  : T extends object
  ? DeepReadonlyObject13878<T>
  : T;

interface DeepReadonlyArray13878<T> extends ReadonlyArray<DeepReadonly13878<T>> {}

type DeepReadonlyObject13878<T> = {
  readonly [P in keyof T]: DeepReadonly13878<T[P]>;
};

type UnionToIntersection13878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13878<T> = UnionToIntersection13878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13878<T extends unknown[], V> = [...T, V];

type TuplifyUnion13878<T, L = LastOf13878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13878<TuplifyUnion13878<Exclude<T, L>>, L>;

type DeepPartial13878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13878<T[P]> }
  : T;

type Paths13878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13878<K, Paths13878<T[K], Prev13878[D]>> : never }[keyof T]
  : never;

type Prev13878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13878 {
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

type ConfigPaths13878 = Paths13878<NestedConfig13878>;

interface HeavyProps13878 {
  config: DeepPartial13878<NestedConfig13878>;
  path?: ConfigPaths13878;
}

const HeavyComponent13878 = memo(function HeavyComponent13878({ config }: HeavyProps13878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13878.displayName = 'HeavyComponent13878';
export default HeavyComponent13878;

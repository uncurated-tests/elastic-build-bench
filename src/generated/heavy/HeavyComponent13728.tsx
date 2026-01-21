'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13728<T> = T extends (infer U)[]
  ? DeepReadonlyArray13728<U>
  : T extends object
  ? DeepReadonlyObject13728<T>
  : T;

interface DeepReadonlyArray13728<T> extends ReadonlyArray<DeepReadonly13728<T>> {}

type DeepReadonlyObject13728<T> = {
  readonly [P in keyof T]: DeepReadonly13728<T[P]>;
};

type UnionToIntersection13728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13728<T> = UnionToIntersection13728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13728<T extends unknown[], V> = [...T, V];

type TuplifyUnion13728<T, L = LastOf13728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13728<TuplifyUnion13728<Exclude<T, L>>, L>;

type DeepPartial13728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13728<T[P]> }
  : T;

type Paths13728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13728<K, Paths13728<T[K], Prev13728[D]>> : never }[keyof T]
  : never;

type Prev13728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13728 {
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

type ConfigPaths13728 = Paths13728<NestedConfig13728>;

interface HeavyProps13728 {
  config: DeepPartial13728<NestedConfig13728>;
  path?: ConfigPaths13728;
}

const HeavyComponent13728 = memo(function HeavyComponent13728({ config }: HeavyProps13728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13728.displayName = 'HeavyComponent13728';
export default HeavyComponent13728;

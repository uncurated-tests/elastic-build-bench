'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13232<T> = T extends (infer U)[]
  ? DeepReadonlyArray13232<U>
  : T extends object
  ? DeepReadonlyObject13232<T>
  : T;

interface DeepReadonlyArray13232<T> extends ReadonlyArray<DeepReadonly13232<T>> {}

type DeepReadonlyObject13232<T> = {
  readonly [P in keyof T]: DeepReadonly13232<T[P]>;
};

type UnionToIntersection13232<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13232<T> = UnionToIntersection13232<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13232<T extends unknown[], V> = [...T, V];

type TuplifyUnion13232<T, L = LastOf13232<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13232<TuplifyUnion13232<Exclude<T, L>>, L>;

type DeepPartial13232<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13232<T[P]> }
  : T;

type Paths13232<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13232<K, Paths13232<T[K], Prev13232[D]>> : never }[keyof T]
  : never;

type Prev13232 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13232<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13232 {
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

type ConfigPaths13232 = Paths13232<NestedConfig13232>;

interface HeavyProps13232 {
  config: DeepPartial13232<NestedConfig13232>;
  path?: ConfigPaths13232;
}

const HeavyComponent13232 = memo(function HeavyComponent13232({ config }: HeavyProps13232) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13232) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13232 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13232: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13232.displayName = 'HeavyComponent13232';
export default HeavyComponent13232;

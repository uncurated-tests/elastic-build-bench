'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13870<T> = T extends (infer U)[]
  ? DeepReadonlyArray13870<U>
  : T extends object
  ? DeepReadonlyObject13870<T>
  : T;

interface DeepReadonlyArray13870<T> extends ReadonlyArray<DeepReadonly13870<T>> {}

type DeepReadonlyObject13870<T> = {
  readonly [P in keyof T]: DeepReadonly13870<T[P]>;
};

type UnionToIntersection13870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13870<T> = UnionToIntersection13870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13870<T extends unknown[], V> = [...T, V];

type TuplifyUnion13870<T, L = LastOf13870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13870<TuplifyUnion13870<Exclude<T, L>>, L>;

type DeepPartial13870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13870<T[P]> }
  : T;

type Paths13870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13870<K, Paths13870<T[K], Prev13870[D]>> : never }[keyof T]
  : never;

type Prev13870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13870 {
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

type ConfigPaths13870 = Paths13870<NestedConfig13870>;

interface HeavyProps13870 {
  config: DeepPartial13870<NestedConfig13870>;
  path?: ConfigPaths13870;
}

const HeavyComponent13870 = memo(function HeavyComponent13870({ config }: HeavyProps13870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13870.displayName = 'HeavyComponent13870';
export default HeavyComponent13870;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13969<T> = T extends (infer U)[]
  ? DeepReadonlyArray13969<U>
  : T extends object
  ? DeepReadonlyObject13969<T>
  : T;

interface DeepReadonlyArray13969<T> extends ReadonlyArray<DeepReadonly13969<T>> {}

type DeepReadonlyObject13969<T> = {
  readonly [P in keyof T]: DeepReadonly13969<T[P]>;
};

type UnionToIntersection13969<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13969<T> = UnionToIntersection13969<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13969<T extends unknown[], V> = [...T, V];

type TuplifyUnion13969<T, L = LastOf13969<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13969<TuplifyUnion13969<Exclude<T, L>>, L>;

type DeepPartial13969<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13969<T[P]> }
  : T;

type Paths13969<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13969<K, Paths13969<T[K], Prev13969[D]>> : never }[keyof T]
  : never;

type Prev13969 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13969<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13969 {
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

type ConfigPaths13969 = Paths13969<NestedConfig13969>;

interface HeavyProps13969 {
  config: DeepPartial13969<NestedConfig13969>;
  path?: ConfigPaths13969;
}

const HeavyComponent13969 = memo(function HeavyComponent13969({ config }: HeavyProps13969) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13969) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13969 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13969: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13969.displayName = 'HeavyComponent13969';
export default HeavyComponent13969;

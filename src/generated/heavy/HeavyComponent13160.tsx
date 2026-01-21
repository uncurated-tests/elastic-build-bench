'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13160<T> = T extends (infer U)[]
  ? DeepReadonlyArray13160<U>
  : T extends object
  ? DeepReadonlyObject13160<T>
  : T;

interface DeepReadonlyArray13160<T> extends ReadonlyArray<DeepReadonly13160<T>> {}

type DeepReadonlyObject13160<T> = {
  readonly [P in keyof T]: DeepReadonly13160<T[P]>;
};

type UnionToIntersection13160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13160<T> = UnionToIntersection13160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13160<T extends unknown[], V> = [...T, V];

type TuplifyUnion13160<T, L = LastOf13160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13160<TuplifyUnion13160<Exclude<T, L>>, L>;

type DeepPartial13160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13160<T[P]> }
  : T;

type Paths13160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13160<K, Paths13160<T[K], Prev13160[D]>> : never }[keyof T]
  : never;

type Prev13160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13160 {
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

type ConfigPaths13160 = Paths13160<NestedConfig13160>;

interface HeavyProps13160 {
  config: DeepPartial13160<NestedConfig13160>;
  path?: ConfigPaths13160;
}

const HeavyComponent13160 = memo(function HeavyComponent13160({ config }: HeavyProps13160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13160.displayName = 'HeavyComponent13160';
export default HeavyComponent13160;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13804<T> = T extends (infer U)[]
  ? DeepReadonlyArray13804<U>
  : T extends object
  ? DeepReadonlyObject13804<T>
  : T;

interface DeepReadonlyArray13804<T> extends ReadonlyArray<DeepReadonly13804<T>> {}

type DeepReadonlyObject13804<T> = {
  readonly [P in keyof T]: DeepReadonly13804<T[P]>;
};

type UnionToIntersection13804<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13804<T> = UnionToIntersection13804<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13804<T extends unknown[], V> = [...T, V];

type TuplifyUnion13804<T, L = LastOf13804<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13804<TuplifyUnion13804<Exclude<T, L>>, L>;

type DeepPartial13804<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13804<T[P]> }
  : T;

type Paths13804<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13804<K, Paths13804<T[K], Prev13804[D]>> : never }[keyof T]
  : never;

type Prev13804 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13804<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13804 {
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

type ConfigPaths13804 = Paths13804<NestedConfig13804>;

interface HeavyProps13804 {
  config: DeepPartial13804<NestedConfig13804>;
  path?: ConfigPaths13804;
}

const HeavyComponent13804 = memo(function HeavyComponent13804({ config }: HeavyProps13804) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13804) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13804 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13804: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13804.displayName = 'HeavyComponent13804';
export default HeavyComponent13804;

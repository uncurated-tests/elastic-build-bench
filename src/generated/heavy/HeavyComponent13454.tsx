'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13454<T> = T extends (infer U)[]
  ? DeepReadonlyArray13454<U>
  : T extends object
  ? DeepReadonlyObject13454<T>
  : T;

interface DeepReadonlyArray13454<T> extends ReadonlyArray<DeepReadonly13454<T>> {}

type DeepReadonlyObject13454<T> = {
  readonly [P in keyof T]: DeepReadonly13454<T[P]>;
};

type UnionToIntersection13454<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13454<T> = UnionToIntersection13454<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13454<T extends unknown[], V> = [...T, V];

type TuplifyUnion13454<T, L = LastOf13454<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13454<TuplifyUnion13454<Exclude<T, L>>, L>;

type DeepPartial13454<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13454<T[P]> }
  : T;

type Paths13454<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13454<K, Paths13454<T[K], Prev13454[D]>> : never }[keyof T]
  : never;

type Prev13454 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13454<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13454 {
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

type ConfigPaths13454 = Paths13454<NestedConfig13454>;

interface HeavyProps13454 {
  config: DeepPartial13454<NestedConfig13454>;
  path?: ConfigPaths13454;
}

const HeavyComponent13454 = memo(function HeavyComponent13454({ config }: HeavyProps13454) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13454) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13454 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13454: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13454.displayName = 'HeavyComponent13454';
export default HeavyComponent13454;

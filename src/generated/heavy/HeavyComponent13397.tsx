'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13397<T> = T extends (infer U)[]
  ? DeepReadonlyArray13397<U>
  : T extends object
  ? DeepReadonlyObject13397<T>
  : T;

interface DeepReadonlyArray13397<T> extends ReadonlyArray<DeepReadonly13397<T>> {}

type DeepReadonlyObject13397<T> = {
  readonly [P in keyof T]: DeepReadonly13397<T[P]>;
};

type UnionToIntersection13397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13397<T> = UnionToIntersection13397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13397<T extends unknown[], V> = [...T, V];

type TuplifyUnion13397<T, L = LastOf13397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13397<TuplifyUnion13397<Exclude<T, L>>, L>;

type DeepPartial13397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13397<T[P]> }
  : T;

type Paths13397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13397<K, Paths13397<T[K], Prev13397[D]>> : never }[keyof T]
  : never;

type Prev13397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13397 {
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

type ConfigPaths13397 = Paths13397<NestedConfig13397>;

interface HeavyProps13397 {
  config: DeepPartial13397<NestedConfig13397>;
  path?: ConfigPaths13397;
}

const HeavyComponent13397 = memo(function HeavyComponent13397({ config }: HeavyProps13397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13397.displayName = 'HeavyComponent13397';
export default HeavyComponent13397;

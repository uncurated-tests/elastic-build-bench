'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13442<T> = T extends (infer U)[]
  ? DeepReadonlyArray13442<U>
  : T extends object
  ? DeepReadonlyObject13442<T>
  : T;

interface DeepReadonlyArray13442<T> extends ReadonlyArray<DeepReadonly13442<T>> {}

type DeepReadonlyObject13442<T> = {
  readonly [P in keyof T]: DeepReadonly13442<T[P]>;
};

type UnionToIntersection13442<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13442<T> = UnionToIntersection13442<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13442<T extends unknown[], V> = [...T, V];

type TuplifyUnion13442<T, L = LastOf13442<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13442<TuplifyUnion13442<Exclude<T, L>>, L>;

type DeepPartial13442<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13442<T[P]> }
  : T;

type Paths13442<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13442<K, Paths13442<T[K], Prev13442[D]>> : never }[keyof T]
  : never;

type Prev13442 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13442<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13442 {
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

type ConfigPaths13442 = Paths13442<NestedConfig13442>;

interface HeavyProps13442 {
  config: DeepPartial13442<NestedConfig13442>;
  path?: ConfigPaths13442;
}

const HeavyComponent13442 = memo(function HeavyComponent13442({ config }: HeavyProps13442) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13442) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13442 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13442: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13442.displayName = 'HeavyComponent13442';
export default HeavyComponent13442;

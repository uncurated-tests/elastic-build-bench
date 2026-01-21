'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13380<T> = T extends (infer U)[]
  ? DeepReadonlyArray13380<U>
  : T extends object
  ? DeepReadonlyObject13380<T>
  : T;

interface DeepReadonlyArray13380<T> extends ReadonlyArray<DeepReadonly13380<T>> {}

type DeepReadonlyObject13380<T> = {
  readonly [P in keyof T]: DeepReadonly13380<T[P]>;
};

type UnionToIntersection13380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13380<T> = UnionToIntersection13380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13380<T extends unknown[], V> = [...T, V];

type TuplifyUnion13380<T, L = LastOf13380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13380<TuplifyUnion13380<Exclude<T, L>>, L>;

type DeepPartial13380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13380<T[P]> }
  : T;

type Paths13380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13380<K, Paths13380<T[K], Prev13380[D]>> : never }[keyof T]
  : never;

type Prev13380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13380 {
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

type ConfigPaths13380 = Paths13380<NestedConfig13380>;

interface HeavyProps13380 {
  config: DeepPartial13380<NestedConfig13380>;
  path?: ConfigPaths13380;
}

const HeavyComponent13380 = memo(function HeavyComponent13380({ config }: HeavyProps13380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13380.displayName = 'HeavyComponent13380';
export default HeavyComponent13380;

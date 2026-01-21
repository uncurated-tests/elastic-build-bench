'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13967<T> = T extends (infer U)[]
  ? DeepReadonlyArray13967<U>
  : T extends object
  ? DeepReadonlyObject13967<T>
  : T;

interface DeepReadonlyArray13967<T> extends ReadonlyArray<DeepReadonly13967<T>> {}

type DeepReadonlyObject13967<T> = {
  readonly [P in keyof T]: DeepReadonly13967<T[P]>;
};

type UnionToIntersection13967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13967<T> = UnionToIntersection13967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13967<T extends unknown[], V> = [...T, V];

type TuplifyUnion13967<T, L = LastOf13967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13967<TuplifyUnion13967<Exclude<T, L>>, L>;

type DeepPartial13967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13967<T[P]> }
  : T;

type Paths13967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13967<K, Paths13967<T[K], Prev13967[D]>> : never }[keyof T]
  : never;

type Prev13967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13967 {
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

type ConfigPaths13967 = Paths13967<NestedConfig13967>;

interface HeavyProps13967 {
  config: DeepPartial13967<NestedConfig13967>;
  path?: ConfigPaths13967;
}

const HeavyComponent13967 = memo(function HeavyComponent13967({ config }: HeavyProps13967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13967.displayName = 'HeavyComponent13967';
export default HeavyComponent13967;

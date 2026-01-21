'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13065<T> = T extends (infer U)[]
  ? DeepReadonlyArray13065<U>
  : T extends object
  ? DeepReadonlyObject13065<T>
  : T;

interface DeepReadonlyArray13065<T> extends ReadonlyArray<DeepReadonly13065<T>> {}

type DeepReadonlyObject13065<T> = {
  readonly [P in keyof T]: DeepReadonly13065<T[P]>;
};

type UnionToIntersection13065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13065<T> = UnionToIntersection13065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13065<T extends unknown[], V> = [...T, V];

type TuplifyUnion13065<T, L = LastOf13065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13065<TuplifyUnion13065<Exclude<T, L>>, L>;

type DeepPartial13065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13065<T[P]> }
  : T;

type Paths13065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13065<K, Paths13065<T[K], Prev13065[D]>> : never }[keyof T]
  : never;

type Prev13065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13065 {
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

type ConfigPaths13065 = Paths13065<NestedConfig13065>;

interface HeavyProps13065 {
  config: DeepPartial13065<NestedConfig13065>;
  path?: ConfigPaths13065;
}

const HeavyComponent13065 = memo(function HeavyComponent13065({ config }: HeavyProps13065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13065.displayName = 'HeavyComponent13065';
export default HeavyComponent13065;

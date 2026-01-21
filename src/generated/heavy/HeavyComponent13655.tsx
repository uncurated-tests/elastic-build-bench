'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13655<T> = T extends (infer U)[]
  ? DeepReadonlyArray13655<U>
  : T extends object
  ? DeepReadonlyObject13655<T>
  : T;

interface DeepReadonlyArray13655<T> extends ReadonlyArray<DeepReadonly13655<T>> {}

type DeepReadonlyObject13655<T> = {
  readonly [P in keyof T]: DeepReadonly13655<T[P]>;
};

type UnionToIntersection13655<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13655<T> = UnionToIntersection13655<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13655<T extends unknown[], V> = [...T, V];

type TuplifyUnion13655<T, L = LastOf13655<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13655<TuplifyUnion13655<Exclude<T, L>>, L>;

type DeepPartial13655<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13655<T[P]> }
  : T;

type Paths13655<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13655<K, Paths13655<T[K], Prev13655[D]>> : never }[keyof T]
  : never;

type Prev13655 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13655<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13655 {
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

type ConfigPaths13655 = Paths13655<NestedConfig13655>;

interface HeavyProps13655 {
  config: DeepPartial13655<NestedConfig13655>;
  path?: ConfigPaths13655;
}

const HeavyComponent13655 = memo(function HeavyComponent13655({ config }: HeavyProps13655) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13655) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13655 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13655: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13655.displayName = 'HeavyComponent13655';
export default HeavyComponent13655;

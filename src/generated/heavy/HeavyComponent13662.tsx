'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13662<T> = T extends (infer U)[]
  ? DeepReadonlyArray13662<U>
  : T extends object
  ? DeepReadonlyObject13662<T>
  : T;

interface DeepReadonlyArray13662<T> extends ReadonlyArray<DeepReadonly13662<T>> {}

type DeepReadonlyObject13662<T> = {
  readonly [P in keyof T]: DeepReadonly13662<T[P]>;
};

type UnionToIntersection13662<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13662<T> = UnionToIntersection13662<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13662<T extends unknown[], V> = [...T, V];

type TuplifyUnion13662<T, L = LastOf13662<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13662<TuplifyUnion13662<Exclude<T, L>>, L>;

type DeepPartial13662<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13662<T[P]> }
  : T;

type Paths13662<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13662<K, Paths13662<T[K], Prev13662[D]>> : never }[keyof T]
  : never;

type Prev13662 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13662<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13662 {
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

type ConfigPaths13662 = Paths13662<NestedConfig13662>;

interface HeavyProps13662 {
  config: DeepPartial13662<NestedConfig13662>;
  path?: ConfigPaths13662;
}

const HeavyComponent13662 = memo(function HeavyComponent13662({ config }: HeavyProps13662) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13662) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13662 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13662: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13662.displayName = 'HeavyComponent13662';
export default HeavyComponent13662;

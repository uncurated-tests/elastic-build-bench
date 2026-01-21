'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13390<T> = T extends (infer U)[]
  ? DeepReadonlyArray13390<U>
  : T extends object
  ? DeepReadonlyObject13390<T>
  : T;

interface DeepReadonlyArray13390<T> extends ReadonlyArray<DeepReadonly13390<T>> {}

type DeepReadonlyObject13390<T> = {
  readonly [P in keyof T]: DeepReadonly13390<T[P]>;
};

type UnionToIntersection13390<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13390<T> = UnionToIntersection13390<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13390<T extends unknown[], V> = [...T, V];

type TuplifyUnion13390<T, L = LastOf13390<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13390<TuplifyUnion13390<Exclude<T, L>>, L>;

type DeepPartial13390<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13390<T[P]> }
  : T;

type Paths13390<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13390<K, Paths13390<T[K], Prev13390[D]>> : never }[keyof T]
  : never;

type Prev13390 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13390<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13390 {
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

type ConfigPaths13390 = Paths13390<NestedConfig13390>;

interface HeavyProps13390 {
  config: DeepPartial13390<NestedConfig13390>;
  path?: ConfigPaths13390;
}

const HeavyComponent13390 = memo(function HeavyComponent13390({ config }: HeavyProps13390) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13390) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13390 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13390: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13390.displayName = 'HeavyComponent13390';
export default HeavyComponent13390;

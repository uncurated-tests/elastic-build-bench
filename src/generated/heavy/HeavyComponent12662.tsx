'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12662<T> = T extends (infer U)[]
  ? DeepReadonlyArray12662<U>
  : T extends object
  ? DeepReadonlyObject12662<T>
  : T;

interface DeepReadonlyArray12662<T> extends ReadonlyArray<DeepReadonly12662<T>> {}

type DeepReadonlyObject12662<T> = {
  readonly [P in keyof T]: DeepReadonly12662<T[P]>;
};

type UnionToIntersection12662<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12662<T> = UnionToIntersection12662<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12662<T extends unknown[], V> = [...T, V];

type TuplifyUnion12662<T, L = LastOf12662<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12662<TuplifyUnion12662<Exclude<T, L>>, L>;

type DeepPartial12662<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12662<T[P]> }
  : T;

type Paths12662<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12662<K, Paths12662<T[K], Prev12662[D]>> : never }[keyof T]
  : never;

type Prev12662 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12662<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12662 {
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

type ConfigPaths12662 = Paths12662<NestedConfig12662>;

interface HeavyProps12662 {
  config: DeepPartial12662<NestedConfig12662>;
  path?: ConfigPaths12662;
}

const HeavyComponent12662 = memo(function HeavyComponent12662({ config }: HeavyProps12662) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12662) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12662 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12662: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12662.displayName = 'HeavyComponent12662';
export default HeavyComponent12662;

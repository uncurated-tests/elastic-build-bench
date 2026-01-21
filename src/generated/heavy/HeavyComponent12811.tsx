'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12811<T> = T extends (infer U)[]
  ? DeepReadonlyArray12811<U>
  : T extends object
  ? DeepReadonlyObject12811<T>
  : T;

interface DeepReadonlyArray12811<T> extends ReadonlyArray<DeepReadonly12811<T>> {}

type DeepReadonlyObject12811<T> = {
  readonly [P in keyof T]: DeepReadonly12811<T[P]>;
};

type UnionToIntersection12811<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12811<T> = UnionToIntersection12811<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12811<T extends unknown[], V> = [...T, V];

type TuplifyUnion12811<T, L = LastOf12811<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12811<TuplifyUnion12811<Exclude<T, L>>, L>;

type DeepPartial12811<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12811<T[P]> }
  : T;

type Paths12811<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12811<K, Paths12811<T[K], Prev12811[D]>> : never }[keyof T]
  : never;

type Prev12811 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12811<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12811 {
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

type ConfigPaths12811 = Paths12811<NestedConfig12811>;

interface HeavyProps12811 {
  config: DeepPartial12811<NestedConfig12811>;
  path?: ConfigPaths12811;
}

const HeavyComponent12811 = memo(function HeavyComponent12811({ config }: HeavyProps12811) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12811) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12811 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12811: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12811.displayName = 'HeavyComponent12811';
export default HeavyComponent12811;

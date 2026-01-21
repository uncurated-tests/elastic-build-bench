'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12553<T> = T extends (infer U)[]
  ? DeepReadonlyArray12553<U>
  : T extends object
  ? DeepReadonlyObject12553<T>
  : T;

interface DeepReadonlyArray12553<T> extends ReadonlyArray<DeepReadonly12553<T>> {}

type DeepReadonlyObject12553<T> = {
  readonly [P in keyof T]: DeepReadonly12553<T[P]>;
};

type UnionToIntersection12553<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12553<T> = UnionToIntersection12553<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12553<T extends unknown[], V> = [...T, V];

type TuplifyUnion12553<T, L = LastOf12553<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12553<TuplifyUnion12553<Exclude<T, L>>, L>;

type DeepPartial12553<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12553<T[P]> }
  : T;

type Paths12553<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12553<K, Paths12553<T[K], Prev12553[D]>> : never }[keyof T]
  : never;

type Prev12553 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12553<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12553 {
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

type ConfigPaths12553 = Paths12553<NestedConfig12553>;

interface HeavyProps12553 {
  config: DeepPartial12553<NestedConfig12553>;
  path?: ConfigPaths12553;
}

const HeavyComponent12553 = memo(function HeavyComponent12553({ config }: HeavyProps12553) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12553) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12553 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12553: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12553.displayName = 'HeavyComponent12553';
export default HeavyComponent12553;

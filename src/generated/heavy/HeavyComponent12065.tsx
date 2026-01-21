'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12065<T> = T extends (infer U)[]
  ? DeepReadonlyArray12065<U>
  : T extends object
  ? DeepReadonlyObject12065<T>
  : T;

interface DeepReadonlyArray12065<T> extends ReadonlyArray<DeepReadonly12065<T>> {}

type DeepReadonlyObject12065<T> = {
  readonly [P in keyof T]: DeepReadonly12065<T[P]>;
};

type UnionToIntersection12065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12065<T> = UnionToIntersection12065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12065<T extends unknown[], V> = [...T, V];

type TuplifyUnion12065<T, L = LastOf12065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12065<TuplifyUnion12065<Exclude<T, L>>, L>;

type DeepPartial12065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12065<T[P]> }
  : T;

type Paths12065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12065<K, Paths12065<T[K], Prev12065[D]>> : never }[keyof T]
  : never;

type Prev12065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12065 {
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

type ConfigPaths12065 = Paths12065<NestedConfig12065>;

interface HeavyProps12065 {
  config: DeepPartial12065<NestedConfig12065>;
  path?: ConfigPaths12065;
}

const HeavyComponent12065 = memo(function HeavyComponent12065({ config }: HeavyProps12065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12065.displayName = 'HeavyComponent12065';
export default HeavyComponent12065;

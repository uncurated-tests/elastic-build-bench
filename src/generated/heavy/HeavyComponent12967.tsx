'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12967<T> = T extends (infer U)[]
  ? DeepReadonlyArray12967<U>
  : T extends object
  ? DeepReadonlyObject12967<T>
  : T;

interface DeepReadonlyArray12967<T> extends ReadonlyArray<DeepReadonly12967<T>> {}

type DeepReadonlyObject12967<T> = {
  readonly [P in keyof T]: DeepReadonly12967<T[P]>;
};

type UnionToIntersection12967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12967<T> = UnionToIntersection12967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12967<T extends unknown[], V> = [...T, V];

type TuplifyUnion12967<T, L = LastOf12967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12967<TuplifyUnion12967<Exclude<T, L>>, L>;

type DeepPartial12967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12967<T[P]> }
  : T;

type Paths12967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12967<K, Paths12967<T[K], Prev12967[D]>> : never }[keyof T]
  : never;

type Prev12967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12967 {
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

type ConfigPaths12967 = Paths12967<NestedConfig12967>;

interface HeavyProps12967 {
  config: DeepPartial12967<NestedConfig12967>;
  path?: ConfigPaths12967;
}

const HeavyComponent12967 = memo(function HeavyComponent12967({ config }: HeavyProps12967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12967.displayName = 'HeavyComponent12967';
export default HeavyComponent12967;

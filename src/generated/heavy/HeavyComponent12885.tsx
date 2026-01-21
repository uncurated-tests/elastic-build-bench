'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12885<T> = T extends (infer U)[]
  ? DeepReadonlyArray12885<U>
  : T extends object
  ? DeepReadonlyObject12885<T>
  : T;

interface DeepReadonlyArray12885<T> extends ReadonlyArray<DeepReadonly12885<T>> {}

type DeepReadonlyObject12885<T> = {
  readonly [P in keyof T]: DeepReadonly12885<T[P]>;
};

type UnionToIntersection12885<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12885<T> = UnionToIntersection12885<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12885<T extends unknown[], V> = [...T, V];

type TuplifyUnion12885<T, L = LastOf12885<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12885<TuplifyUnion12885<Exclude<T, L>>, L>;

type DeepPartial12885<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12885<T[P]> }
  : T;

type Paths12885<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12885<K, Paths12885<T[K], Prev12885[D]>> : never }[keyof T]
  : never;

type Prev12885 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12885<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12885 {
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

type ConfigPaths12885 = Paths12885<NestedConfig12885>;

interface HeavyProps12885 {
  config: DeepPartial12885<NestedConfig12885>;
  path?: ConfigPaths12885;
}

const HeavyComponent12885 = memo(function HeavyComponent12885({ config }: HeavyProps12885) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12885) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12885 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12885: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12885.displayName = 'HeavyComponent12885';
export default HeavyComponent12885;

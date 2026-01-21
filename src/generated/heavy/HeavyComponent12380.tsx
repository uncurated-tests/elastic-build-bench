'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12380<T> = T extends (infer U)[]
  ? DeepReadonlyArray12380<U>
  : T extends object
  ? DeepReadonlyObject12380<T>
  : T;

interface DeepReadonlyArray12380<T> extends ReadonlyArray<DeepReadonly12380<T>> {}

type DeepReadonlyObject12380<T> = {
  readonly [P in keyof T]: DeepReadonly12380<T[P]>;
};

type UnionToIntersection12380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12380<T> = UnionToIntersection12380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12380<T extends unknown[], V> = [...T, V];

type TuplifyUnion12380<T, L = LastOf12380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12380<TuplifyUnion12380<Exclude<T, L>>, L>;

type DeepPartial12380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12380<T[P]> }
  : T;

type Paths12380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12380<K, Paths12380<T[K], Prev12380[D]>> : never }[keyof T]
  : never;

type Prev12380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12380 {
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

type ConfigPaths12380 = Paths12380<NestedConfig12380>;

interface HeavyProps12380 {
  config: DeepPartial12380<NestedConfig12380>;
  path?: ConfigPaths12380;
}

const HeavyComponent12380 = memo(function HeavyComponent12380({ config }: HeavyProps12380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12380.displayName = 'HeavyComponent12380';
export default HeavyComponent12380;

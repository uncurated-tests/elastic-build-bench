'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12870<T> = T extends (infer U)[]
  ? DeepReadonlyArray12870<U>
  : T extends object
  ? DeepReadonlyObject12870<T>
  : T;

interface DeepReadonlyArray12870<T> extends ReadonlyArray<DeepReadonly12870<T>> {}

type DeepReadonlyObject12870<T> = {
  readonly [P in keyof T]: DeepReadonly12870<T[P]>;
};

type UnionToIntersection12870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12870<T> = UnionToIntersection12870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12870<T extends unknown[], V> = [...T, V];

type TuplifyUnion12870<T, L = LastOf12870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12870<TuplifyUnion12870<Exclude<T, L>>, L>;

type DeepPartial12870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12870<T[P]> }
  : T;

type Paths12870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12870<K, Paths12870<T[K], Prev12870[D]>> : never }[keyof T]
  : never;

type Prev12870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12870 {
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

type ConfigPaths12870 = Paths12870<NestedConfig12870>;

interface HeavyProps12870 {
  config: DeepPartial12870<NestedConfig12870>;
  path?: ConfigPaths12870;
}

const HeavyComponent12870 = memo(function HeavyComponent12870({ config }: HeavyProps12870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12870.displayName = 'HeavyComponent12870';
export default HeavyComponent12870;

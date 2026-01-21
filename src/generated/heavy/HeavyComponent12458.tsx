'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12458<T> = T extends (infer U)[]
  ? DeepReadonlyArray12458<U>
  : T extends object
  ? DeepReadonlyObject12458<T>
  : T;

interface DeepReadonlyArray12458<T> extends ReadonlyArray<DeepReadonly12458<T>> {}

type DeepReadonlyObject12458<T> = {
  readonly [P in keyof T]: DeepReadonly12458<T[P]>;
};

type UnionToIntersection12458<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12458<T> = UnionToIntersection12458<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12458<T extends unknown[], V> = [...T, V];

type TuplifyUnion12458<T, L = LastOf12458<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12458<TuplifyUnion12458<Exclude<T, L>>, L>;

type DeepPartial12458<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12458<T[P]> }
  : T;

type Paths12458<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12458<K, Paths12458<T[K], Prev12458[D]>> : never }[keyof T]
  : never;

type Prev12458 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12458<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12458 {
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

type ConfigPaths12458 = Paths12458<NestedConfig12458>;

interface HeavyProps12458 {
  config: DeepPartial12458<NestedConfig12458>;
  path?: ConfigPaths12458;
}

const HeavyComponent12458 = memo(function HeavyComponent12458({ config }: HeavyProps12458) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12458) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12458 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12458: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12458.displayName = 'HeavyComponent12458';
export default HeavyComponent12458;

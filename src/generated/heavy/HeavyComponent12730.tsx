'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12730<T> = T extends (infer U)[]
  ? DeepReadonlyArray12730<U>
  : T extends object
  ? DeepReadonlyObject12730<T>
  : T;

interface DeepReadonlyArray12730<T> extends ReadonlyArray<DeepReadonly12730<T>> {}

type DeepReadonlyObject12730<T> = {
  readonly [P in keyof T]: DeepReadonly12730<T[P]>;
};

type UnionToIntersection12730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12730<T> = UnionToIntersection12730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12730<T extends unknown[], V> = [...T, V];

type TuplifyUnion12730<T, L = LastOf12730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12730<TuplifyUnion12730<Exclude<T, L>>, L>;

type DeepPartial12730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12730<T[P]> }
  : T;

type Paths12730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12730<K, Paths12730<T[K], Prev12730[D]>> : never }[keyof T]
  : never;

type Prev12730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12730 {
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

type ConfigPaths12730 = Paths12730<NestedConfig12730>;

interface HeavyProps12730 {
  config: DeepPartial12730<NestedConfig12730>;
  path?: ConfigPaths12730;
}

const HeavyComponent12730 = memo(function HeavyComponent12730({ config }: HeavyProps12730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12730.displayName = 'HeavyComponent12730';
export default HeavyComponent12730;

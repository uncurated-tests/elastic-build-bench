'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12746<T> = T extends (infer U)[]
  ? DeepReadonlyArray12746<U>
  : T extends object
  ? DeepReadonlyObject12746<T>
  : T;

interface DeepReadonlyArray12746<T> extends ReadonlyArray<DeepReadonly12746<T>> {}

type DeepReadonlyObject12746<T> = {
  readonly [P in keyof T]: DeepReadonly12746<T[P]>;
};

type UnionToIntersection12746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12746<T> = UnionToIntersection12746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12746<T extends unknown[], V> = [...T, V];

type TuplifyUnion12746<T, L = LastOf12746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12746<TuplifyUnion12746<Exclude<T, L>>, L>;

type DeepPartial12746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12746<T[P]> }
  : T;

type Paths12746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12746<K, Paths12746<T[K], Prev12746[D]>> : never }[keyof T]
  : never;

type Prev12746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12746 {
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

type ConfigPaths12746 = Paths12746<NestedConfig12746>;

interface HeavyProps12746 {
  config: DeepPartial12746<NestedConfig12746>;
  path?: ConfigPaths12746;
}

const HeavyComponent12746 = memo(function HeavyComponent12746({ config }: HeavyProps12746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12746.displayName = 'HeavyComponent12746';
export default HeavyComponent12746;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12379<T> = T extends (infer U)[]
  ? DeepReadonlyArray12379<U>
  : T extends object
  ? DeepReadonlyObject12379<T>
  : T;

interface DeepReadonlyArray12379<T> extends ReadonlyArray<DeepReadonly12379<T>> {}

type DeepReadonlyObject12379<T> = {
  readonly [P in keyof T]: DeepReadonly12379<T[P]>;
};

type UnionToIntersection12379<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12379<T> = UnionToIntersection12379<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12379<T extends unknown[], V> = [...T, V];

type TuplifyUnion12379<T, L = LastOf12379<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12379<TuplifyUnion12379<Exclude<T, L>>, L>;

type DeepPartial12379<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12379<T[P]> }
  : T;

type Paths12379<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12379<K, Paths12379<T[K], Prev12379[D]>> : never }[keyof T]
  : never;

type Prev12379 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12379<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12379 {
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

type ConfigPaths12379 = Paths12379<NestedConfig12379>;

interface HeavyProps12379 {
  config: DeepPartial12379<NestedConfig12379>;
  path?: ConfigPaths12379;
}

const HeavyComponent12379 = memo(function HeavyComponent12379({ config }: HeavyProps12379) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12379) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12379 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12379: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12379.displayName = 'HeavyComponent12379';
export default HeavyComponent12379;

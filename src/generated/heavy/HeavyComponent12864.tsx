'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12864<T> = T extends (infer U)[]
  ? DeepReadonlyArray12864<U>
  : T extends object
  ? DeepReadonlyObject12864<T>
  : T;

interface DeepReadonlyArray12864<T> extends ReadonlyArray<DeepReadonly12864<T>> {}

type DeepReadonlyObject12864<T> = {
  readonly [P in keyof T]: DeepReadonly12864<T[P]>;
};

type UnionToIntersection12864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12864<T> = UnionToIntersection12864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12864<T extends unknown[], V> = [...T, V];

type TuplifyUnion12864<T, L = LastOf12864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12864<TuplifyUnion12864<Exclude<T, L>>, L>;

type DeepPartial12864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12864<T[P]> }
  : T;

type Paths12864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12864<K, Paths12864<T[K], Prev12864[D]>> : never }[keyof T]
  : never;

type Prev12864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12864 {
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

type ConfigPaths12864 = Paths12864<NestedConfig12864>;

interface HeavyProps12864 {
  config: DeepPartial12864<NestedConfig12864>;
  path?: ConfigPaths12864;
}

const HeavyComponent12864 = memo(function HeavyComponent12864({ config }: HeavyProps12864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12864.displayName = 'HeavyComponent12864';
export default HeavyComponent12864;

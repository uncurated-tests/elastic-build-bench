'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12358<T> = T extends (infer U)[]
  ? DeepReadonlyArray12358<U>
  : T extends object
  ? DeepReadonlyObject12358<T>
  : T;

interface DeepReadonlyArray12358<T> extends ReadonlyArray<DeepReadonly12358<T>> {}

type DeepReadonlyObject12358<T> = {
  readonly [P in keyof T]: DeepReadonly12358<T[P]>;
};

type UnionToIntersection12358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12358<T> = UnionToIntersection12358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12358<T extends unknown[], V> = [...T, V];

type TuplifyUnion12358<T, L = LastOf12358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12358<TuplifyUnion12358<Exclude<T, L>>, L>;

type DeepPartial12358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12358<T[P]> }
  : T;

type Paths12358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12358<K, Paths12358<T[K], Prev12358[D]>> : never }[keyof T]
  : never;

type Prev12358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12358 {
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

type ConfigPaths12358 = Paths12358<NestedConfig12358>;

interface HeavyProps12358 {
  config: DeepPartial12358<NestedConfig12358>;
  path?: ConfigPaths12358;
}

const HeavyComponent12358 = memo(function HeavyComponent12358({ config }: HeavyProps12358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12358.displayName = 'HeavyComponent12358';
export default HeavyComponent12358;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12701<T> = T extends (infer U)[]
  ? DeepReadonlyArray12701<U>
  : T extends object
  ? DeepReadonlyObject12701<T>
  : T;

interface DeepReadonlyArray12701<T> extends ReadonlyArray<DeepReadonly12701<T>> {}

type DeepReadonlyObject12701<T> = {
  readonly [P in keyof T]: DeepReadonly12701<T[P]>;
};

type UnionToIntersection12701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12701<T> = UnionToIntersection12701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12701<T extends unknown[], V> = [...T, V];

type TuplifyUnion12701<T, L = LastOf12701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12701<TuplifyUnion12701<Exclude<T, L>>, L>;

type DeepPartial12701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12701<T[P]> }
  : T;

type Paths12701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12701<K, Paths12701<T[K], Prev12701[D]>> : never }[keyof T]
  : never;

type Prev12701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12701 {
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

type ConfigPaths12701 = Paths12701<NestedConfig12701>;

interface HeavyProps12701 {
  config: DeepPartial12701<NestedConfig12701>;
  path?: ConfigPaths12701;
}

const HeavyComponent12701 = memo(function HeavyComponent12701({ config }: HeavyProps12701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12701.displayName = 'HeavyComponent12701';
export default HeavyComponent12701;

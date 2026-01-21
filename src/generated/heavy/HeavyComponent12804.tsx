'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12804<T> = T extends (infer U)[]
  ? DeepReadonlyArray12804<U>
  : T extends object
  ? DeepReadonlyObject12804<T>
  : T;

interface DeepReadonlyArray12804<T> extends ReadonlyArray<DeepReadonly12804<T>> {}

type DeepReadonlyObject12804<T> = {
  readonly [P in keyof T]: DeepReadonly12804<T[P]>;
};

type UnionToIntersection12804<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12804<T> = UnionToIntersection12804<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12804<T extends unknown[], V> = [...T, V];

type TuplifyUnion12804<T, L = LastOf12804<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12804<TuplifyUnion12804<Exclude<T, L>>, L>;

type DeepPartial12804<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12804<T[P]> }
  : T;

type Paths12804<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12804<K, Paths12804<T[K], Prev12804[D]>> : never }[keyof T]
  : never;

type Prev12804 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12804<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12804 {
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

type ConfigPaths12804 = Paths12804<NestedConfig12804>;

interface HeavyProps12804 {
  config: DeepPartial12804<NestedConfig12804>;
  path?: ConfigPaths12804;
}

const HeavyComponent12804 = memo(function HeavyComponent12804({ config }: HeavyProps12804) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12804) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12804 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12804: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12804.displayName = 'HeavyComponent12804';
export default HeavyComponent12804;

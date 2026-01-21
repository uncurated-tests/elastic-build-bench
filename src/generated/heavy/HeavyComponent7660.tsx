'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7660<T> = T extends (infer U)[]
  ? DeepReadonlyArray7660<U>
  : T extends object
  ? DeepReadonlyObject7660<T>
  : T;

interface DeepReadonlyArray7660<T> extends ReadonlyArray<DeepReadonly7660<T>> {}

type DeepReadonlyObject7660<T> = {
  readonly [P in keyof T]: DeepReadonly7660<T[P]>;
};

type UnionToIntersection7660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7660<T> = UnionToIntersection7660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7660<T extends unknown[], V> = [...T, V];

type TuplifyUnion7660<T, L = LastOf7660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7660<TuplifyUnion7660<Exclude<T, L>>, L>;

type DeepPartial7660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7660<T[P]> }
  : T;

type Paths7660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7660<K, Paths7660<T[K], Prev7660[D]>> : never }[keyof T]
  : never;

type Prev7660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7660 {
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

type ConfigPaths7660 = Paths7660<NestedConfig7660>;

interface HeavyProps7660 {
  config: DeepPartial7660<NestedConfig7660>;
  path?: ConfigPaths7660;
}

const HeavyComponent7660 = memo(function HeavyComponent7660({ config }: HeavyProps7660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7660.displayName = 'HeavyComponent7660';
export default HeavyComponent7660;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7870<T> = T extends (infer U)[]
  ? DeepReadonlyArray7870<U>
  : T extends object
  ? DeepReadonlyObject7870<T>
  : T;

interface DeepReadonlyArray7870<T> extends ReadonlyArray<DeepReadonly7870<T>> {}

type DeepReadonlyObject7870<T> = {
  readonly [P in keyof T]: DeepReadonly7870<T[P]>;
};

type UnionToIntersection7870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7870<T> = UnionToIntersection7870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7870<T extends unknown[], V> = [...T, V];

type TuplifyUnion7870<T, L = LastOf7870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7870<TuplifyUnion7870<Exclude<T, L>>, L>;

type DeepPartial7870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7870<T[P]> }
  : T;

type Paths7870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7870<K, Paths7870<T[K], Prev7870[D]>> : never }[keyof T]
  : never;

type Prev7870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7870 {
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

type ConfigPaths7870 = Paths7870<NestedConfig7870>;

interface HeavyProps7870 {
  config: DeepPartial7870<NestedConfig7870>;
  path?: ConfigPaths7870;
}

const HeavyComponent7870 = memo(function HeavyComponent7870({ config }: HeavyProps7870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7870.displayName = 'HeavyComponent7870';
export default HeavyComponent7870;

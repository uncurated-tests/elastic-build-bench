'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7811<T> = T extends (infer U)[]
  ? DeepReadonlyArray7811<U>
  : T extends object
  ? DeepReadonlyObject7811<T>
  : T;

interface DeepReadonlyArray7811<T> extends ReadonlyArray<DeepReadonly7811<T>> {}

type DeepReadonlyObject7811<T> = {
  readonly [P in keyof T]: DeepReadonly7811<T[P]>;
};

type UnionToIntersection7811<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7811<T> = UnionToIntersection7811<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7811<T extends unknown[], V> = [...T, V];

type TuplifyUnion7811<T, L = LastOf7811<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7811<TuplifyUnion7811<Exclude<T, L>>, L>;

type DeepPartial7811<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7811<T[P]> }
  : T;

type Paths7811<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7811<K, Paths7811<T[K], Prev7811[D]>> : never }[keyof T]
  : never;

type Prev7811 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7811<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7811 {
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

type ConfigPaths7811 = Paths7811<NestedConfig7811>;

interface HeavyProps7811 {
  config: DeepPartial7811<NestedConfig7811>;
  path?: ConfigPaths7811;
}

const HeavyComponent7811 = memo(function HeavyComponent7811({ config }: HeavyProps7811) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7811) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7811 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7811: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7811.displayName = 'HeavyComponent7811';
export default HeavyComponent7811;

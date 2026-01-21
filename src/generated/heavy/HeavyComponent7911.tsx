'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7911<T> = T extends (infer U)[]
  ? DeepReadonlyArray7911<U>
  : T extends object
  ? DeepReadonlyObject7911<T>
  : T;

interface DeepReadonlyArray7911<T> extends ReadonlyArray<DeepReadonly7911<T>> {}

type DeepReadonlyObject7911<T> = {
  readonly [P in keyof T]: DeepReadonly7911<T[P]>;
};

type UnionToIntersection7911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7911<T> = UnionToIntersection7911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7911<T extends unknown[], V> = [...T, V];

type TuplifyUnion7911<T, L = LastOf7911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7911<TuplifyUnion7911<Exclude<T, L>>, L>;

type DeepPartial7911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7911<T[P]> }
  : T;

type Paths7911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7911<K, Paths7911<T[K], Prev7911[D]>> : never }[keyof T]
  : never;

type Prev7911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7911 {
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

type ConfigPaths7911 = Paths7911<NestedConfig7911>;

interface HeavyProps7911 {
  config: DeepPartial7911<NestedConfig7911>;
  path?: ConfigPaths7911;
}

const HeavyComponent7911 = memo(function HeavyComponent7911({ config }: HeavyProps7911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7911.displayName = 'HeavyComponent7911';
export default HeavyComponent7911;

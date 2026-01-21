'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7972<T> = T extends (infer U)[]
  ? DeepReadonlyArray7972<U>
  : T extends object
  ? DeepReadonlyObject7972<T>
  : T;

interface DeepReadonlyArray7972<T> extends ReadonlyArray<DeepReadonly7972<T>> {}

type DeepReadonlyObject7972<T> = {
  readonly [P in keyof T]: DeepReadonly7972<T[P]>;
};

type UnionToIntersection7972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7972<T> = UnionToIntersection7972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7972<T extends unknown[], V> = [...T, V];

type TuplifyUnion7972<T, L = LastOf7972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7972<TuplifyUnion7972<Exclude<T, L>>, L>;

type DeepPartial7972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7972<T[P]> }
  : T;

type Paths7972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7972<K, Paths7972<T[K], Prev7972[D]>> : never }[keyof T]
  : never;

type Prev7972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7972 {
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

type ConfigPaths7972 = Paths7972<NestedConfig7972>;

interface HeavyProps7972 {
  config: DeepPartial7972<NestedConfig7972>;
  path?: ConfigPaths7972;
}

const HeavyComponent7972 = memo(function HeavyComponent7972({ config }: HeavyProps7972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7972.displayName = 'HeavyComponent7972';
export default HeavyComponent7972;

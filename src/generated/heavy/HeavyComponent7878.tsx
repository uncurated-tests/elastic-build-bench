'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7878<T> = T extends (infer U)[]
  ? DeepReadonlyArray7878<U>
  : T extends object
  ? DeepReadonlyObject7878<T>
  : T;

interface DeepReadonlyArray7878<T> extends ReadonlyArray<DeepReadonly7878<T>> {}

type DeepReadonlyObject7878<T> = {
  readonly [P in keyof T]: DeepReadonly7878<T[P]>;
};

type UnionToIntersection7878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7878<T> = UnionToIntersection7878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7878<T extends unknown[], V> = [...T, V];

type TuplifyUnion7878<T, L = LastOf7878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7878<TuplifyUnion7878<Exclude<T, L>>, L>;

type DeepPartial7878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7878<T[P]> }
  : T;

type Paths7878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7878<K, Paths7878<T[K], Prev7878[D]>> : never }[keyof T]
  : never;

type Prev7878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7878 {
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

type ConfigPaths7878 = Paths7878<NestedConfig7878>;

interface HeavyProps7878 {
  config: DeepPartial7878<NestedConfig7878>;
  path?: ConfigPaths7878;
}

const HeavyComponent7878 = memo(function HeavyComponent7878({ config }: HeavyProps7878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7878.displayName = 'HeavyComponent7878';
export default HeavyComponent7878;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7526<T> = T extends (infer U)[]
  ? DeepReadonlyArray7526<U>
  : T extends object
  ? DeepReadonlyObject7526<T>
  : T;

interface DeepReadonlyArray7526<T> extends ReadonlyArray<DeepReadonly7526<T>> {}

type DeepReadonlyObject7526<T> = {
  readonly [P in keyof T]: DeepReadonly7526<T[P]>;
};

type UnionToIntersection7526<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7526<T> = UnionToIntersection7526<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7526<T extends unknown[], V> = [...T, V];

type TuplifyUnion7526<T, L = LastOf7526<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7526<TuplifyUnion7526<Exclude<T, L>>, L>;

type DeepPartial7526<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7526<T[P]> }
  : T;

type Paths7526<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7526<K, Paths7526<T[K], Prev7526[D]>> : never }[keyof T]
  : never;

type Prev7526 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7526<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7526 {
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

type ConfigPaths7526 = Paths7526<NestedConfig7526>;

interface HeavyProps7526 {
  config: DeepPartial7526<NestedConfig7526>;
  path?: ConfigPaths7526;
}

const HeavyComponent7526 = memo(function HeavyComponent7526({ config }: HeavyProps7526) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7526) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7526 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7526: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7526.displayName = 'HeavyComponent7526';
export default HeavyComponent7526;

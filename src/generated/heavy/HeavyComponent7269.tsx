'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7269<T> = T extends (infer U)[]
  ? DeepReadonlyArray7269<U>
  : T extends object
  ? DeepReadonlyObject7269<T>
  : T;

interface DeepReadonlyArray7269<T> extends ReadonlyArray<DeepReadonly7269<T>> {}

type DeepReadonlyObject7269<T> = {
  readonly [P in keyof T]: DeepReadonly7269<T[P]>;
};

type UnionToIntersection7269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7269<T> = UnionToIntersection7269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7269<T extends unknown[], V> = [...T, V];

type TuplifyUnion7269<T, L = LastOf7269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7269<TuplifyUnion7269<Exclude<T, L>>, L>;

type DeepPartial7269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7269<T[P]> }
  : T;

type Paths7269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7269<K, Paths7269<T[K], Prev7269[D]>> : never }[keyof T]
  : never;

type Prev7269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7269 {
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

type ConfigPaths7269 = Paths7269<NestedConfig7269>;

interface HeavyProps7269 {
  config: DeepPartial7269<NestedConfig7269>;
  path?: ConfigPaths7269;
}

const HeavyComponent7269 = memo(function HeavyComponent7269({ config }: HeavyProps7269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7269.displayName = 'HeavyComponent7269';
export default HeavyComponent7269;

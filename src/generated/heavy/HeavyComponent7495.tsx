'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7495<T> = T extends (infer U)[]
  ? DeepReadonlyArray7495<U>
  : T extends object
  ? DeepReadonlyObject7495<T>
  : T;

interface DeepReadonlyArray7495<T> extends ReadonlyArray<DeepReadonly7495<T>> {}

type DeepReadonlyObject7495<T> = {
  readonly [P in keyof T]: DeepReadonly7495<T[P]>;
};

type UnionToIntersection7495<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7495<T> = UnionToIntersection7495<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7495<T extends unknown[], V> = [...T, V];

type TuplifyUnion7495<T, L = LastOf7495<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7495<TuplifyUnion7495<Exclude<T, L>>, L>;

type DeepPartial7495<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7495<T[P]> }
  : T;

type Paths7495<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7495<K, Paths7495<T[K], Prev7495[D]>> : never }[keyof T]
  : never;

type Prev7495 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7495<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7495 {
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

type ConfigPaths7495 = Paths7495<NestedConfig7495>;

interface HeavyProps7495 {
  config: DeepPartial7495<NestedConfig7495>;
  path?: ConfigPaths7495;
}

const HeavyComponent7495 = memo(function HeavyComponent7495({ config }: HeavyProps7495) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7495) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7495 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7495: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7495.displayName = 'HeavyComponent7495';
export default HeavyComponent7495;

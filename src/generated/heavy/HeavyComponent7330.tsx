'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7330<T> = T extends (infer U)[]
  ? DeepReadonlyArray7330<U>
  : T extends object
  ? DeepReadonlyObject7330<T>
  : T;

interface DeepReadonlyArray7330<T> extends ReadonlyArray<DeepReadonly7330<T>> {}

type DeepReadonlyObject7330<T> = {
  readonly [P in keyof T]: DeepReadonly7330<T[P]>;
};

type UnionToIntersection7330<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7330<T> = UnionToIntersection7330<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7330<T extends unknown[], V> = [...T, V];

type TuplifyUnion7330<T, L = LastOf7330<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7330<TuplifyUnion7330<Exclude<T, L>>, L>;

type DeepPartial7330<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7330<T[P]> }
  : T;

type Paths7330<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7330<K, Paths7330<T[K], Prev7330[D]>> : never }[keyof T]
  : never;

type Prev7330 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7330<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7330 {
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

type ConfigPaths7330 = Paths7330<NestedConfig7330>;

interface HeavyProps7330 {
  config: DeepPartial7330<NestedConfig7330>;
  path?: ConfigPaths7330;
}

const HeavyComponent7330 = memo(function HeavyComponent7330({ config }: HeavyProps7330) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7330) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7330 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7330: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7330.displayName = 'HeavyComponent7330';
export default HeavyComponent7330;

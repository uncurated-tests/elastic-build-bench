'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7864<T> = T extends (infer U)[]
  ? DeepReadonlyArray7864<U>
  : T extends object
  ? DeepReadonlyObject7864<T>
  : T;

interface DeepReadonlyArray7864<T> extends ReadonlyArray<DeepReadonly7864<T>> {}

type DeepReadonlyObject7864<T> = {
  readonly [P in keyof T]: DeepReadonly7864<T[P]>;
};

type UnionToIntersection7864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7864<T> = UnionToIntersection7864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7864<T extends unknown[], V> = [...T, V];

type TuplifyUnion7864<T, L = LastOf7864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7864<TuplifyUnion7864<Exclude<T, L>>, L>;

type DeepPartial7864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7864<T[P]> }
  : T;

type Paths7864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7864<K, Paths7864<T[K], Prev7864[D]>> : never }[keyof T]
  : never;

type Prev7864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7864 {
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

type ConfigPaths7864 = Paths7864<NestedConfig7864>;

interface HeavyProps7864 {
  config: DeepPartial7864<NestedConfig7864>;
  path?: ConfigPaths7864;
}

const HeavyComponent7864 = memo(function HeavyComponent7864({ config }: HeavyProps7864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7864.displayName = 'HeavyComponent7864';
export default HeavyComponent7864;

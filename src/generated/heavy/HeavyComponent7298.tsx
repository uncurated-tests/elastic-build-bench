'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7298<T> = T extends (infer U)[]
  ? DeepReadonlyArray7298<U>
  : T extends object
  ? DeepReadonlyObject7298<T>
  : T;

interface DeepReadonlyArray7298<T> extends ReadonlyArray<DeepReadonly7298<T>> {}

type DeepReadonlyObject7298<T> = {
  readonly [P in keyof T]: DeepReadonly7298<T[P]>;
};

type UnionToIntersection7298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7298<T> = UnionToIntersection7298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7298<T extends unknown[], V> = [...T, V];

type TuplifyUnion7298<T, L = LastOf7298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7298<TuplifyUnion7298<Exclude<T, L>>, L>;

type DeepPartial7298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7298<T[P]> }
  : T;

type Paths7298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7298<K, Paths7298<T[K], Prev7298[D]>> : never }[keyof T]
  : never;

type Prev7298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7298 {
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

type ConfigPaths7298 = Paths7298<NestedConfig7298>;

interface HeavyProps7298 {
  config: DeepPartial7298<NestedConfig7298>;
  path?: ConfigPaths7298;
}

const HeavyComponent7298 = memo(function HeavyComponent7298({ config }: HeavyProps7298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7298.displayName = 'HeavyComponent7298';
export default HeavyComponent7298;

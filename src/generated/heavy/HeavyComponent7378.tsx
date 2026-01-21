'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7378<T> = T extends (infer U)[]
  ? DeepReadonlyArray7378<U>
  : T extends object
  ? DeepReadonlyObject7378<T>
  : T;

interface DeepReadonlyArray7378<T> extends ReadonlyArray<DeepReadonly7378<T>> {}

type DeepReadonlyObject7378<T> = {
  readonly [P in keyof T]: DeepReadonly7378<T[P]>;
};

type UnionToIntersection7378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7378<T> = UnionToIntersection7378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7378<T extends unknown[], V> = [...T, V];

type TuplifyUnion7378<T, L = LastOf7378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7378<TuplifyUnion7378<Exclude<T, L>>, L>;

type DeepPartial7378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7378<T[P]> }
  : T;

type Paths7378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7378<K, Paths7378<T[K], Prev7378[D]>> : never }[keyof T]
  : never;

type Prev7378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7378 {
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

type ConfigPaths7378 = Paths7378<NestedConfig7378>;

interface HeavyProps7378 {
  config: DeepPartial7378<NestedConfig7378>;
  path?: ConfigPaths7378;
}

const HeavyComponent7378 = memo(function HeavyComponent7378({ config }: HeavyProps7378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7378.displayName = 'HeavyComponent7378';
export default HeavyComponent7378;

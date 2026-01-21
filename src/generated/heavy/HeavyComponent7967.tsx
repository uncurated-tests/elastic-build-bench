'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7967<T> = T extends (infer U)[]
  ? DeepReadonlyArray7967<U>
  : T extends object
  ? DeepReadonlyObject7967<T>
  : T;

interface DeepReadonlyArray7967<T> extends ReadonlyArray<DeepReadonly7967<T>> {}

type DeepReadonlyObject7967<T> = {
  readonly [P in keyof T]: DeepReadonly7967<T[P]>;
};

type UnionToIntersection7967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7967<T> = UnionToIntersection7967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7967<T extends unknown[], V> = [...T, V];

type TuplifyUnion7967<T, L = LastOf7967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7967<TuplifyUnion7967<Exclude<T, L>>, L>;

type DeepPartial7967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7967<T[P]> }
  : T;

type Paths7967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7967<K, Paths7967<T[K], Prev7967[D]>> : never }[keyof T]
  : never;

type Prev7967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7967 {
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

type ConfigPaths7967 = Paths7967<NestedConfig7967>;

interface HeavyProps7967 {
  config: DeepPartial7967<NestedConfig7967>;
  path?: ConfigPaths7967;
}

const HeavyComponent7967 = memo(function HeavyComponent7967({ config }: HeavyProps7967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7967.displayName = 'HeavyComponent7967';
export default HeavyComponent7967;

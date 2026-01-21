'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7147<T> = T extends (infer U)[]
  ? DeepReadonlyArray7147<U>
  : T extends object
  ? DeepReadonlyObject7147<T>
  : T;

interface DeepReadonlyArray7147<T> extends ReadonlyArray<DeepReadonly7147<T>> {}

type DeepReadonlyObject7147<T> = {
  readonly [P in keyof T]: DeepReadonly7147<T[P]>;
};

type UnionToIntersection7147<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7147<T> = UnionToIntersection7147<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7147<T extends unknown[], V> = [...T, V];

type TuplifyUnion7147<T, L = LastOf7147<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7147<TuplifyUnion7147<Exclude<T, L>>, L>;

type DeepPartial7147<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7147<T[P]> }
  : T;

type Paths7147<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7147<K, Paths7147<T[K], Prev7147[D]>> : never }[keyof T]
  : never;

type Prev7147 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7147<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7147 {
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

type ConfigPaths7147 = Paths7147<NestedConfig7147>;

interface HeavyProps7147 {
  config: DeepPartial7147<NestedConfig7147>;
  path?: ConfigPaths7147;
}

const HeavyComponent7147 = memo(function HeavyComponent7147({ config }: HeavyProps7147) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7147) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7147 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7147: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7147.displayName = 'HeavyComponent7147';
export default HeavyComponent7147;

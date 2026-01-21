'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7977<T> = T extends (infer U)[]
  ? DeepReadonlyArray7977<U>
  : T extends object
  ? DeepReadonlyObject7977<T>
  : T;

interface DeepReadonlyArray7977<T> extends ReadonlyArray<DeepReadonly7977<T>> {}

type DeepReadonlyObject7977<T> = {
  readonly [P in keyof T]: DeepReadonly7977<T[P]>;
};

type UnionToIntersection7977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7977<T> = UnionToIntersection7977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7977<T extends unknown[], V> = [...T, V];

type TuplifyUnion7977<T, L = LastOf7977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7977<TuplifyUnion7977<Exclude<T, L>>, L>;

type DeepPartial7977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7977<T[P]> }
  : T;

type Paths7977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7977<K, Paths7977<T[K], Prev7977[D]>> : never }[keyof T]
  : never;

type Prev7977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7977 {
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

type ConfigPaths7977 = Paths7977<NestedConfig7977>;

interface HeavyProps7977 {
  config: DeepPartial7977<NestedConfig7977>;
  path?: ConfigPaths7977;
}

const HeavyComponent7977 = memo(function HeavyComponent7977({ config }: HeavyProps7977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7977.displayName = 'HeavyComponent7977';
export default HeavyComponent7977;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7122<T> = T extends (infer U)[]
  ? DeepReadonlyArray7122<U>
  : T extends object
  ? DeepReadonlyObject7122<T>
  : T;

interface DeepReadonlyArray7122<T> extends ReadonlyArray<DeepReadonly7122<T>> {}

type DeepReadonlyObject7122<T> = {
  readonly [P in keyof T]: DeepReadonly7122<T[P]>;
};

type UnionToIntersection7122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7122<T> = UnionToIntersection7122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7122<T extends unknown[], V> = [...T, V];

type TuplifyUnion7122<T, L = LastOf7122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7122<TuplifyUnion7122<Exclude<T, L>>, L>;

type DeepPartial7122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7122<T[P]> }
  : T;

type Paths7122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7122<K, Paths7122<T[K], Prev7122[D]>> : never }[keyof T]
  : never;

type Prev7122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7122 {
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

type ConfigPaths7122 = Paths7122<NestedConfig7122>;

interface HeavyProps7122 {
  config: DeepPartial7122<NestedConfig7122>;
  path?: ConfigPaths7122;
}

const HeavyComponent7122 = memo(function HeavyComponent7122({ config }: HeavyProps7122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7122.displayName = 'HeavyComponent7122';
export default HeavyComponent7122;

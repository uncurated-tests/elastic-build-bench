'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7026<T> = T extends (infer U)[]
  ? DeepReadonlyArray7026<U>
  : T extends object
  ? DeepReadonlyObject7026<T>
  : T;

interface DeepReadonlyArray7026<T> extends ReadonlyArray<DeepReadonly7026<T>> {}

type DeepReadonlyObject7026<T> = {
  readonly [P in keyof T]: DeepReadonly7026<T[P]>;
};

type UnionToIntersection7026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7026<T> = UnionToIntersection7026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7026<T extends unknown[], V> = [...T, V];

type TuplifyUnion7026<T, L = LastOf7026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7026<TuplifyUnion7026<Exclude<T, L>>, L>;

type DeepPartial7026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7026<T[P]> }
  : T;

type Paths7026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7026<K, Paths7026<T[K], Prev7026[D]>> : never }[keyof T]
  : never;

type Prev7026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7026 {
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

type ConfigPaths7026 = Paths7026<NestedConfig7026>;

interface HeavyProps7026 {
  config: DeepPartial7026<NestedConfig7026>;
  path?: ConfigPaths7026;
}

const HeavyComponent7026 = memo(function HeavyComponent7026({ config }: HeavyProps7026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7026.displayName = 'HeavyComponent7026';
export default HeavyComponent7026;

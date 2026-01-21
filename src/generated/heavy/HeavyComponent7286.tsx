'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7286<T> = T extends (infer U)[]
  ? DeepReadonlyArray7286<U>
  : T extends object
  ? DeepReadonlyObject7286<T>
  : T;

interface DeepReadonlyArray7286<T> extends ReadonlyArray<DeepReadonly7286<T>> {}

type DeepReadonlyObject7286<T> = {
  readonly [P in keyof T]: DeepReadonly7286<T[P]>;
};

type UnionToIntersection7286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7286<T> = UnionToIntersection7286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7286<T extends unknown[], V> = [...T, V];

type TuplifyUnion7286<T, L = LastOf7286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7286<TuplifyUnion7286<Exclude<T, L>>, L>;

type DeepPartial7286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7286<T[P]> }
  : T;

type Paths7286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7286<K, Paths7286<T[K], Prev7286[D]>> : never }[keyof T]
  : never;

type Prev7286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7286 {
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

type ConfigPaths7286 = Paths7286<NestedConfig7286>;

interface HeavyProps7286 {
  config: DeepPartial7286<NestedConfig7286>;
  path?: ConfigPaths7286;
}

const HeavyComponent7286 = memo(function HeavyComponent7286({ config }: HeavyProps7286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7286.displayName = 'HeavyComponent7286';
export default HeavyComponent7286;

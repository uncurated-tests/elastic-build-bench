'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7116<T> = T extends (infer U)[]
  ? DeepReadonlyArray7116<U>
  : T extends object
  ? DeepReadonlyObject7116<T>
  : T;

interface DeepReadonlyArray7116<T> extends ReadonlyArray<DeepReadonly7116<T>> {}

type DeepReadonlyObject7116<T> = {
  readonly [P in keyof T]: DeepReadonly7116<T[P]>;
};

type UnionToIntersection7116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7116<T> = UnionToIntersection7116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7116<T extends unknown[], V> = [...T, V];

type TuplifyUnion7116<T, L = LastOf7116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7116<TuplifyUnion7116<Exclude<T, L>>, L>;

type DeepPartial7116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7116<T[P]> }
  : T;

type Paths7116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7116<K, Paths7116<T[K], Prev7116[D]>> : never }[keyof T]
  : never;

type Prev7116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7116 {
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

type ConfigPaths7116 = Paths7116<NestedConfig7116>;

interface HeavyProps7116 {
  config: DeepPartial7116<NestedConfig7116>;
  path?: ConfigPaths7116;
}

const HeavyComponent7116 = memo(function HeavyComponent7116({ config }: HeavyProps7116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7116.displayName = 'HeavyComponent7116';
export default HeavyComponent7116;

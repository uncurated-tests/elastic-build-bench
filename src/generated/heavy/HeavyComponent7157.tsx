'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7157<T> = T extends (infer U)[]
  ? DeepReadonlyArray7157<U>
  : T extends object
  ? DeepReadonlyObject7157<T>
  : T;

interface DeepReadonlyArray7157<T> extends ReadonlyArray<DeepReadonly7157<T>> {}

type DeepReadonlyObject7157<T> = {
  readonly [P in keyof T]: DeepReadonly7157<T[P]>;
};

type UnionToIntersection7157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7157<T> = UnionToIntersection7157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7157<T extends unknown[], V> = [...T, V];

type TuplifyUnion7157<T, L = LastOf7157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7157<TuplifyUnion7157<Exclude<T, L>>, L>;

type DeepPartial7157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7157<T[P]> }
  : T;

type Paths7157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7157<K, Paths7157<T[K], Prev7157[D]>> : never }[keyof T]
  : never;

type Prev7157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7157 {
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

type ConfigPaths7157 = Paths7157<NestedConfig7157>;

interface HeavyProps7157 {
  config: DeepPartial7157<NestedConfig7157>;
  path?: ConfigPaths7157;
}

const HeavyComponent7157 = memo(function HeavyComponent7157({ config }: HeavyProps7157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7157.displayName = 'HeavyComponent7157';
export default HeavyComponent7157;

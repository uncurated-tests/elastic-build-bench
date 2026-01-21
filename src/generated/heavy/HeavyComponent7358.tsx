'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7358<T> = T extends (infer U)[]
  ? DeepReadonlyArray7358<U>
  : T extends object
  ? DeepReadonlyObject7358<T>
  : T;

interface DeepReadonlyArray7358<T> extends ReadonlyArray<DeepReadonly7358<T>> {}

type DeepReadonlyObject7358<T> = {
  readonly [P in keyof T]: DeepReadonly7358<T[P]>;
};

type UnionToIntersection7358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7358<T> = UnionToIntersection7358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7358<T extends unknown[], V> = [...T, V];

type TuplifyUnion7358<T, L = LastOf7358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7358<TuplifyUnion7358<Exclude<T, L>>, L>;

type DeepPartial7358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7358<T[P]> }
  : T;

type Paths7358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7358<K, Paths7358<T[K], Prev7358[D]>> : never }[keyof T]
  : never;

type Prev7358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7358 {
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

type ConfigPaths7358 = Paths7358<NestedConfig7358>;

interface HeavyProps7358 {
  config: DeepPartial7358<NestedConfig7358>;
  path?: ConfigPaths7358;
}

const HeavyComponent7358 = memo(function HeavyComponent7358({ config }: HeavyProps7358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7358.displayName = 'HeavyComponent7358';
export default HeavyComponent7358;

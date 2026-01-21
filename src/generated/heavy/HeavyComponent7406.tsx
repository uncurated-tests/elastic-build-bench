'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7406<T> = T extends (infer U)[]
  ? DeepReadonlyArray7406<U>
  : T extends object
  ? DeepReadonlyObject7406<T>
  : T;

interface DeepReadonlyArray7406<T> extends ReadonlyArray<DeepReadonly7406<T>> {}

type DeepReadonlyObject7406<T> = {
  readonly [P in keyof T]: DeepReadonly7406<T[P]>;
};

type UnionToIntersection7406<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7406<T> = UnionToIntersection7406<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7406<T extends unknown[], V> = [...T, V];

type TuplifyUnion7406<T, L = LastOf7406<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7406<TuplifyUnion7406<Exclude<T, L>>, L>;

type DeepPartial7406<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7406<T[P]> }
  : T;

type Paths7406<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7406<K, Paths7406<T[K], Prev7406[D]>> : never }[keyof T]
  : never;

type Prev7406 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7406<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7406 {
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

type ConfigPaths7406 = Paths7406<NestedConfig7406>;

interface HeavyProps7406 {
  config: DeepPartial7406<NestedConfig7406>;
  path?: ConfigPaths7406;
}

const HeavyComponent7406 = memo(function HeavyComponent7406({ config }: HeavyProps7406) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7406) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7406 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7406: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7406.displayName = 'HeavyComponent7406';
export default HeavyComponent7406;

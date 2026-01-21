'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7871<T> = T extends (infer U)[]
  ? DeepReadonlyArray7871<U>
  : T extends object
  ? DeepReadonlyObject7871<T>
  : T;

interface DeepReadonlyArray7871<T> extends ReadonlyArray<DeepReadonly7871<T>> {}

type DeepReadonlyObject7871<T> = {
  readonly [P in keyof T]: DeepReadonly7871<T[P]>;
};

type UnionToIntersection7871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7871<T> = UnionToIntersection7871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7871<T extends unknown[], V> = [...T, V];

type TuplifyUnion7871<T, L = LastOf7871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7871<TuplifyUnion7871<Exclude<T, L>>, L>;

type DeepPartial7871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7871<T[P]> }
  : T;

type Paths7871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7871<K, Paths7871<T[K], Prev7871[D]>> : never }[keyof T]
  : never;

type Prev7871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7871 {
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

type ConfigPaths7871 = Paths7871<NestedConfig7871>;

interface HeavyProps7871 {
  config: DeepPartial7871<NestedConfig7871>;
  path?: ConfigPaths7871;
}

const HeavyComponent7871 = memo(function HeavyComponent7871({ config }: HeavyProps7871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7871.displayName = 'HeavyComponent7871';
export default HeavyComponent7871;

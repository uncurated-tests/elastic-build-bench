'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7740<T> = T extends (infer U)[]
  ? DeepReadonlyArray7740<U>
  : T extends object
  ? DeepReadonlyObject7740<T>
  : T;

interface DeepReadonlyArray7740<T> extends ReadonlyArray<DeepReadonly7740<T>> {}

type DeepReadonlyObject7740<T> = {
  readonly [P in keyof T]: DeepReadonly7740<T[P]>;
};

type UnionToIntersection7740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7740<T> = UnionToIntersection7740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7740<T extends unknown[], V> = [...T, V];

type TuplifyUnion7740<T, L = LastOf7740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7740<TuplifyUnion7740<Exclude<T, L>>, L>;

type DeepPartial7740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7740<T[P]> }
  : T;

type Paths7740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7740<K, Paths7740<T[K], Prev7740[D]>> : never }[keyof T]
  : never;

type Prev7740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7740 {
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

type ConfigPaths7740 = Paths7740<NestedConfig7740>;

interface HeavyProps7740 {
  config: DeepPartial7740<NestedConfig7740>;
  path?: ConfigPaths7740;
}

const HeavyComponent7740 = memo(function HeavyComponent7740({ config }: HeavyProps7740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7740.displayName = 'HeavyComponent7740';
export default HeavyComponent7740;

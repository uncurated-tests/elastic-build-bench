'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7541<T> = T extends (infer U)[]
  ? DeepReadonlyArray7541<U>
  : T extends object
  ? DeepReadonlyObject7541<T>
  : T;

interface DeepReadonlyArray7541<T> extends ReadonlyArray<DeepReadonly7541<T>> {}

type DeepReadonlyObject7541<T> = {
  readonly [P in keyof T]: DeepReadonly7541<T[P]>;
};

type UnionToIntersection7541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7541<T> = UnionToIntersection7541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7541<T extends unknown[], V> = [...T, V];

type TuplifyUnion7541<T, L = LastOf7541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7541<TuplifyUnion7541<Exclude<T, L>>, L>;

type DeepPartial7541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7541<T[P]> }
  : T;

type Paths7541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7541<K, Paths7541<T[K], Prev7541[D]>> : never }[keyof T]
  : never;

type Prev7541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7541 {
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

type ConfigPaths7541 = Paths7541<NestedConfig7541>;

interface HeavyProps7541 {
  config: DeepPartial7541<NestedConfig7541>;
  path?: ConfigPaths7541;
}

const HeavyComponent7541 = memo(function HeavyComponent7541({ config }: HeavyProps7541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7541.displayName = 'HeavyComponent7541';
export default HeavyComponent7541;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7065<T> = T extends (infer U)[]
  ? DeepReadonlyArray7065<U>
  : T extends object
  ? DeepReadonlyObject7065<T>
  : T;

interface DeepReadonlyArray7065<T> extends ReadonlyArray<DeepReadonly7065<T>> {}

type DeepReadonlyObject7065<T> = {
  readonly [P in keyof T]: DeepReadonly7065<T[P]>;
};

type UnionToIntersection7065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7065<T> = UnionToIntersection7065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7065<T extends unknown[], V> = [...T, V];

type TuplifyUnion7065<T, L = LastOf7065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7065<TuplifyUnion7065<Exclude<T, L>>, L>;

type DeepPartial7065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7065<T[P]> }
  : T;

type Paths7065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7065<K, Paths7065<T[K], Prev7065[D]>> : never }[keyof T]
  : never;

type Prev7065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7065 {
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

type ConfigPaths7065 = Paths7065<NestedConfig7065>;

interface HeavyProps7065 {
  config: DeepPartial7065<NestedConfig7065>;
  path?: ConfigPaths7065;
}

const HeavyComponent7065 = memo(function HeavyComponent7065({ config }: HeavyProps7065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7065.displayName = 'HeavyComponent7065';
export default HeavyComponent7065;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7957<T> = T extends (infer U)[]
  ? DeepReadonlyArray7957<U>
  : T extends object
  ? DeepReadonlyObject7957<T>
  : T;

interface DeepReadonlyArray7957<T> extends ReadonlyArray<DeepReadonly7957<T>> {}

type DeepReadonlyObject7957<T> = {
  readonly [P in keyof T]: DeepReadonly7957<T[P]>;
};

type UnionToIntersection7957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7957<T> = UnionToIntersection7957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7957<T extends unknown[], V> = [...T, V];

type TuplifyUnion7957<T, L = LastOf7957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7957<TuplifyUnion7957<Exclude<T, L>>, L>;

type DeepPartial7957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7957<T[P]> }
  : T;

type Paths7957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7957<K, Paths7957<T[K], Prev7957[D]>> : never }[keyof T]
  : never;

type Prev7957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7957 {
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

type ConfigPaths7957 = Paths7957<NestedConfig7957>;

interface HeavyProps7957 {
  config: DeepPartial7957<NestedConfig7957>;
  path?: ConfigPaths7957;
}

const HeavyComponent7957 = memo(function HeavyComponent7957({ config }: HeavyProps7957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7957.displayName = 'HeavyComponent7957';
export default HeavyComponent7957;

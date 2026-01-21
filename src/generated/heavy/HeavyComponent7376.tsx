'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7376<T> = T extends (infer U)[]
  ? DeepReadonlyArray7376<U>
  : T extends object
  ? DeepReadonlyObject7376<T>
  : T;

interface DeepReadonlyArray7376<T> extends ReadonlyArray<DeepReadonly7376<T>> {}

type DeepReadonlyObject7376<T> = {
  readonly [P in keyof T]: DeepReadonly7376<T[P]>;
};

type UnionToIntersection7376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7376<T> = UnionToIntersection7376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7376<T extends unknown[], V> = [...T, V];

type TuplifyUnion7376<T, L = LastOf7376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7376<TuplifyUnion7376<Exclude<T, L>>, L>;

type DeepPartial7376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7376<T[P]> }
  : T;

type Paths7376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7376<K, Paths7376<T[K], Prev7376[D]>> : never }[keyof T]
  : never;

type Prev7376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7376 {
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

type ConfigPaths7376 = Paths7376<NestedConfig7376>;

interface HeavyProps7376 {
  config: DeepPartial7376<NestedConfig7376>;
  path?: ConfigPaths7376;
}

const HeavyComponent7376 = memo(function HeavyComponent7376({ config }: HeavyProps7376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7376.displayName = 'HeavyComponent7376';
export default HeavyComponent7376;

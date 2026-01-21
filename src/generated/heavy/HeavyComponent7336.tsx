'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7336<T> = T extends (infer U)[]
  ? DeepReadonlyArray7336<U>
  : T extends object
  ? DeepReadonlyObject7336<T>
  : T;

interface DeepReadonlyArray7336<T> extends ReadonlyArray<DeepReadonly7336<T>> {}

type DeepReadonlyObject7336<T> = {
  readonly [P in keyof T]: DeepReadonly7336<T[P]>;
};

type UnionToIntersection7336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7336<T> = UnionToIntersection7336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7336<T extends unknown[], V> = [...T, V];

type TuplifyUnion7336<T, L = LastOf7336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7336<TuplifyUnion7336<Exclude<T, L>>, L>;

type DeepPartial7336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7336<T[P]> }
  : T;

type Paths7336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7336<K, Paths7336<T[K], Prev7336[D]>> : never }[keyof T]
  : never;

type Prev7336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7336 {
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

type ConfigPaths7336 = Paths7336<NestedConfig7336>;

interface HeavyProps7336 {
  config: DeepPartial7336<NestedConfig7336>;
  path?: ConfigPaths7336;
}

const HeavyComponent7336 = memo(function HeavyComponent7336({ config }: HeavyProps7336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7336.displayName = 'HeavyComponent7336';
export default HeavyComponent7336;

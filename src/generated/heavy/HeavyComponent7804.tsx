'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7804<T> = T extends (infer U)[]
  ? DeepReadonlyArray7804<U>
  : T extends object
  ? DeepReadonlyObject7804<T>
  : T;

interface DeepReadonlyArray7804<T> extends ReadonlyArray<DeepReadonly7804<T>> {}

type DeepReadonlyObject7804<T> = {
  readonly [P in keyof T]: DeepReadonly7804<T[P]>;
};

type UnionToIntersection7804<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7804<T> = UnionToIntersection7804<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7804<T extends unknown[], V> = [...T, V];

type TuplifyUnion7804<T, L = LastOf7804<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7804<TuplifyUnion7804<Exclude<T, L>>, L>;

type DeepPartial7804<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7804<T[P]> }
  : T;

type Paths7804<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7804<K, Paths7804<T[K], Prev7804[D]>> : never }[keyof T]
  : never;

type Prev7804 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7804<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7804 {
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

type ConfigPaths7804 = Paths7804<NestedConfig7804>;

interface HeavyProps7804 {
  config: DeepPartial7804<NestedConfig7804>;
  path?: ConfigPaths7804;
}

const HeavyComponent7804 = memo(function HeavyComponent7804({ config }: HeavyProps7804) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7804) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7804 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7804: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7804.displayName = 'HeavyComponent7804';
export default HeavyComponent7804;

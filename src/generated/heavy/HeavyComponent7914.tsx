'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7914<T> = T extends (infer U)[]
  ? DeepReadonlyArray7914<U>
  : T extends object
  ? DeepReadonlyObject7914<T>
  : T;

interface DeepReadonlyArray7914<T> extends ReadonlyArray<DeepReadonly7914<T>> {}

type DeepReadonlyObject7914<T> = {
  readonly [P in keyof T]: DeepReadonly7914<T[P]>;
};

type UnionToIntersection7914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7914<T> = UnionToIntersection7914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7914<T extends unknown[], V> = [...T, V];

type TuplifyUnion7914<T, L = LastOf7914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7914<TuplifyUnion7914<Exclude<T, L>>, L>;

type DeepPartial7914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7914<T[P]> }
  : T;

type Paths7914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7914<K, Paths7914<T[K], Prev7914[D]>> : never }[keyof T]
  : never;

type Prev7914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7914 {
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

type ConfigPaths7914 = Paths7914<NestedConfig7914>;

interface HeavyProps7914 {
  config: DeepPartial7914<NestedConfig7914>;
  path?: ConfigPaths7914;
}

const HeavyComponent7914 = memo(function HeavyComponent7914({ config }: HeavyProps7914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7914.displayName = 'HeavyComponent7914';
export default HeavyComponent7914;

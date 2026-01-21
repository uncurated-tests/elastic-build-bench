'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7565<T> = T extends (infer U)[]
  ? DeepReadonlyArray7565<U>
  : T extends object
  ? DeepReadonlyObject7565<T>
  : T;

interface DeepReadonlyArray7565<T> extends ReadonlyArray<DeepReadonly7565<T>> {}

type DeepReadonlyObject7565<T> = {
  readonly [P in keyof T]: DeepReadonly7565<T[P]>;
};

type UnionToIntersection7565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7565<T> = UnionToIntersection7565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7565<T extends unknown[], V> = [...T, V];

type TuplifyUnion7565<T, L = LastOf7565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7565<TuplifyUnion7565<Exclude<T, L>>, L>;

type DeepPartial7565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7565<T[P]> }
  : T;

type Paths7565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7565<K, Paths7565<T[K], Prev7565[D]>> : never }[keyof T]
  : never;

type Prev7565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7565 {
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

type ConfigPaths7565 = Paths7565<NestedConfig7565>;

interface HeavyProps7565 {
  config: DeepPartial7565<NestedConfig7565>;
  path?: ConfigPaths7565;
}

const HeavyComponent7565 = memo(function HeavyComponent7565({ config }: HeavyProps7565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7565.displayName = 'HeavyComponent7565';
export default HeavyComponent7565;

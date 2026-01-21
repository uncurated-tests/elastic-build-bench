'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7997<T> = T extends (infer U)[]
  ? DeepReadonlyArray7997<U>
  : T extends object
  ? DeepReadonlyObject7997<T>
  : T;

interface DeepReadonlyArray7997<T> extends ReadonlyArray<DeepReadonly7997<T>> {}

type DeepReadonlyObject7997<T> = {
  readonly [P in keyof T]: DeepReadonly7997<T[P]>;
};

type UnionToIntersection7997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7997<T> = UnionToIntersection7997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7997<T extends unknown[], V> = [...T, V];

type TuplifyUnion7997<T, L = LastOf7997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7997<TuplifyUnion7997<Exclude<T, L>>, L>;

type DeepPartial7997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7997<T[P]> }
  : T;

type Paths7997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7997<K, Paths7997<T[K], Prev7997[D]>> : never }[keyof T]
  : never;

type Prev7997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7997 {
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

type ConfigPaths7997 = Paths7997<NestedConfig7997>;

interface HeavyProps7997 {
  config: DeepPartial7997<NestedConfig7997>;
  path?: ConfigPaths7997;
}

const HeavyComponent7997 = memo(function HeavyComponent7997({ config }: HeavyProps7997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7997.displayName = 'HeavyComponent7997';
export default HeavyComponent7997;

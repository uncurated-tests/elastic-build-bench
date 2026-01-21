'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7847<T> = T extends (infer U)[]
  ? DeepReadonlyArray7847<U>
  : T extends object
  ? DeepReadonlyObject7847<T>
  : T;

interface DeepReadonlyArray7847<T> extends ReadonlyArray<DeepReadonly7847<T>> {}

type DeepReadonlyObject7847<T> = {
  readonly [P in keyof T]: DeepReadonly7847<T[P]>;
};

type UnionToIntersection7847<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7847<T> = UnionToIntersection7847<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7847<T extends unknown[], V> = [...T, V];

type TuplifyUnion7847<T, L = LastOf7847<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7847<TuplifyUnion7847<Exclude<T, L>>, L>;

type DeepPartial7847<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7847<T[P]> }
  : T;

type Paths7847<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7847<K, Paths7847<T[K], Prev7847[D]>> : never }[keyof T]
  : never;

type Prev7847 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7847<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7847 {
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

type ConfigPaths7847 = Paths7847<NestedConfig7847>;

interface HeavyProps7847 {
  config: DeepPartial7847<NestedConfig7847>;
  path?: ConfigPaths7847;
}

const HeavyComponent7847 = memo(function HeavyComponent7847({ config }: HeavyProps7847) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7847) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7847 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7847: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7847.displayName = 'HeavyComponent7847';
export default HeavyComponent7847;

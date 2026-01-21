'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7240<T> = T extends (infer U)[]
  ? DeepReadonlyArray7240<U>
  : T extends object
  ? DeepReadonlyObject7240<T>
  : T;

interface DeepReadonlyArray7240<T> extends ReadonlyArray<DeepReadonly7240<T>> {}

type DeepReadonlyObject7240<T> = {
  readonly [P in keyof T]: DeepReadonly7240<T[P]>;
};

type UnionToIntersection7240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7240<T> = UnionToIntersection7240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7240<T extends unknown[], V> = [...T, V];

type TuplifyUnion7240<T, L = LastOf7240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7240<TuplifyUnion7240<Exclude<T, L>>, L>;

type DeepPartial7240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7240<T[P]> }
  : T;

type Paths7240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7240<K, Paths7240<T[K], Prev7240[D]>> : never }[keyof T]
  : never;

type Prev7240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7240 {
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

type ConfigPaths7240 = Paths7240<NestedConfig7240>;

interface HeavyProps7240 {
  config: DeepPartial7240<NestedConfig7240>;
  path?: ConfigPaths7240;
}

const HeavyComponent7240 = memo(function HeavyComponent7240({ config }: HeavyProps7240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7240.displayName = 'HeavyComponent7240';
export default HeavyComponent7240;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7789<T> = T extends (infer U)[]
  ? DeepReadonlyArray7789<U>
  : T extends object
  ? DeepReadonlyObject7789<T>
  : T;

interface DeepReadonlyArray7789<T> extends ReadonlyArray<DeepReadonly7789<T>> {}

type DeepReadonlyObject7789<T> = {
  readonly [P in keyof T]: DeepReadonly7789<T[P]>;
};

type UnionToIntersection7789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7789<T> = UnionToIntersection7789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7789<T extends unknown[], V> = [...T, V];

type TuplifyUnion7789<T, L = LastOf7789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7789<TuplifyUnion7789<Exclude<T, L>>, L>;

type DeepPartial7789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7789<T[P]> }
  : T;

type Paths7789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7789<K, Paths7789<T[K], Prev7789[D]>> : never }[keyof T]
  : never;

type Prev7789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7789 {
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

type ConfigPaths7789 = Paths7789<NestedConfig7789>;

interface HeavyProps7789 {
  config: DeepPartial7789<NestedConfig7789>;
  path?: ConfigPaths7789;
}

const HeavyComponent7789 = memo(function HeavyComponent7789({ config }: HeavyProps7789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7789.displayName = 'HeavyComponent7789';
export default HeavyComponent7789;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7424<T> = T extends (infer U)[]
  ? DeepReadonlyArray7424<U>
  : T extends object
  ? DeepReadonlyObject7424<T>
  : T;

interface DeepReadonlyArray7424<T> extends ReadonlyArray<DeepReadonly7424<T>> {}

type DeepReadonlyObject7424<T> = {
  readonly [P in keyof T]: DeepReadonly7424<T[P]>;
};

type UnionToIntersection7424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7424<T> = UnionToIntersection7424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7424<T extends unknown[], V> = [...T, V];

type TuplifyUnion7424<T, L = LastOf7424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7424<TuplifyUnion7424<Exclude<T, L>>, L>;

type DeepPartial7424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7424<T[P]> }
  : T;

type Paths7424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7424<K, Paths7424<T[K], Prev7424[D]>> : never }[keyof T]
  : never;

type Prev7424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7424 {
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

type ConfigPaths7424 = Paths7424<NestedConfig7424>;

interface HeavyProps7424 {
  config: DeepPartial7424<NestedConfig7424>;
  path?: ConfigPaths7424;
}

const HeavyComponent7424 = memo(function HeavyComponent7424({ config }: HeavyProps7424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7424.displayName = 'HeavyComponent7424';
export default HeavyComponent7424;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7644<T> = T extends (infer U)[]
  ? DeepReadonlyArray7644<U>
  : T extends object
  ? DeepReadonlyObject7644<T>
  : T;

interface DeepReadonlyArray7644<T> extends ReadonlyArray<DeepReadonly7644<T>> {}

type DeepReadonlyObject7644<T> = {
  readonly [P in keyof T]: DeepReadonly7644<T[P]>;
};

type UnionToIntersection7644<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7644<T> = UnionToIntersection7644<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7644<T extends unknown[], V> = [...T, V];

type TuplifyUnion7644<T, L = LastOf7644<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7644<TuplifyUnion7644<Exclude<T, L>>, L>;

type DeepPartial7644<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7644<T[P]> }
  : T;

type Paths7644<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7644<K, Paths7644<T[K], Prev7644[D]>> : never }[keyof T]
  : never;

type Prev7644 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7644<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7644 {
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

type ConfigPaths7644 = Paths7644<NestedConfig7644>;

interface HeavyProps7644 {
  config: DeepPartial7644<NestedConfig7644>;
  path?: ConfigPaths7644;
}

const HeavyComponent7644 = memo(function HeavyComponent7644({ config }: HeavyProps7644) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7644) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7644 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7644: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7644.displayName = 'HeavyComponent7644';
export default HeavyComponent7644;

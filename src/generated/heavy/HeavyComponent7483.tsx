'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7483<T> = T extends (infer U)[]
  ? DeepReadonlyArray7483<U>
  : T extends object
  ? DeepReadonlyObject7483<T>
  : T;

interface DeepReadonlyArray7483<T> extends ReadonlyArray<DeepReadonly7483<T>> {}

type DeepReadonlyObject7483<T> = {
  readonly [P in keyof T]: DeepReadonly7483<T[P]>;
};

type UnionToIntersection7483<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7483<T> = UnionToIntersection7483<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7483<T extends unknown[], V> = [...T, V];

type TuplifyUnion7483<T, L = LastOf7483<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7483<TuplifyUnion7483<Exclude<T, L>>, L>;

type DeepPartial7483<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7483<T[P]> }
  : T;

type Paths7483<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7483<K, Paths7483<T[K], Prev7483[D]>> : never }[keyof T]
  : never;

type Prev7483 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7483<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7483 {
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

type ConfigPaths7483 = Paths7483<NestedConfig7483>;

interface HeavyProps7483 {
  config: DeepPartial7483<NestedConfig7483>;
  path?: ConfigPaths7483;
}

const HeavyComponent7483 = memo(function HeavyComponent7483({ config }: HeavyProps7483) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7483) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7483 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7483: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7483.displayName = 'HeavyComponent7483';
export default HeavyComponent7483;

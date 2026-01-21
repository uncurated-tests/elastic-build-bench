'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7505<T> = T extends (infer U)[]
  ? DeepReadonlyArray7505<U>
  : T extends object
  ? DeepReadonlyObject7505<T>
  : T;

interface DeepReadonlyArray7505<T> extends ReadonlyArray<DeepReadonly7505<T>> {}

type DeepReadonlyObject7505<T> = {
  readonly [P in keyof T]: DeepReadonly7505<T[P]>;
};

type UnionToIntersection7505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7505<T> = UnionToIntersection7505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7505<T extends unknown[], V> = [...T, V];

type TuplifyUnion7505<T, L = LastOf7505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7505<TuplifyUnion7505<Exclude<T, L>>, L>;

type DeepPartial7505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7505<T[P]> }
  : T;

type Paths7505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7505<K, Paths7505<T[K], Prev7505[D]>> : never }[keyof T]
  : never;

type Prev7505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7505 {
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

type ConfigPaths7505 = Paths7505<NestedConfig7505>;

interface HeavyProps7505 {
  config: DeepPartial7505<NestedConfig7505>;
  path?: ConfigPaths7505;
}

const HeavyComponent7505 = memo(function HeavyComponent7505({ config }: HeavyProps7505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7505.displayName = 'HeavyComponent7505';
export default HeavyComponent7505;

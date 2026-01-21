'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7774<T> = T extends (infer U)[]
  ? DeepReadonlyArray7774<U>
  : T extends object
  ? DeepReadonlyObject7774<T>
  : T;

interface DeepReadonlyArray7774<T> extends ReadonlyArray<DeepReadonly7774<T>> {}

type DeepReadonlyObject7774<T> = {
  readonly [P in keyof T]: DeepReadonly7774<T[P]>;
};

type UnionToIntersection7774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7774<T> = UnionToIntersection7774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7774<T extends unknown[], V> = [...T, V];

type TuplifyUnion7774<T, L = LastOf7774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7774<TuplifyUnion7774<Exclude<T, L>>, L>;

type DeepPartial7774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7774<T[P]> }
  : T;

type Paths7774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7774<K, Paths7774<T[K], Prev7774[D]>> : never }[keyof T]
  : never;

type Prev7774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7774 {
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

type ConfigPaths7774 = Paths7774<NestedConfig7774>;

interface HeavyProps7774 {
  config: DeepPartial7774<NestedConfig7774>;
  path?: ConfigPaths7774;
}

const HeavyComponent7774 = memo(function HeavyComponent7774({ config }: HeavyProps7774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7774.displayName = 'HeavyComponent7774';
export default HeavyComponent7774;

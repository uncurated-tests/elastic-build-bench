'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7186<T> = T extends (infer U)[]
  ? DeepReadonlyArray7186<U>
  : T extends object
  ? DeepReadonlyObject7186<T>
  : T;

interface DeepReadonlyArray7186<T> extends ReadonlyArray<DeepReadonly7186<T>> {}

type DeepReadonlyObject7186<T> = {
  readonly [P in keyof T]: DeepReadonly7186<T[P]>;
};

type UnionToIntersection7186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7186<T> = UnionToIntersection7186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7186<T extends unknown[], V> = [...T, V];

type TuplifyUnion7186<T, L = LastOf7186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7186<TuplifyUnion7186<Exclude<T, L>>, L>;

type DeepPartial7186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7186<T[P]> }
  : T;

type Paths7186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7186<K, Paths7186<T[K], Prev7186[D]>> : never }[keyof T]
  : never;

type Prev7186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7186 {
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

type ConfigPaths7186 = Paths7186<NestedConfig7186>;

interface HeavyProps7186 {
  config: DeepPartial7186<NestedConfig7186>;
  path?: ConfigPaths7186;
}

const HeavyComponent7186 = memo(function HeavyComponent7186({ config }: HeavyProps7186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7186.displayName = 'HeavyComponent7186';
export default HeavyComponent7186;

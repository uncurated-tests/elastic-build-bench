'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7630<T> = T extends (infer U)[]
  ? DeepReadonlyArray7630<U>
  : T extends object
  ? DeepReadonlyObject7630<T>
  : T;

interface DeepReadonlyArray7630<T> extends ReadonlyArray<DeepReadonly7630<T>> {}

type DeepReadonlyObject7630<T> = {
  readonly [P in keyof T]: DeepReadonly7630<T[P]>;
};

type UnionToIntersection7630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7630<T> = UnionToIntersection7630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7630<T extends unknown[], V> = [...T, V];

type TuplifyUnion7630<T, L = LastOf7630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7630<TuplifyUnion7630<Exclude<T, L>>, L>;

type DeepPartial7630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7630<T[P]> }
  : T;

type Paths7630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7630<K, Paths7630<T[K], Prev7630[D]>> : never }[keyof T]
  : never;

type Prev7630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7630 {
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

type ConfigPaths7630 = Paths7630<NestedConfig7630>;

interface HeavyProps7630 {
  config: DeepPartial7630<NestedConfig7630>;
  path?: ConfigPaths7630;
}

const HeavyComponent7630 = memo(function HeavyComponent7630({ config }: HeavyProps7630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7630.displayName = 'HeavyComponent7630';
export default HeavyComponent7630;

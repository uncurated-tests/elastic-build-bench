'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7050<T> = T extends (infer U)[]
  ? DeepReadonlyArray7050<U>
  : T extends object
  ? DeepReadonlyObject7050<T>
  : T;

interface DeepReadonlyArray7050<T> extends ReadonlyArray<DeepReadonly7050<T>> {}

type DeepReadonlyObject7050<T> = {
  readonly [P in keyof T]: DeepReadonly7050<T[P]>;
};

type UnionToIntersection7050<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7050<T> = UnionToIntersection7050<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7050<T extends unknown[], V> = [...T, V];

type TuplifyUnion7050<T, L = LastOf7050<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7050<TuplifyUnion7050<Exclude<T, L>>, L>;

type DeepPartial7050<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7050<T[P]> }
  : T;

type Paths7050<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7050<K, Paths7050<T[K], Prev7050[D]>> : never }[keyof T]
  : never;

type Prev7050 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7050<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7050 {
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

type ConfigPaths7050 = Paths7050<NestedConfig7050>;

interface HeavyProps7050 {
  config: DeepPartial7050<NestedConfig7050>;
  path?: ConfigPaths7050;
}

const HeavyComponent7050 = memo(function HeavyComponent7050({ config }: HeavyProps7050) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7050) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7050 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7050: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7050.displayName = 'HeavyComponent7050';
export default HeavyComponent7050;

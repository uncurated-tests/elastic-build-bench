'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7462<T> = T extends (infer U)[]
  ? DeepReadonlyArray7462<U>
  : T extends object
  ? DeepReadonlyObject7462<T>
  : T;

interface DeepReadonlyArray7462<T> extends ReadonlyArray<DeepReadonly7462<T>> {}

type DeepReadonlyObject7462<T> = {
  readonly [P in keyof T]: DeepReadonly7462<T[P]>;
};

type UnionToIntersection7462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7462<T> = UnionToIntersection7462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7462<T extends unknown[], V> = [...T, V];

type TuplifyUnion7462<T, L = LastOf7462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7462<TuplifyUnion7462<Exclude<T, L>>, L>;

type DeepPartial7462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7462<T[P]> }
  : T;

type Paths7462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7462<K, Paths7462<T[K], Prev7462[D]>> : never }[keyof T]
  : never;

type Prev7462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7462 {
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

type ConfigPaths7462 = Paths7462<NestedConfig7462>;

interface HeavyProps7462 {
  config: DeepPartial7462<NestedConfig7462>;
  path?: ConfigPaths7462;
}

const HeavyComponent7462 = memo(function HeavyComponent7462({ config }: HeavyProps7462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7462.displayName = 'HeavyComponent7462';
export default HeavyComponent7462;

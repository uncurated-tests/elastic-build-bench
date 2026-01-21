'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7173<T> = T extends (infer U)[]
  ? DeepReadonlyArray7173<U>
  : T extends object
  ? DeepReadonlyObject7173<T>
  : T;

interface DeepReadonlyArray7173<T> extends ReadonlyArray<DeepReadonly7173<T>> {}

type DeepReadonlyObject7173<T> = {
  readonly [P in keyof T]: DeepReadonly7173<T[P]>;
};

type UnionToIntersection7173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7173<T> = UnionToIntersection7173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7173<T extends unknown[], V> = [...T, V];

type TuplifyUnion7173<T, L = LastOf7173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7173<TuplifyUnion7173<Exclude<T, L>>, L>;

type DeepPartial7173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7173<T[P]> }
  : T;

type Paths7173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7173<K, Paths7173<T[K], Prev7173[D]>> : never }[keyof T]
  : never;

type Prev7173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7173 {
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

type ConfigPaths7173 = Paths7173<NestedConfig7173>;

interface HeavyProps7173 {
  config: DeepPartial7173<NestedConfig7173>;
  path?: ConfigPaths7173;
}

const HeavyComponent7173 = memo(function HeavyComponent7173({ config }: HeavyProps7173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7173.displayName = 'HeavyComponent7173';
export default HeavyComponent7173;

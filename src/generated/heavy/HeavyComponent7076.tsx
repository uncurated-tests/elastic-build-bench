'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7076<T> = T extends (infer U)[]
  ? DeepReadonlyArray7076<U>
  : T extends object
  ? DeepReadonlyObject7076<T>
  : T;

interface DeepReadonlyArray7076<T> extends ReadonlyArray<DeepReadonly7076<T>> {}

type DeepReadonlyObject7076<T> = {
  readonly [P in keyof T]: DeepReadonly7076<T[P]>;
};

type UnionToIntersection7076<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7076<T> = UnionToIntersection7076<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7076<T extends unknown[], V> = [...T, V];

type TuplifyUnion7076<T, L = LastOf7076<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7076<TuplifyUnion7076<Exclude<T, L>>, L>;

type DeepPartial7076<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7076<T[P]> }
  : T;

type Paths7076<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7076<K, Paths7076<T[K], Prev7076[D]>> : never }[keyof T]
  : never;

type Prev7076 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7076<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7076 {
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

type ConfigPaths7076 = Paths7076<NestedConfig7076>;

interface HeavyProps7076 {
  config: DeepPartial7076<NestedConfig7076>;
  path?: ConfigPaths7076;
}

const HeavyComponent7076 = memo(function HeavyComponent7076({ config }: HeavyProps7076) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7076) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7076 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7076: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7076.displayName = 'HeavyComponent7076';
export default HeavyComponent7076;

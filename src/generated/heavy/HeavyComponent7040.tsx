'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7040<T> = T extends (infer U)[]
  ? DeepReadonlyArray7040<U>
  : T extends object
  ? DeepReadonlyObject7040<T>
  : T;

interface DeepReadonlyArray7040<T> extends ReadonlyArray<DeepReadonly7040<T>> {}

type DeepReadonlyObject7040<T> = {
  readonly [P in keyof T]: DeepReadonly7040<T[P]>;
};

type UnionToIntersection7040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7040<T> = UnionToIntersection7040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7040<T extends unknown[], V> = [...T, V];

type TuplifyUnion7040<T, L = LastOf7040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7040<TuplifyUnion7040<Exclude<T, L>>, L>;

type DeepPartial7040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7040<T[P]> }
  : T;

type Paths7040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7040<K, Paths7040<T[K], Prev7040[D]>> : never }[keyof T]
  : never;

type Prev7040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7040 {
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

type ConfigPaths7040 = Paths7040<NestedConfig7040>;

interface HeavyProps7040 {
  config: DeepPartial7040<NestedConfig7040>;
  path?: ConfigPaths7040;
}

const HeavyComponent7040 = memo(function HeavyComponent7040({ config }: HeavyProps7040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7040.displayName = 'HeavyComponent7040';
export default HeavyComponent7040;

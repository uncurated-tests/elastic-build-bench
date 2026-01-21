'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7596<T> = T extends (infer U)[]
  ? DeepReadonlyArray7596<U>
  : T extends object
  ? DeepReadonlyObject7596<T>
  : T;

interface DeepReadonlyArray7596<T> extends ReadonlyArray<DeepReadonly7596<T>> {}

type DeepReadonlyObject7596<T> = {
  readonly [P in keyof T]: DeepReadonly7596<T[P]>;
};

type UnionToIntersection7596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7596<T> = UnionToIntersection7596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7596<T extends unknown[], V> = [...T, V];

type TuplifyUnion7596<T, L = LastOf7596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7596<TuplifyUnion7596<Exclude<T, L>>, L>;

type DeepPartial7596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7596<T[P]> }
  : T;

type Paths7596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7596<K, Paths7596<T[K], Prev7596[D]>> : never }[keyof T]
  : never;

type Prev7596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7596 {
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

type ConfigPaths7596 = Paths7596<NestedConfig7596>;

interface HeavyProps7596 {
  config: DeepPartial7596<NestedConfig7596>;
  path?: ConfigPaths7596;
}

const HeavyComponent7596 = memo(function HeavyComponent7596({ config }: HeavyProps7596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7596.displayName = 'HeavyComponent7596';
export default HeavyComponent7596;

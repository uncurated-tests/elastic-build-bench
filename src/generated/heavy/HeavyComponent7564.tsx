'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7564<T> = T extends (infer U)[]
  ? DeepReadonlyArray7564<U>
  : T extends object
  ? DeepReadonlyObject7564<T>
  : T;

interface DeepReadonlyArray7564<T> extends ReadonlyArray<DeepReadonly7564<T>> {}

type DeepReadonlyObject7564<T> = {
  readonly [P in keyof T]: DeepReadonly7564<T[P]>;
};

type UnionToIntersection7564<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7564<T> = UnionToIntersection7564<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7564<T extends unknown[], V> = [...T, V];

type TuplifyUnion7564<T, L = LastOf7564<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7564<TuplifyUnion7564<Exclude<T, L>>, L>;

type DeepPartial7564<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7564<T[P]> }
  : T;

type Paths7564<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7564<K, Paths7564<T[K], Prev7564[D]>> : never }[keyof T]
  : never;

type Prev7564 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7564<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7564 {
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

type ConfigPaths7564 = Paths7564<NestedConfig7564>;

interface HeavyProps7564 {
  config: DeepPartial7564<NestedConfig7564>;
  path?: ConfigPaths7564;
}

const HeavyComponent7564 = memo(function HeavyComponent7564({ config }: HeavyProps7564) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7564) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7564 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7564: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7564.displayName = 'HeavyComponent7564';
export default HeavyComponent7564;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7166<T> = T extends (infer U)[]
  ? DeepReadonlyArray7166<U>
  : T extends object
  ? DeepReadonlyObject7166<T>
  : T;

interface DeepReadonlyArray7166<T> extends ReadonlyArray<DeepReadonly7166<T>> {}

type DeepReadonlyObject7166<T> = {
  readonly [P in keyof T]: DeepReadonly7166<T[P]>;
};

type UnionToIntersection7166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7166<T> = UnionToIntersection7166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7166<T extends unknown[], V> = [...T, V];

type TuplifyUnion7166<T, L = LastOf7166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7166<TuplifyUnion7166<Exclude<T, L>>, L>;

type DeepPartial7166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7166<T[P]> }
  : T;

type Paths7166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7166<K, Paths7166<T[K], Prev7166[D]>> : never }[keyof T]
  : never;

type Prev7166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7166 {
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

type ConfigPaths7166 = Paths7166<NestedConfig7166>;

interface HeavyProps7166 {
  config: DeepPartial7166<NestedConfig7166>;
  path?: ConfigPaths7166;
}

const HeavyComponent7166 = memo(function HeavyComponent7166({ config }: HeavyProps7166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7166.displayName = 'HeavyComponent7166';
export default HeavyComponent7166;

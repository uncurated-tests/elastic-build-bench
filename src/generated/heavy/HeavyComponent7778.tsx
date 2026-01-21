'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7778<T> = T extends (infer U)[]
  ? DeepReadonlyArray7778<U>
  : T extends object
  ? DeepReadonlyObject7778<T>
  : T;

interface DeepReadonlyArray7778<T> extends ReadonlyArray<DeepReadonly7778<T>> {}

type DeepReadonlyObject7778<T> = {
  readonly [P in keyof T]: DeepReadonly7778<T[P]>;
};

type UnionToIntersection7778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7778<T> = UnionToIntersection7778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7778<T extends unknown[], V> = [...T, V];

type TuplifyUnion7778<T, L = LastOf7778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7778<TuplifyUnion7778<Exclude<T, L>>, L>;

type DeepPartial7778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7778<T[P]> }
  : T;

type Paths7778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7778<K, Paths7778<T[K], Prev7778[D]>> : never }[keyof T]
  : never;

type Prev7778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7778 {
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

type ConfigPaths7778 = Paths7778<NestedConfig7778>;

interface HeavyProps7778 {
  config: DeepPartial7778<NestedConfig7778>;
  path?: ConfigPaths7778;
}

const HeavyComponent7778 = memo(function HeavyComponent7778({ config }: HeavyProps7778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7778.displayName = 'HeavyComponent7778';
export default HeavyComponent7778;

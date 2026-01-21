'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7149<T> = T extends (infer U)[]
  ? DeepReadonlyArray7149<U>
  : T extends object
  ? DeepReadonlyObject7149<T>
  : T;

interface DeepReadonlyArray7149<T> extends ReadonlyArray<DeepReadonly7149<T>> {}

type DeepReadonlyObject7149<T> = {
  readonly [P in keyof T]: DeepReadonly7149<T[P]>;
};

type UnionToIntersection7149<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7149<T> = UnionToIntersection7149<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7149<T extends unknown[], V> = [...T, V];

type TuplifyUnion7149<T, L = LastOf7149<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7149<TuplifyUnion7149<Exclude<T, L>>, L>;

type DeepPartial7149<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7149<T[P]> }
  : T;

type Paths7149<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7149<K, Paths7149<T[K], Prev7149[D]>> : never }[keyof T]
  : never;

type Prev7149 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7149<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7149 {
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

type ConfigPaths7149 = Paths7149<NestedConfig7149>;

interface HeavyProps7149 {
  config: DeepPartial7149<NestedConfig7149>;
  path?: ConfigPaths7149;
}

const HeavyComponent7149 = memo(function HeavyComponent7149({ config }: HeavyProps7149) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7149) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7149 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7149: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7149.displayName = 'HeavyComponent7149';
export default HeavyComponent7149;

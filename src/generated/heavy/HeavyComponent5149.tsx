'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5149<T> = T extends (infer U)[]
  ? DeepReadonlyArray5149<U>
  : T extends object
  ? DeepReadonlyObject5149<T>
  : T;

interface DeepReadonlyArray5149<T> extends ReadonlyArray<DeepReadonly5149<T>> {}

type DeepReadonlyObject5149<T> = {
  readonly [P in keyof T]: DeepReadonly5149<T[P]>;
};

type UnionToIntersection5149<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5149<T> = UnionToIntersection5149<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5149<T extends unknown[], V> = [...T, V];

type TuplifyUnion5149<T, L = LastOf5149<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5149<TuplifyUnion5149<Exclude<T, L>>, L>;

type DeepPartial5149<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5149<T[P]> }
  : T;

type Paths5149<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5149<K, Paths5149<T[K], Prev5149[D]>> : never }[keyof T]
  : never;

type Prev5149 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5149<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5149 {
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

type ConfigPaths5149 = Paths5149<NestedConfig5149>;

interface HeavyProps5149 {
  config: DeepPartial5149<NestedConfig5149>;
  path?: ConfigPaths5149;
}

const HeavyComponent5149 = memo(function HeavyComponent5149({ config }: HeavyProps5149) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5149) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5149 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5149: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5149.displayName = 'HeavyComponent5149';
export default HeavyComponent5149;

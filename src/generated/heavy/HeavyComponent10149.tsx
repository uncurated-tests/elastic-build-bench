'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10149<T> = T extends (infer U)[]
  ? DeepReadonlyArray10149<U>
  : T extends object
  ? DeepReadonlyObject10149<T>
  : T;

interface DeepReadonlyArray10149<T> extends ReadonlyArray<DeepReadonly10149<T>> {}

type DeepReadonlyObject10149<T> = {
  readonly [P in keyof T]: DeepReadonly10149<T[P]>;
};

type UnionToIntersection10149<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10149<T> = UnionToIntersection10149<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10149<T extends unknown[], V> = [...T, V];

type TuplifyUnion10149<T, L = LastOf10149<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10149<TuplifyUnion10149<Exclude<T, L>>, L>;

type DeepPartial10149<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10149<T[P]> }
  : T;

type Paths10149<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10149<K, Paths10149<T[K], Prev10149[D]>> : never }[keyof T]
  : never;

type Prev10149 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10149<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10149 {
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

type ConfigPaths10149 = Paths10149<NestedConfig10149>;

interface HeavyProps10149 {
  config: DeepPartial10149<NestedConfig10149>;
  path?: ConfigPaths10149;
}

const HeavyComponent10149 = memo(function HeavyComponent10149({ config }: HeavyProps10149) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10149) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10149 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10149: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10149.displayName = 'HeavyComponent10149';
export default HeavyComponent10149;

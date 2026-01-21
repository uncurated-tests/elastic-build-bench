'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10891<T> = T extends (infer U)[]
  ? DeepReadonlyArray10891<U>
  : T extends object
  ? DeepReadonlyObject10891<T>
  : T;

interface DeepReadonlyArray10891<T> extends ReadonlyArray<DeepReadonly10891<T>> {}

type DeepReadonlyObject10891<T> = {
  readonly [P in keyof T]: DeepReadonly10891<T[P]>;
};

type UnionToIntersection10891<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10891<T> = UnionToIntersection10891<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10891<T extends unknown[], V> = [...T, V];

type TuplifyUnion10891<T, L = LastOf10891<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10891<TuplifyUnion10891<Exclude<T, L>>, L>;

type DeepPartial10891<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10891<T[P]> }
  : T;

type Paths10891<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10891<K, Paths10891<T[K], Prev10891[D]>> : never }[keyof T]
  : never;

type Prev10891 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10891<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10891 {
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

type ConfigPaths10891 = Paths10891<NestedConfig10891>;

interface HeavyProps10891 {
  config: DeepPartial10891<NestedConfig10891>;
  path?: ConfigPaths10891;
}

const HeavyComponent10891 = memo(function HeavyComponent10891({ config }: HeavyProps10891) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10891) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10891 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10891: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10891.displayName = 'HeavyComponent10891';
export default HeavyComponent10891;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10147<T> = T extends (infer U)[]
  ? DeepReadonlyArray10147<U>
  : T extends object
  ? DeepReadonlyObject10147<T>
  : T;

interface DeepReadonlyArray10147<T> extends ReadonlyArray<DeepReadonly10147<T>> {}

type DeepReadonlyObject10147<T> = {
  readonly [P in keyof T]: DeepReadonly10147<T[P]>;
};

type UnionToIntersection10147<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10147<T> = UnionToIntersection10147<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10147<T extends unknown[], V> = [...T, V];

type TuplifyUnion10147<T, L = LastOf10147<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10147<TuplifyUnion10147<Exclude<T, L>>, L>;

type DeepPartial10147<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10147<T[P]> }
  : T;

type Paths10147<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10147<K, Paths10147<T[K], Prev10147[D]>> : never }[keyof T]
  : never;

type Prev10147 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10147<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10147 {
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

type ConfigPaths10147 = Paths10147<NestedConfig10147>;

interface HeavyProps10147 {
  config: DeepPartial10147<NestedConfig10147>;
  path?: ConfigPaths10147;
}

const HeavyComponent10147 = memo(function HeavyComponent10147({ config }: HeavyProps10147) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10147) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10147 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10147: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10147.displayName = 'HeavyComponent10147';
export default HeavyComponent10147;

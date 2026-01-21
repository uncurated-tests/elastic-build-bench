'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10969<T> = T extends (infer U)[]
  ? DeepReadonlyArray10969<U>
  : T extends object
  ? DeepReadonlyObject10969<T>
  : T;

interface DeepReadonlyArray10969<T> extends ReadonlyArray<DeepReadonly10969<T>> {}

type DeepReadonlyObject10969<T> = {
  readonly [P in keyof T]: DeepReadonly10969<T[P]>;
};

type UnionToIntersection10969<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10969<T> = UnionToIntersection10969<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10969<T extends unknown[], V> = [...T, V];

type TuplifyUnion10969<T, L = LastOf10969<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10969<TuplifyUnion10969<Exclude<T, L>>, L>;

type DeepPartial10969<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10969<T[P]> }
  : T;

type Paths10969<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10969<K, Paths10969<T[K], Prev10969[D]>> : never }[keyof T]
  : never;

type Prev10969 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10969<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10969 {
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

type ConfigPaths10969 = Paths10969<NestedConfig10969>;

interface HeavyProps10969 {
  config: DeepPartial10969<NestedConfig10969>;
  path?: ConfigPaths10969;
}

const HeavyComponent10969 = memo(function HeavyComponent10969({ config }: HeavyProps10969) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10969) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10969 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10969: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10969.displayName = 'HeavyComponent10969';
export default HeavyComponent10969;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10803<T> = T extends (infer U)[]
  ? DeepReadonlyArray10803<U>
  : T extends object
  ? DeepReadonlyObject10803<T>
  : T;

interface DeepReadonlyArray10803<T> extends ReadonlyArray<DeepReadonly10803<T>> {}

type DeepReadonlyObject10803<T> = {
  readonly [P in keyof T]: DeepReadonly10803<T[P]>;
};

type UnionToIntersection10803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10803<T> = UnionToIntersection10803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10803<T extends unknown[], V> = [...T, V];

type TuplifyUnion10803<T, L = LastOf10803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10803<TuplifyUnion10803<Exclude<T, L>>, L>;

type DeepPartial10803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10803<T[P]> }
  : T;

type Paths10803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10803<K, Paths10803<T[K], Prev10803[D]>> : never }[keyof T]
  : never;

type Prev10803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10803 {
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

type ConfigPaths10803 = Paths10803<NestedConfig10803>;

interface HeavyProps10803 {
  config: DeepPartial10803<NestedConfig10803>;
  path?: ConfigPaths10803;
}

const HeavyComponent10803 = memo(function HeavyComponent10803({ config }: HeavyProps10803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10803.displayName = 'HeavyComponent10803';
export default HeavyComponent10803;

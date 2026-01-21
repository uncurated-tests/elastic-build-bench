'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10470<T> = T extends (infer U)[]
  ? DeepReadonlyArray10470<U>
  : T extends object
  ? DeepReadonlyObject10470<T>
  : T;

interface DeepReadonlyArray10470<T> extends ReadonlyArray<DeepReadonly10470<T>> {}

type DeepReadonlyObject10470<T> = {
  readonly [P in keyof T]: DeepReadonly10470<T[P]>;
};

type UnionToIntersection10470<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10470<T> = UnionToIntersection10470<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10470<T extends unknown[], V> = [...T, V];

type TuplifyUnion10470<T, L = LastOf10470<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10470<TuplifyUnion10470<Exclude<T, L>>, L>;

type DeepPartial10470<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10470<T[P]> }
  : T;

type Paths10470<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10470<K, Paths10470<T[K], Prev10470[D]>> : never }[keyof T]
  : never;

type Prev10470 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10470<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10470 {
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

type ConfigPaths10470 = Paths10470<NestedConfig10470>;

interface HeavyProps10470 {
  config: DeepPartial10470<NestedConfig10470>;
  path?: ConfigPaths10470;
}

const HeavyComponent10470 = memo(function HeavyComponent10470({ config }: HeavyProps10470) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10470) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10470 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10470: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10470.displayName = 'HeavyComponent10470';
export default HeavyComponent10470;

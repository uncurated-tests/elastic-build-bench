'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10663<T> = T extends (infer U)[]
  ? DeepReadonlyArray10663<U>
  : T extends object
  ? DeepReadonlyObject10663<T>
  : T;

interface DeepReadonlyArray10663<T> extends ReadonlyArray<DeepReadonly10663<T>> {}

type DeepReadonlyObject10663<T> = {
  readonly [P in keyof T]: DeepReadonly10663<T[P]>;
};

type UnionToIntersection10663<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10663<T> = UnionToIntersection10663<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10663<T extends unknown[], V> = [...T, V];

type TuplifyUnion10663<T, L = LastOf10663<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10663<TuplifyUnion10663<Exclude<T, L>>, L>;

type DeepPartial10663<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10663<T[P]> }
  : T;

type Paths10663<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10663<K, Paths10663<T[K], Prev10663[D]>> : never }[keyof T]
  : never;

type Prev10663 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10663<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10663 {
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

type ConfigPaths10663 = Paths10663<NestedConfig10663>;

interface HeavyProps10663 {
  config: DeepPartial10663<NestedConfig10663>;
  path?: ConfigPaths10663;
}

const HeavyComponent10663 = memo(function HeavyComponent10663({ config }: HeavyProps10663) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10663) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10663 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10663: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10663.displayName = 'HeavyComponent10663';
export default HeavyComponent10663;

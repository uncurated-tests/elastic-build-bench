'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10701<T> = T extends (infer U)[]
  ? DeepReadonlyArray10701<U>
  : T extends object
  ? DeepReadonlyObject10701<T>
  : T;

interface DeepReadonlyArray10701<T> extends ReadonlyArray<DeepReadonly10701<T>> {}

type DeepReadonlyObject10701<T> = {
  readonly [P in keyof T]: DeepReadonly10701<T[P]>;
};

type UnionToIntersection10701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10701<T> = UnionToIntersection10701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10701<T extends unknown[], V> = [...T, V];

type TuplifyUnion10701<T, L = LastOf10701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10701<TuplifyUnion10701<Exclude<T, L>>, L>;

type DeepPartial10701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10701<T[P]> }
  : T;

type Paths10701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10701<K, Paths10701<T[K], Prev10701[D]>> : never }[keyof T]
  : never;

type Prev10701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10701 {
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

type ConfigPaths10701 = Paths10701<NestedConfig10701>;

interface HeavyProps10701 {
  config: DeepPartial10701<NestedConfig10701>;
  path?: ConfigPaths10701;
}

const HeavyComponent10701 = memo(function HeavyComponent10701({ config }: HeavyProps10701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10701.displayName = 'HeavyComponent10701';
export default HeavyComponent10701;

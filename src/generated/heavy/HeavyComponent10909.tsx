'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10909<T> = T extends (infer U)[]
  ? DeepReadonlyArray10909<U>
  : T extends object
  ? DeepReadonlyObject10909<T>
  : T;

interface DeepReadonlyArray10909<T> extends ReadonlyArray<DeepReadonly10909<T>> {}

type DeepReadonlyObject10909<T> = {
  readonly [P in keyof T]: DeepReadonly10909<T[P]>;
};

type UnionToIntersection10909<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10909<T> = UnionToIntersection10909<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10909<T extends unknown[], V> = [...T, V];

type TuplifyUnion10909<T, L = LastOf10909<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10909<TuplifyUnion10909<Exclude<T, L>>, L>;

type DeepPartial10909<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10909<T[P]> }
  : T;

type Paths10909<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10909<K, Paths10909<T[K], Prev10909[D]>> : never }[keyof T]
  : never;

type Prev10909 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10909<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10909 {
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

type ConfigPaths10909 = Paths10909<NestedConfig10909>;

interface HeavyProps10909 {
  config: DeepPartial10909<NestedConfig10909>;
  path?: ConfigPaths10909;
}

const HeavyComponent10909 = memo(function HeavyComponent10909({ config }: HeavyProps10909) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10909) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10909 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10909: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10909.displayName = 'HeavyComponent10909';
export default HeavyComponent10909;

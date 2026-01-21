'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10914<T> = T extends (infer U)[]
  ? DeepReadonlyArray10914<U>
  : T extends object
  ? DeepReadonlyObject10914<T>
  : T;

interface DeepReadonlyArray10914<T> extends ReadonlyArray<DeepReadonly10914<T>> {}

type DeepReadonlyObject10914<T> = {
  readonly [P in keyof T]: DeepReadonly10914<T[P]>;
};

type UnionToIntersection10914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10914<T> = UnionToIntersection10914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10914<T extends unknown[], V> = [...T, V];

type TuplifyUnion10914<T, L = LastOf10914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10914<TuplifyUnion10914<Exclude<T, L>>, L>;

type DeepPartial10914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10914<T[P]> }
  : T;

type Paths10914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10914<K, Paths10914<T[K], Prev10914[D]>> : never }[keyof T]
  : never;

type Prev10914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10914 {
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

type ConfigPaths10914 = Paths10914<NestedConfig10914>;

interface HeavyProps10914 {
  config: DeepPartial10914<NestedConfig10914>;
  path?: ConfigPaths10914;
}

const HeavyComponent10914 = memo(function HeavyComponent10914({ config }: HeavyProps10914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10914.displayName = 'HeavyComponent10914';
export default HeavyComponent10914;

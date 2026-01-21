'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10851<T> = T extends (infer U)[]
  ? DeepReadonlyArray10851<U>
  : T extends object
  ? DeepReadonlyObject10851<T>
  : T;

interface DeepReadonlyArray10851<T> extends ReadonlyArray<DeepReadonly10851<T>> {}

type DeepReadonlyObject10851<T> = {
  readonly [P in keyof T]: DeepReadonly10851<T[P]>;
};

type UnionToIntersection10851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10851<T> = UnionToIntersection10851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10851<T extends unknown[], V> = [...T, V];

type TuplifyUnion10851<T, L = LastOf10851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10851<TuplifyUnion10851<Exclude<T, L>>, L>;

type DeepPartial10851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10851<T[P]> }
  : T;

type Paths10851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10851<K, Paths10851<T[K], Prev10851[D]>> : never }[keyof T]
  : never;

type Prev10851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10851 {
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

type ConfigPaths10851 = Paths10851<NestedConfig10851>;

interface HeavyProps10851 {
  config: DeepPartial10851<NestedConfig10851>;
  path?: ConfigPaths10851;
}

const HeavyComponent10851 = memo(function HeavyComponent10851({ config }: HeavyProps10851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10851.displayName = 'HeavyComponent10851';
export default HeavyComponent10851;

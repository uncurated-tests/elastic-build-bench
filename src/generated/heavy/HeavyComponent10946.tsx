'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10946<T> = T extends (infer U)[]
  ? DeepReadonlyArray10946<U>
  : T extends object
  ? DeepReadonlyObject10946<T>
  : T;

interface DeepReadonlyArray10946<T> extends ReadonlyArray<DeepReadonly10946<T>> {}

type DeepReadonlyObject10946<T> = {
  readonly [P in keyof T]: DeepReadonly10946<T[P]>;
};

type UnionToIntersection10946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10946<T> = UnionToIntersection10946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10946<T extends unknown[], V> = [...T, V];

type TuplifyUnion10946<T, L = LastOf10946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10946<TuplifyUnion10946<Exclude<T, L>>, L>;

type DeepPartial10946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10946<T[P]> }
  : T;

type Paths10946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10946<K, Paths10946<T[K], Prev10946[D]>> : never }[keyof T]
  : never;

type Prev10946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10946 {
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

type ConfigPaths10946 = Paths10946<NestedConfig10946>;

interface HeavyProps10946 {
  config: DeepPartial10946<NestedConfig10946>;
  path?: ConfigPaths10946;
}

const HeavyComponent10946 = memo(function HeavyComponent10946({ config }: HeavyProps10946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10946.displayName = 'HeavyComponent10946';
export default HeavyComponent10946;

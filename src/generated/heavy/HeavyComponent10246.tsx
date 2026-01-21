'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10246<T> = T extends (infer U)[]
  ? DeepReadonlyArray10246<U>
  : T extends object
  ? DeepReadonlyObject10246<T>
  : T;

interface DeepReadonlyArray10246<T> extends ReadonlyArray<DeepReadonly10246<T>> {}

type DeepReadonlyObject10246<T> = {
  readonly [P in keyof T]: DeepReadonly10246<T[P]>;
};

type UnionToIntersection10246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10246<T> = UnionToIntersection10246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10246<T extends unknown[], V> = [...T, V];

type TuplifyUnion10246<T, L = LastOf10246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10246<TuplifyUnion10246<Exclude<T, L>>, L>;

type DeepPartial10246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10246<T[P]> }
  : T;

type Paths10246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10246<K, Paths10246<T[K], Prev10246[D]>> : never }[keyof T]
  : never;

type Prev10246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10246 {
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

type ConfigPaths10246 = Paths10246<NestedConfig10246>;

interface HeavyProps10246 {
  config: DeepPartial10246<NestedConfig10246>;
  path?: ConfigPaths10246;
}

const HeavyComponent10246 = memo(function HeavyComponent10246({ config }: HeavyProps10246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10246.displayName = 'HeavyComponent10246';
export default HeavyComponent10246;

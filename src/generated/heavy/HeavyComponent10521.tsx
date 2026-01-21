'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10521<T> = T extends (infer U)[]
  ? DeepReadonlyArray10521<U>
  : T extends object
  ? DeepReadonlyObject10521<T>
  : T;

interface DeepReadonlyArray10521<T> extends ReadonlyArray<DeepReadonly10521<T>> {}

type DeepReadonlyObject10521<T> = {
  readonly [P in keyof T]: DeepReadonly10521<T[P]>;
};

type UnionToIntersection10521<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10521<T> = UnionToIntersection10521<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10521<T extends unknown[], V> = [...T, V];

type TuplifyUnion10521<T, L = LastOf10521<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10521<TuplifyUnion10521<Exclude<T, L>>, L>;

type DeepPartial10521<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10521<T[P]> }
  : T;

type Paths10521<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10521<K, Paths10521<T[K], Prev10521[D]>> : never }[keyof T]
  : never;

type Prev10521 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10521<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10521 {
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

type ConfigPaths10521 = Paths10521<NestedConfig10521>;

interface HeavyProps10521 {
  config: DeepPartial10521<NestedConfig10521>;
  path?: ConfigPaths10521;
}

const HeavyComponent10521 = memo(function HeavyComponent10521({ config }: HeavyProps10521) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10521) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10521 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10521: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10521.displayName = 'HeavyComponent10521';
export default HeavyComponent10521;

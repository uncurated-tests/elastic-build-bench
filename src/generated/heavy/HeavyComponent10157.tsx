'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10157<T> = T extends (infer U)[]
  ? DeepReadonlyArray10157<U>
  : T extends object
  ? DeepReadonlyObject10157<T>
  : T;

interface DeepReadonlyArray10157<T> extends ReadonlyArray<DeepReadonly10157<T>> {}

type DeepReadonlyObject10157<T> = {
  readonly [P in keyof T]: DeepReadonly10157<T[P]>;
};

type UnionToIntersection10157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10157<T> = UnionToIntersection10157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10157<T extends unknown[], V> = [...T, V];

type TuplifyUnion10157<T, L = LastOf10157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10157<TuplifyUnion10157<Exclude<T, L>>, L>;

type DeepPartial10157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10157<T[P]> }
  : T;

type Paths10157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10157<K, Paths10157<T[K], Prev10157[D]>> : never }[keyof T]
  : never;

type Prev10157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10157 {
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

type ConfigPaths10157 = Paths10157<NestedConfig10157>;

interface HeavyProps10157 {
  config: DeepPartial10157<NestedConfig10157>;
  path?: ConfigPaths10157;
}

const HeavyComponent10157 = memo(function HeavyComponent10157({ config }: HeavyProps10157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10157.displayName = 'HeavyComponent10157';
export default HeavyComponent10157;

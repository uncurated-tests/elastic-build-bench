'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10597<T> = T extends (infer U)[]
  ? DeepReadonlyArray10597<U>
  : T extends object
  ? DeepReadonlyObject10597<T>
  : T;

interface DeepReadonlyArray10597<T> extends ReadonlyArray<DeepReadonly10597<T>> {}

type DeepReadonlyObject10597<T> = {
  readonly [P in keyof T]: DeepReadonly10597<T[P]>;
};

type UnionToIntersection10597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10597<T> = UnionToIntersection10597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10597<T extends unknown[], V> = [...T, V];

type TuplifyUnion10597<T, L = LastOf10597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10597<TuplifyUnion10597<Exclude<T, L>>, L>;

type DeepPartial10597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10597<T[P]> }
  : T;

type Paths10597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10597<K, Paths10597<T[K], Prev10597[D]>> : never }[keyof T]
  : never;

type Prev10597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10597 {
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

type ConfigPaths10597 = Paths10597<NestedConfig10597>;

interface HeavyProps10597 {
  config: DeepPartial10597<NestedConfig10597>;
  path?: ConfigPaths10597;
}

const HeavyComponent10597 = memo(function HeavyComponent10597({ config }: HeavyProps10597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10597.displayName = 'HeavyComponent10597';
export default HeavyComponent10597;

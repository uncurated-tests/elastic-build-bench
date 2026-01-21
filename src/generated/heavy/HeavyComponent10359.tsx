'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10359<T> = T extends (infer U)[]
  ? DeepReadonlyArray10359<U>
  : T extends object
  ? DeepReadonlyObject10359<T>
  : T;

interface DeepReadonlyArray10359<T> extends ReadonlyArray<DeepReadonly10359<T>> {}

type DeepReadonlyObject10359<T> = {
  readonly [P in keyof T]: DeepReadonly10359<T[P]>;
};

type UnionToIntersection10359<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10359<T> = UnionToIntersection10359<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10359<T extends unknown[], V> = [...T, V];

type TuplifyUnion10359<T, L = LastOf10359<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10359<TuplifyUnion10359<Exclude<T, L>>, L>;

type DeepPartial10359<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10359<T[P]> }
  : T;

type Paths10359<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10359<K, Paths10359<T[K], Prev10359[D]>> : never }[keyof T]
  : never;

type Prev10359 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10359<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10359 {
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

type ConfigPaths10359 = Paths10359<NestedConfig10359>;

interface HeavyProps10359 {
  config: DeepPartial10359<NestedConfig10359>;
  path?: ConfigPaths10359;
}

const HeavyComponent10359 = memo(function HeavyComponent10359({ config }: HeavyProps10359) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10359) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10359 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10359: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10359.displayName = 'HeavyComponent10359';
export default HeavyComponent10359;

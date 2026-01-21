'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10138<T> = T extends (infer U)[]
  ? DeepReadonlyArray10138<U>
  : T extends object
  ? DeepReadonlyObject10138<T>
  : T;

interface DeepReadonlyArray10138<T> extends ReadonlyArray<DeepReadonly10138<T>> {}

type DeepReadonlyObject10138<T> = {
  readonly [P in keyof T]: DeepReadonly10138<T[P]>;
};

type UnionToIntersection10138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10138<T> = UnionToIntersection10138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10138<T extends unknown[], V> = [...T, V];

type TuplifyUnion10138<T, L = LastOf10138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10138<TuplifyUnion10138<Exclude<T, L>>, L>;

type DeepPartial10138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10138<T[P]> }
  : T;

type Paths10138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10138<K, Paths10138<T[K], Prev10138[D]>> : never }[keyof T]
  : never;

type Prev10138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10138 {
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

type ConfigPaths10138 = Paths10138<NestedConfig10138>;

interface HeavyProps10138 {
  config: DeepPartial10138<NestedConfig10138>;
  path?: ConfigPaths10138;
}

const HeavyComponent10138 = memo(function HeavyComponent10138({ config }: HeavyProps10138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10138.displayName = 'HeavyComponent10138';
export default HeavyComponent10138;

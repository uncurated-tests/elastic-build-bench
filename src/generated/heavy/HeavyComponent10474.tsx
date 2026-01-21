'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10474<T> = T extends (infer U)[]
  ? DeepReadonlyArray10474<U>
  : T extends object
  ? DeepReadonlyObject10474<T>
  : T;

interface DeepReadonlyArray10474<T> extends ReadonlyArray<DeepReadonly10474<T>> {}

type DeepReadonlyObject10474<T> = {
  readonly [P in keyof T]: DeepReadonly10474<T[P]>;
};

type UnionToIntersection10474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10474<T> = UnionToIntersection10474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10474<T extends unknown[], V> = [...T, V];

type TuplifyUnion10474<T, L = LastOf10474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10474<TuplifyUnion10474<Exclude<T, L>>, L>;

type DeepPartial10474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10474<T[P]> }
  : T;

type Paths10474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10474<K, Paths10474<T[K], Prev10474[D]>> : never }[keyof T]
  : never;

type Prev10474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10474 {
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

type ConfigPaths10474 = Paths10474<NestedConfig10474>;

interface HeavyProps10474 {
  config: DeepPartial10474<NestedConfig10474>;
  path?: ConfigPaths10474;
}

const HeavyComponent10474 = memo(function HeavyComponent10474({ config }: HeavyProps10474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10474.displayName = 'HeavyComponent10474';
export default HeavyComponent10474;

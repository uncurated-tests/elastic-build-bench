'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10097<T> = T extends (infer U)[]
  ? DeepReadonlyArray10097<U>
  : T extends object
  ? DeepReadonlyObject10097<T>
  : T;

interface DeepReadonlyArray10097<T> extends ReadonlyArray<DeepReadonly10097<T>> {}

type DeepReadonlyObject10097<T> = {
  readonly [P in keyof T]: DeepReadonly10097<T[P]>;
};

type UnionToIntersection10097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10097<T> = UnionToIntersection10097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10097<T extends unknown[], V> = [...T, V];

type TuplifyUnion10097<T, L = LastOf10097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10097<TuplifyUnion10097<Exclude<T, L>>, L>;

type DeepPartial10097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10097<T[P]> }
  : T;

type Paths10097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10097<K, Paths10097<T[K], Prev10097[D]>> : never }[keyof T]
  : never;

type Prev10097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10097 {
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

type ConfigPaths10097 = Paths10097<NestedConfig10097>;

interface HeavyProps10097 {
  config: DeepPartial10097<NestedConfig10097>;
  path?: ConfigPaths10097;
}

const HeavyComponent10097 = memo(function HeavyComponent10097({ config }: HeavyProps10097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10097.displayName = 'HeavyComponent10097';
export default HeavyComponent10097;

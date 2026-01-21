'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10122<T> = T extends (infer U)[]
  ? DeepReadonlyArray10122<U>
  : T extends object
  ? DeepReadonlyObject10122<T>
  : T;

interface DeepReadonlyArray10122<T> extends ReadonlyArray<DeepReadonly10122<T>> {}

type DeepReadonlyObject10122<T> = {
  readonly [P in keyof T]: DeepReadonly10122<T[P]>;
};

type UnionToIntersection10122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10122<T> = UnionToIntersection10122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10122<T extends unknown[], V> = [...T, V];

type TuplifyUnion10122<T, L = LastOf10122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10122<TuplifyUnion10122<Exclude<T, L>>, L>;

type DeepPartial10122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10122<T[P]> }
  : T;

type Paths10122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10122<K, Paths10122<T[K], Prev10122[D]>> : never }[keyof T]
  : never;

type Prev10122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10122 {
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

type ConfigPaths10122 = Paths10122<NestedConfig10122>;

interface HeavyProps10122 {
  config: DeepPartial10122<NestedConfig10122>;
  path?: ConfigPaths10122;
}

const HeavyComponent10122 = memo(function HeavyComponent10122({ config }: HeavyProps10122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10122.displayName = 'HeavyComponent10122';
export default HeavyComponent10122;

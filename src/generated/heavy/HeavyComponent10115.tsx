'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10115<T> = T extends (infer U)[]
  ? DeepReadonlyArray10115<U>
  : T extends object
  ? DeepReadonlyObject10115<T>
  : T;

interface DeepReadonlyArray10115<T> extends ReadonlyArray<DeepReadonly10115<T>> {}

type DeepReadonlyObject10115<T> = {
  readonly [P in keyof T]: DeepReadonly10115<T[P]>;
};

type UnionToIntersection10115<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10115<T> = UnionToIntersection10115<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10115<T extends unknown[], V> = [...T, V];

type TuplifyUnion10115<T, L = LastOf10115<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10115<TuplifyUnion10115<Exclude<T, L>>, L>;

type DeepPartial10115<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10115<T[P]> }
  : T;

type Paths10115<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10115<K, Paths10115<T[K], Prev10115[D]>> : never }[keyof T]
  : never;

type Prev10115 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10115<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10115 {
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

type ConfigPaths10115 = Paths10115<NestedConfig10115>;

interface HeavyProps10115 {
  config: DeepPartial10115<NestedConfig10115>;
  path?: ConfigPaths10115;
}

const HeavyComponent10115 = memo(function HeavyComponent10115({ config }: HeavyProps10115) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10115) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10115 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10115: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10115.displayName = 'HeavyComponent10115';
export default HeavyComponent10115;

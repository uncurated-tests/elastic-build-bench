'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10951<T> = T extends (infer U)[]
  ? DeepReadonlyArray10951<U>
  : T extends object
  ? DeepReadonlyObject10951<T>
  : T;

interface DeepReadonlyArray10951<T> extends ReadonlyArray<DeepReadonly10951<T>> {}

type DeepReadonlyObject10951<T> = {
  readonly [P in keyof T]: DeepReadonly10951<T[P]>;
};

type UnionToIntersection10951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10951<T> = UnionToIntersection10951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10951<T extends unknown[], V> = [...T, V];

type TuplifyUnion10951<T, L = LastOf10951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10951<TuplifyUnion10951<Exclude<T, L>>, L>;

type DeepPartial10951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10951<T[P]> }
  : T;

type Paths10951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10951<K, Paths10951<T[K], Prev10951[D]>> : never }[keyof T]
  : never;

type Prev10951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10951 {
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

type ConfigPaths10951 = Paths10951<NestedConfig10951>;

interface HeavyProps10951 {
  config: DeepPartial10951<NestedConfig10951>;
  path?: ConfigPaths10951;
}

const HeavyComponent10951 = memo(function HeavyComponent10951({ config }: HeavyProps10951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10951.displayName = 'HeavyComponent10951';
export default HeavyComponent10951;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10112<T> = T extends (infer U)[]
  ? DeepReadonlyArray10112<U>
  : T extends object
  ? DeepReadonlyObject10112<T>
  : T;

interface DeepReadonlyArray10112<T> extends ReadonlyArray<DeepReadonly10112<T>> {}

type DeepReadonlyObject10112<T> = {
  readonly [P in keyof T]: DeepReadonly10112<T[P]>;
};

type UnionToIntersection10112<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10112<T> = UnionToIntersection10112<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10112<T extends unknown[], V> = [...T, V];

type TuplifyUnion10112<T, L = LastOf10112<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10112<TuplifyUnion10112<Exclude<T, L>>, L>;

type DeepPartial10112<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10112<T[P]> }
  : T;

type Paths10112<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10112<K, Paths10112<T[K], Prev10112[D]>> : never }[keyof T]
  : never;

type Prev10112 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10112<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10112 {
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

type ConfigPaths10112 = Paths10112<NestedConfig10112>;

interface HeavyProps10112 {
  config: DeepPartial10112<NestedConfig10112>;
  path?: ConfigPaths10112;
}

const HeavyComponent10112 = memo(function HeavyComponent10112({ config }: HeavyProps10112) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10112) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10112 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10112: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10112.displayName = 'HeavyComponent10112';
export default HeavyComponent10112;

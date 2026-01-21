'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10666<T> = T extends (infer U)[]
  ? DeepReadonlyArray10666<U>
  : T extends object
  ? DeepReadonlyObject10666<T>
  : T;

interface DeepReadonlyArray10666<T> extends ReadonlyArray<DeepReadonly10666<T>> {}

type DeepReadonlyObject10666<T> = {
  readonly [P in keyof T]: DeepReadonly10666<T[P]>;
};

type UnionToIntersection10666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10666<T> = UnionToIntersection10666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10666<T extends unknown[], V> = [...T, V];

type TuplifyUnion10666<T, L = LastOf10666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10666<TuplifyUnion10666<Exclude<T, L>>, L>;

type DeepPartial10666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10666<T[P]> }
  : T;

type Paths10666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10666<K, Paths10666<T[K], Prev10666[D]>> : never }[keyof T]
  : never;

type Prev10666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10666 {
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

type ConfigPaths10666 = Paths10666<NestedConfig10666>;

interface HeavyProps10666 {
  config: DeepPartial10666<NestedConfig10666>;
  path?: ConfigPaths10666;
}

const HeavyComponent10666 = memo(function HeavyComponent10666({ config }: HeavyProps10666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10666.displayName = 'HeavyComponent10666';
export default HeavyComponent10666;

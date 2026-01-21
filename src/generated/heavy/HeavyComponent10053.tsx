'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10053<T> = T extends (infer U)[]
  ? DeepReadonlyArray10053<U>
  : T extends object
  ? DeepReadonlyObject10053<T>
  : T;

interface DeepReadonlyArray10053<T> extends ReadonlyArray<DeepReadonly10053<T>> {}

type DeepReadonlyObject10053<T> = {
  readonly [P in keyof T]: DeepReadonly10053<T[P]>;
};

type UnionToIntersection10053<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10053<T> = UnionToIntersection10053<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10053<T extends unknown[], V> = [...T, V];

type TuplifyUnion10053<T, L = LastOf10053<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10053<TuplifyUnion10053<Exclude<T, L>>, L>;

type DeepPartial10053<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10053<T[P]> }
  : T;

type Paths10053<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10053<K, Paths10053<T[K], Prev10053[D]>> : never }[keyof T]
  : never;

type Prev10053 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10053<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10053 {
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

type ConfigPaths10053 = Paths10053<NestedConfig10053>;

interface HeavyProps10053 {
  config: DeepPartial10053<NestedConfig10053>;
  path?: ConfigPaths10053;
}

const HeavyComponent10053 = memo(function HeavyComponent10053({ config }: HeavyProps10053) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10053) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10053 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10053: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10053.displayName = 'HeavyComponent10053';
export default HeavyComponent10053;

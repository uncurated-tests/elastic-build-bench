'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10401<T> = T extends (infer U)[]
  ? DeepReadonlyArray10401<U>
  : T extends object
  ? DeepReadonlyObject10401<T>
  : T;

interface DeepReadonlyArray10401<T> extends ReadonlyArray<DeepReadonly10401<T>> {}

type DeepReadonlyObject10401<T> = {
  readonly [P in keyof T]: DeepReadonly10401<T[P]>;
};

type UnionToIntersection10401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10401<T> = UnionToIntersection10401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10401<T extends unknown[], V> = [...T, V];

type TuplifyUnion10401<T, L = LastOf10401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10401<TuplifyUnion10401<Exclude<T, L>>, L>;

type DeepPartial10401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10401<T[P]> }
  : T;

type Paths10401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10401<K, Paths10401<T[K], Prev10401[D]>> : never }[keyof T]
  : never;

type Prev10401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10401 {
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

type ConfigPaths10401 = Paths10401<NestedConfig10401>;

interface HeavyProps10401 {
  config: DeepPartial10401<NestedConfig10401>;
  path?: ConfigPaths10401;
}

const HeavyComponent10401 = memo(function HeavyComponent10401({ config }: HeavyProps10401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10401.displayName = 'HeavyComponent10401';
export default HeavyComponent10401;

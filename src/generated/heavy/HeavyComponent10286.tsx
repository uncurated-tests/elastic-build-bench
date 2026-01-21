'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10286<T> = T extends (infer U)[]
  ? DeepReadonlyArray10286<U>
  : T extends object
  ? DeepReadonlyObject10286<T>
  : T;

interface DeepReadonlyArray10286<T> extends ReadonlyArray<DeepReadonly10286<T>> {}

type DeepReadonlyObject10286<T> = {
  readonly [P in keyof T]: DeepReadonly10286<T[P]>;
};

type UnionToIntersection10286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10286<T> = UnionToIntersection10286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10286<T extends unknown[], V> = [...T, V];

type TuplifyUnion10286<T, L = LastOf10286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10286<TuplifyUnion10286<Exclude<T, L>>, L>;

type DeepPartial10286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10286<T[P]> }
  : T;

type Paths10286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10286<K, Paths10286<T[K], Prev10286[D]>> : never }[keyof T]
  : never;

type Prev10286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10286 {
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

type ConfigPaths10286 = Paths10286<NestedConfig10286>;

interface HeavyProps10286 {
  config: DeepPartial10286<NestedConfig10286>;
  path?: ConfigPaths10286;
}

const HeavyComponent10286 = memo(function HeavyComponent10286({ config }: HeavyProps10286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10286.displayName = 'HeavyComponent10286';
export default HeavyComponent10286;

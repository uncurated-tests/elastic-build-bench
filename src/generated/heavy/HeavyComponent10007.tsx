'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10007<T> = T extends (infer U)[]
  ? DeepReadonlyArray10007<U>
  : T extends object
  ? DeepReadonlyObject10007<T>
  : T;

interface DeepReadonlyArray10007<T> extends ReadonlyArray<DeepReadonly10007<T>> {}

type DeepReadonlyObject10007<T> = {
  readonly [P in keyof T]: DeepReadonly10007<T[P]>;
};

type UnionToIntersection10007<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10007<T> = UnionToIntersection10007<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10007<T extends unknown[], V> = [...T, V];

type TuplifyUnion10007<T, L = LastOf10007<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10007<TuplifyUnion10007<Exclude<T, L>>, L>;

type DeepPartial10007<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10007<T[P]> }
  : T;

type Paths10007<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10007<K, Paths10007<T[K], Prev10007[D]>> : never }[keyof T]
  : never;

type Prev10007 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10007<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10007 {
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

type ConfigPaths10007 = Paths10007<NestedConfig10007>;

interface HeavyProps10007 {
  config: DeepPartial10007<NestedConfig10007>;
  path?: ConfigPaths10007;
}

const HeavyComponent10007 = memo(function HeavyComponent10007({ config }: HeavyProps10007) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10007) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10007 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10007: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10007.displayName = 'HeavyComponent10007';
export default HeavyComponent10007;

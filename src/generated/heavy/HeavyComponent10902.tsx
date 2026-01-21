'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10902<T> = T extends (infer U)[]
  ? DeepReadonlyArray10902<U>
  : T extends object
  ? DeepReadonlyObject10902<T>
  : T;

interface DeepReadonlyArray10902<T> extends ReadonlyArray<DeepReadonly10902<T>> {}

type DeepReadonlyObject10902<T> = {
  readonly [P in keyof T]: DeepReadonly10902<T[P]>;
};

type UnionToIntersection10902<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10902<T> = UnionToIntersection10902<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10902<T extends unknown[], V> = [...T, V];

type TuplifyUnion10902<T, L = LastOf10902<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10902<TuplifyUnion10902<Exclude<T, L>>, L>;

type DeepPartial10902<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10902<T[P]> }
  : T;

type Paths10902<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10902<K, Paths10902<T[K], Prev10902[D]>> : never }[keyof T]
  : never;

type Prev10902 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10902<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10902 {
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

type ConfigPaths10902 = Paths10902<NestedConfig10902>;

interface HeavyProps10902 {
  config: DeepPartial10902<NestedConfig10902>;
  path?: ConfigPaths10902;
}

const HeavyComponent10902 = memo(function HeavyComponent10902({ config }: HeavyProps10902) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10902) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10902 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10902: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10902.displayName = 'HeavyComponent10902';
export default HeavyComponent10902;

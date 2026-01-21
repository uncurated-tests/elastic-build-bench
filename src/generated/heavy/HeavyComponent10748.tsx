'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10748<T> = T extends (infer U)[]
  ? DeepReadonlyArray10748<U>
  : T extends object
  ? DeepReadonlyObject10748<T>
  : T;

interface DeepReadonlyArray10748<T> extends ReadonlyArray<DeepReadonly10748<T>> {}

type DeepReadonlyObject10748<T> = {
  readonly [P in keyof T]: DeepReadonly10748<T[P]>;
};

type UnionToIntersection10748<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10748<T> = UnionToIntersection10748<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10748<T extends unknown[], V> = [...T, V];

type TuplifyUnion10748<T, L = LastOf10748<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10748<TuplifyUnion10748<Exclude<T, L>>, L>;

type DeepPartial10748<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10748<T[P]> }
  : T;

type Paths10748<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10748<K, Paths10748<T[K], Prev10748[D]>> : never }[keyof T]
  : never;

type Prev10748 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10748<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10748 {
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

type ConfigPaths10748 = Paths10748<NestedConfig10748>;

interface HeavyProps10748 {
  config: DeepPartial10748<NestedConfig10748>;
  path?: ConfigPaths10748;
}

const HeavyComponent10748 = memo(function HeavyComponent10748({ config }: HeavyProps10748) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10748) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10748 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10748: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10748.displayName = 'HeavyComponent10748';
export default HeavyComponent10748;

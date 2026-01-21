'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10169<T> = T extends (infer U)[]
  ? DeepReadonlyArray10169<U>
  : T extends object
  ? DeepReadonlyObject10169<T>
  : T;

interface DeepReadonlyArray10169<T> extends ReadonlyArray<DeepReadonly10169<T>> {}

type DeepReadonlyObject10169<T> = {
  readonly [P in keyof T]: DeepReadonly10169<T[P]>;
};

type UnionToIntersection10169<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10169<T> = UnionToIntersection10169<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10169<T extends unknown[], V> = [...T, V];

type TuplifyUnion10169<T, L = LastOf10169<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10169<TuplifyUnion10169<Exclude<T, L>>, L>;

type DeepPartial10169<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10169<T[P]> }
  : T;

type Paths10169<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10169<K, Paths10169<T[K], Prev10169[D]>> : never }[keyof T]
  : never;

type Prev10169 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10169<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10169 {
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

type ConfigPaths10169 = Paths10169<NestedConfig10169>;

interface HeavyProps10169 {
  config: DeepPartial10169<NestedConfig10169>;
  path?: ConfigPaths10169;
}

const HeavyComponent10169 = memo(function HeavyComponent10169({ config }: HeavyProps10169) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10169) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10169 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10169: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10169.displayName = 'HeavyComponent10169';
export default HeavyComponent10169;

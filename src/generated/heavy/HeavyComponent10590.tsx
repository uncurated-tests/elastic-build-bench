'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10590<T> = T extends (infer U)[]
  ? DeepReadonlyArray10590<U>
  : T extends object
  ? DeepReadonlyObject10590<T>
  : T;

interface DeepReadonlyArray10590<T> extends ReadonlyArray<DeepReadonly10590<T>> {}

type DeepReadonlyObject10590<T> = {
  readonly [P in keyof T]: DeepReadonly10590<T[P]>;
};

type UnionToIntersection10590<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10590<T> = UnionToIntersection10590<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10590<T extends unknown[], V> = [...T, V];

type TuplifyUnion10590<T, L = LastOf10590<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10590<TuplifyUnion10590<Exclude<T, L>>, L>;

type DeepPartial10590<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10590<T[P]> }
  : T;

type Paths10590<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10590<K, Paths10590<T[K], Prev10590[D]>> : never }[keyof T]
  : never;

type Prev10590 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10590<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10590 {
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

type ConfigPaths10590 = Paths10590<NestedConfig10590>;

interface HeavyProps10590 {
  config: DeepPartial10590<NestedConfig10590>;
  path?: ConfigPaths10590;
}

const HeavyComponent10590 = memo(function HeavyComponent10590({ config }: HeavyProps10590) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10590) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10590 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10590: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10590.displayName = 'HeavyComponent10590';
export default HeavyComponent10590;

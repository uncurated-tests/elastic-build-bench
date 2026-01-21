'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10538<T> = T extends (infer U)[]
  ? DeepReadonlyArray10538<U>
  : T extends object
  ? DeepReadonlyObject10538<T>
  : T;

interface DeepReadonlyArray10538<T> extends ReadonlyArray<DeepReadonly10538<T>> {}

type DeepReadonlyObject10538<T> = {
  readonly [P in keyof T]: DeepReadonly10538<T[P]>;
};

type UnionToIntersection10538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10538<T> = UnionToIntersection10538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10538<T extends unknown[], V> = [...T, V];

type TuplifyUnion10538<T, L = LastOf10538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10538<TuplifyUnion10538<Exclude<T, L>>, L>;

type DeepPartial10538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10538<T[P]> }
  : T;

type Paths10538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10538<K, Paths10538<T[K], Prev10538[D]>> : never }[keyof T]
  : never;

type Prev10538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10538 {
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

type ConfigPaths10538 = Paths10538<NestedConfig10538>;

interface HeavyProps10538 {
  config: DeepPartial10538<NestedConfig10538>;
  path?: ConfigPaths10538;
}

const HeavyComponent10538 = memo(function HeavyComponent10538({ config }: HeavyProps10538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10538.displayName = 'HeavyComponent10538';
export default HeavyComponent10538;

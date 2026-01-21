'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10378<T> = T extends (infer U)[]
  ? DeepReadonlyArray10378<U>
  : T extends object
  ? DeepReadonlyObject10378<T>
  : T;

interface DeepReadonlyArray10378<T> extends ReadonlyArray<DeepReadonly10378<T>> {}

type DeepReadonlyObject10378<T> = {
  readonly [P in keyof T]: DeepReadonly10378<T[P]>;
};

type UnionToIntersection10378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10378<T> = UnionToIntersection10378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10378<T extends unknown[], V> = [...T, V];

type TuplifyUnion10378<T, L = LastOf10378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10378<TuplifyUnion10378<Exclude<T, L>>, L>;

type DeepPartial10378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10378<T[P]> }
  : T;

type Paths10378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10378<K, Paths10378<T[K], Prev10378[D]>> : never }[keyof T]
  : never;

type Prev10378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10378 {
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

type ConfigPaths10378 = Paths10378<NestedConfig10378>;

interface HeavyProps10378 {
  config: DeepPartial10378<NestedConfig10378>;
  path?: ConfigPaths10378;
}

const HeavyComponent10378 = memo(function HeavyComponent10378({ config }: HeavyProps10378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10378.displayName = 'HeavyComponent10378';
export default HeavyComponent10378;

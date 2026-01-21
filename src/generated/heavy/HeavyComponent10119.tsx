'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10119<T> = T extends (infer U)[]
  ? DeepReadonlyArray10119<U>
  : T extends object
  ? DeepReadonlyObject10119<T>
  : T;

interface DeepReadonlyArray10119<T> extends ReadonlyArray<DeepReadonly10119<T>> {}

type DeepReadonlyObject10119<T> = {
  readonly [P in keyof T]: DeepReadonly10119<T[P]>;
};

type UnionToIntersection10119<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10119<T> = UnionToIntersection10119<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10119<T extends unknown[], V> = [...T, V];

type TuplifyUnion10119<T, L = LastOf10119<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10119<TuplifyUnion10119<Exclude<T, L>>, L>;

type DeepPartial10119<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10119<T[P]> }
  : T;

type Paths10119<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10119<K, Paths10119<T[K], Prev10119[D]>> : never }[keyof T]
  : never;

type Prev10119 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10119<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10119 {
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

type ConfigPaths10119 = Paths10119<NestedConfig10119>;

interface HeavyProps10119 {
  config: DeepPartial10119<NestedConfig10119>;
  path?: ConfigPaths10119;
}

const HeavyComponent10119 = memo(function HeavyComponent10119({ config }: HeavyProps10119) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10119) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10119 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10119: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10119.displayName = 'HeavyComponent10119';
export default HeavyComponent10119;

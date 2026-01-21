'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10664<T> = T extends (infer U)[]
  ? DeepReadonlyArray10664<U>
  : T extends object
  ? DeepReadonlyObject10664<T>
  : T;

interface DeepReadonlyArray10664<T> extends ReadonlyArray<DeepReadonly10664<T>> {}

type DeepReadonlyObject10664<T> = {
  readonly [P in keyof T]: DeepReadonly10664<T[P]>;
};

type UnionToIntersection10664<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10664<T> = UnionToIntersection10664<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10664<T extends unknown[], V> = [...T, V];

type TuplifyUnion10664<T, L = LastOf10664<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10664<TuplifyUnion10664<Exclude<T, L>>, L>;

type DeepPartial10664<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10664<T[P]> }
  : T;

type Paths10664<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10664<K, Paths10664<T[K], Prev10664[D]>> : never }[keyof T]
  : never;

type Prev10664 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10664<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10664 {
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

type ConfigPaths10664 = Paths10664<NestedConfig10664>;

interface HeavyProps10664 {
  config: DeepPartial10664<NestedConfig10664>;
  path?: ConfigPaths10664;
}

const HeavyComponent10664 = memo(function HeavyComponent10664({ config }: HeavyProps10664) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10664) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10664 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10664: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10664.displayName = 'HeavyComponent10664';
export default HeavyComponent10664;

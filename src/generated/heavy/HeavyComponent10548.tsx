'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10548<T> = T extends (infer U)[]
  ? DeepReadonlyArray10548<U>
  : T extends object
  ? DeepReadonlyObject10548<T>
  : T;

interface DeepReadonlyArray10548<T> extends ReadonlyArray<DeepReadonly10548<T>> {}

type DeepReadonlyObject10548<T> = {
  readonly [P in keyof T]: DeepReadonly10548<T[P]>;
};

type UnionToIntersection10548<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10548<T> = UnionToIntersection10548<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10548<T extends unknown[], V> = [...T, V];

type TuplifyUnion10548<T, L = LastOf10548<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10548<TuplifyUnion10548<Exclude<T, L>>, L>;

type DeepPartial10548<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10548<T[P]> }
  : T;

type Paths10548<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10548<K, Paths10548<T[K], Prev10548[D]>> : never }[keyof T]
  : never;

type Prev10548 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10548<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10548 {
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

type ConfigPaths10548 = Paths10548<NestedConfig10548>;

interface HeavyProps10548 {
  config: DeepPartial10548<NestedConfig10548>;
  path?: ConfigPaths10548;
}

const HeavyComponent10548 = memo(function HeavyComponent10548({ config }: HeavyProps10548) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10548) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10548 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10548: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10548.displayName = 'HeavyComponent10548';
export default HeavyComponent10548;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10399<T> = T extends (infer U)[]
  ? DeepReadonlyArray10399<U>
  : T extends object
  ? DeepReadonlyObject10399<T>
  : T;

interface DeepReadonlyArray10399<T> extends ReadonlyArray<DeepReadonly10399<T>> {}

type DeepReadonlyObject10399<T> = {
  readonly [P in keyof T]: DeepReadonly10399<T[P]>;
};

type UnionToIntersection10399<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10399<T> = UnionToIntersection10399<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10399<T extends unknown[], V> = [...T, V];

type TuplifyUnion10399<T, L = LastOf10399<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10399<TuplifyUnion10399<Exclude<T, L>>, L>;

type DeepPartial10399<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10399<T[P]> }
  : T;

type Paths10399<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10399<K, Paths10399<T[K], Prev10399[D]>> : never }[keyof T]
  : never;

type Prev10399 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10399<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10399 {
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

type ConfigPaths10399 = Paths10399<NestedConfig10399>;

interface HeavyProps10399 {
  config: DeepPartial10399<NestedConfig10399>;
  path?: ConfigPaths10399;
}

const HeavyComponent10399 = memo(function HeavyComponent10399({ config }: HeavyProps10399) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10399) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10399 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10399: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10399.displayName = 'HeavyComponent10399';
export default HeavyComponent10399;

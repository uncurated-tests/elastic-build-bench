'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10655<T> = T extends (infer U)[]
  ? DeepReadonlyArray10655<U>
  : T extends object
  ? DeepReadonlyObject10655<T>
  : T;

interface DeepReadonlyArray10655<T> extends ReadonlyArray<DeepReadonly10655<T>> {}

type DeepReadonlyObject10655<T> = {
  readonly [P in keyof T]: DeepReadonly10655<T[P]>;
};

type UnionToIntersection10655<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10655<T> = UnionToIntersection10655<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10655<T extends unknown[], V> = [...T, V];

type TuplifyUnion10655<T, L = LastOf10655<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10655<TuplifyUnion10655<Exclude<T, L>>, L>;

type DeepPartial10655<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10655<T[P]> }
  : T;

type Paths10655<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10655<K, Paths10655<T[K], Prev10655[D]>> : never }[keyof T]
  : never;

type Prev10655 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10655<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10655 {
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

type ConfigPaths10655 = Paths10655<NestedConfig10655>;

interface HeavyProps10655 {
  config: DeepPartial10655<NestedConfig10655>;
  path?: ConfigPaths10655;
}

const HeavyComponent10655 = memo(function HeavyComponent10655({ config }: HeavyProps10655) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10655) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10655 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10655: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10655.displayName = 'HeavyComponent10655';
export default HeavyComponent10655;

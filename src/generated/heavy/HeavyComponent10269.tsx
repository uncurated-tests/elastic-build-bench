'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10269<T> = T extends (infer U)[]
  ? DeepReadonlyArray10269<U>
  : T extends object
  ? DeepReadonlyObject10269<T>
  : T;

interface DeepReadonlyArray10269<T> extends ReadonlyArray<DeepReadonly10269<T>> {}

type DeepReadonlyObject10269<T> = {
  readonly [P in keyof T]: DeepReadonly10269<T[P]>;
};

type UnionToIntersection10269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10269<T> = UnionToIntersection10269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10269<T extends unknown[], V> = [...T, V];

type TuplifyUnion10269<T, L = LastOf10269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10269<TuplifyUnion10269<Exclude<T, L>>, L>;

type DeepPartial10269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10269<T[P]> }
  : T;

type Paths10269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10269<K, Paths10269<T[K], Prev10269[D]>> : never }[keyof T]
  : never;

type Prev10269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10269 {
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

type ConfigPaths10269 = Paths10269<NestedConfig10269>;

interface HeavyProps10269 {
  config: DeepPartial10269<NestedConfig10269>;
  path?: ConfigPaths10269;
}

const HeavyComponent10269 = memo(function HeavyComponent10269({ config }: HeavyProps10269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10269.displayName = 'HeavyComponent10269';
export default HeavyComponent10269;

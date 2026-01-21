'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10454<T> = T extends (infer U)[]
  ? DeepReadonlyArray10454<U>
  : T extends object
  ? DeepReadonlyObject10454<T>
  : T;

interface DeepReadonlyArray10454<T> extends ReadonlyArray<DeepReadonly10454<T>> {}

type DeepReadonlyObject10454<T> = {
  readonly [P in keyof T]: DeepReadonly10454<T[P]>;
};

type UnionToIntersection10454<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10454<T> = UnionToIntersection10454<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10454<T extends unknown[], V> = [...T, V];

type TuplifyUnion10454<T, L = LastOf10454<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10454<TuplifyUnion10454<Exclude<T, L>>, L>;

type DeepPartial10454<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10454<T[P]> }
  : T;

type Paths10454<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10454<K, Paths10454<T[K], Prev10454[D]>> : never }[keyof T]
  : never;

type Prev10454 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10454<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10454 {
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

type ConfigPaths10454 = Paths10454<NestedConfig10454>;

interface HeavyProps10454 {
  config: DeepPartial10454<NestedConfig10454>;
  path?: ConfigPaths10454;
}

const HeavyComponent10454 = memo(function HeavyComponent10454({ config }: HeavyProps10454) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10454) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10454 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10454: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10454.displayName = 'HeavyComponent10454';
export default HeavyComponent10454;

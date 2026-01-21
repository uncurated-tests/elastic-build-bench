'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10094<T> = T extends (infer U)[]
  ? DeepReadonlyArray10094<U>
  : T extends object
  ? DeepReadonlyObject10094<T>
  : T;

interface DeepReadonlyArray10094<T> extends ReadonlyArray<DeepReadonly10094<T>> {}

type DeepReadonlyObject10094<T> = {
  readonly [P in keyof T]: DeepReadonly10094<T[P]>;
};

type UnionToIntersection10094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10094<T> = UnionToIntersection10094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10094<T extends unknown[], V> = [...T, V];

type TuplifyUnion10094<T, L = LastOf10094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10094<TuplifyUnion10094<Exclude<T, L>>, L>;

type DeepPartial10094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10094<T[P]> }
  : T;

type Paths10094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10094<K, Paths10094<T[K], Prev10094[D]>> : never }[keyof T]
  : never;

type Prev10094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10094 {
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

type ConfigPaths10094 = Paths10094<NestedConfig10094>;

interface HeavyProps10094 {
  config: DeepPartial10094<NestedConfig10094>;
  path?: ConfigPaths10094;
}

const HeavyComponent10094 = memo(function HeavyComponent10094({ config }: HeavyProps10094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10094.displayName = 'HeavyComponent10094';
export default HeavyComponent10094;

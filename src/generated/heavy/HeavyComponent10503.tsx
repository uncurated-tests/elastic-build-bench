'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10503<T> = T extends (infer U)[]
  ? DeepReadonlyArray10503<U>
  : T extends object
  ? DeepReadonlyObject10503<T>
  : T;

interface DeepReadonlyArray10503<T> extends ReadonlyArray<DeepReadonly10503<T>> {}

type DeepReadonlyObject10503<T> = {
  readonly [P in keyof T]: DeepReadonly10503<T[P]>;
};

type UnionToIntersection10503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10503<T> = UnionToIntersection10503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10503<T extends unknown[], V> = [...T, V];

type TuplifyUnion10503<T, L = LastOf10503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10503<TuplifyUnion10503<Exclude<T, L>>, L>;

type DeepPartial10503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10503<T[P]> }
  : T;

type Paths10503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10503<K, Paths10503<T[K], Prev10503[D]>> : never }[keyof T]
  : never;

type Prev10503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10503 {
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

type ConfigPaths10503 = Paths10503<NestedConfig10503>;

interface HeavyProps10503 {
  config: DeepPartial10503<NestedConfig10503>;
  path?: ConfigPaths10503;
}

const HeavyComponent10503 = memo(function HeavyComponent10503({ config }: HeavyProps10503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10503.displayName = 'HeavyComponent10503';
export default HeavyComponent10503;

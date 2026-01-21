'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10110<T> = T extends (infer U)[]
  ? DeepReadonlyArray10110<U>
  : T extends object
  ? DeepReadonlyObject10110<T>
  : T;

interface DeepReadonlyArray10110<T> extends ReadonlyArray<DeepReadonly10110<T>> {}

type DeepReadonlyObject10110<T> = {
  readonly [P in keyof T]: DeepReadonly10110<T[P]>;
};

type UnionToIntersection10110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10110<T> = UnionToIntersection10110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10110<T extends unknown[], V> = [...T, V];

type TuplifyUnion10110<T, L = LastOf10110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10110<TuplifyUnion10110<Exclude<T, L>>, L>;

type DeepPartial10110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10110<T[P]> }
  : T;

type Paths10110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10110<K, Paths10110<T[K], Prev10110[D]>> : never }[keyof T]
  : never;

type Prev10110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10110 {
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

type ConfigPaths10110 = Paths10110<NestedConfig10110>;

interface HeavyProps10110 {
  config: DeepPartial10110<NestedConfig10110>;
  path?: ConfigPaths10110;
}

const HeavyComponent10110 = memo(function HeavyComponent10110({ config }: HeavyProps10110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10110.displayName = 'HeavyComponent10110';
export default HeavyComponent10110;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10272<T> = T extends (infer U)[]
  ? DeepReadonlyArray10272<U>
  : T extends object
  ? DeepReadonlyObject10272<T>
  : T;

interface DeepReadonlyArray10272<T> extends ReadonlyArray<DeepReadonly10272<T>> {}

type DeepReadonlyObject10272<T> = {
  readonly [P in keyof T]: DeepReadonly10272<T[P]>;
};

type UnionToIntersection10272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10272<T> = UnionToIntersection10272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10272<T extends unknown[], V> = [...T, V];

type TuplifyUnion10272<T, L = LastOf10272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10272<TuplifyUnion10272<Exclude<T, L>>, L>;

type DeepPartial10272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10272<T[P]> }
  : T;

type Paths10272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10272<K, Paths10272<T[K], Prev10272[D]>> : never }[keyof T]
  : never;

type Prev10272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10272 {
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

type ConfigPaths10272 = Paths10272<NestedConfig10272>;

interface HeavyProps10272 {
  config: DeepPartial10272<NestedConfig10272>;
  path?: ConfigPaths10272;
}

const HeavyComponent10272 = memo(function HeavyComponent10272({ config }: HeavyProps10272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10272.displayName = 'HeavyComponent10272';
export default HeavyComponent10272;

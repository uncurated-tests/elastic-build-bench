'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10560<T> = T extends (infer U)[]
  ? DeepReadonlyArray10560<U>
  : T extends object
  ? DeepReadonlyObject10560<T>
  : T;

interface DeepReadonlyArray10560<T> extends ReadonlyArray<DeepReadonly10560<T>> {}

type DeepReadonlyObject10560<T> = {
  readonly [P in keyof T]: DeepReadonly10560<T[P]>;
};

type UnionToIntersection10560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10560<T> = UnionToIntersection10560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10560<T extends unknown[], V> = [...T, V];

type TuplifyUnion10560<T, L = LastOf10560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10560<TuplifyUnion10560<Exclude<T, L>>, L>;

type DeepPartial10560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10560<T[P]> }
  : T;

type Paths10560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10560<K, Paths10560<T[K], Prev10560[D]>> : never }[keyof T]
  : never;

type Prev10560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10560 {
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

type ConfigPaths10560 = Paths10560<NestedConfig10560>;

interface HeavyProps10560 {
  config: DeepPartial10560<NestedConfig10560>;
  path?: ConfigPaths10560;
}

const HeavyComponent10560 = memo(function HeavyComponent10560({ config }: HeavyProps10560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10560.displayName = 'HeavyComponent10560';
export default HeavyComponent10560;

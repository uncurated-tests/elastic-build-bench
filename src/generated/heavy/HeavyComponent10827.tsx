'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10827<T> = T extends (infer U)[]
  ? DeepReadonlyArray10827<U>
  : T extends object
  ? DeepReadonlyObject10827<T>
  : T;

interface DeepReadonlyArray10827<T> extends ReadonlyArray<DeepReadonly10827<T>> {}

type DeepReadonlyObject10827<T> = {
  readonly [P in keyof T]: DeepReadonly10827<T[P]>;
};

type UnionToIntersection10827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10827<T> = UnionToIntersection10827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10827<T extends unknown[], V> = [...T, V];

type TuplifyUnion10827<T, L = LastOf10827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10827<TuplifyUnion10827<Exclude<T, L>>, L>;

type DeepPartial10827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10827<T[P]> }
  : T;

type Paths10827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10827<K, Paths10827<T[K], Prev10827[D]>> : never }[keyof T]
  : never;

type Prev10827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10827 {
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

type ConfigPaths10827 = Paths10827<NestedConfig10827>;

interface HeavyProps10827 {
  config: DeepPartial10827<NestedConfig10827>;
  path?: ConfigPaths10827;
}

const HeavyComponent10827 = memo(function HeavyComponent10827({ config }: HeavyProps10827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10827.displayName = 'HeavyComponent10827';
export default HeavyComponent10827;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10936<T> = T extends (infer U)[]
  ? DeepReadonlyArray10936<U>
  : T extends object
  ? DeepReadonlyObject10936<T>
  : T;

interface DeepReadonlyArray10936<T> extends ReadonlyArray<DeepReadonly10936<T>> {}

type DeepReadonlyObject10936<T> = {
  readonly [P in keyof T]: DeepReadonly10936<T[P]>;
};

type UnionToIntersection10936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10936<T> = UnionToIntersection10936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10936<T extends unknown[], V> = [...T, V];

type TuplifyUnion10936<T, L = LastOf10936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10936<TuplifyUnion10936<Exclude<T, L>>, L>;

type DeepPartial10936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10936<T[P]> }
  : T;

type Paths10936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10936<K, Paths10936<T[K], Prev10936[D]>> : never }[keyof T]
  : never;

type Prev10936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10936 {
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

type ConfigPaths10936 = Paths10936<NestedConfig10936>;

interface HeavyProps10936 {
  config: DeepPartial10936<NestedConfig10936>;
  path?: ConfigPaths10936;
}

const HeavyComponent10936 = memo(function HeavyComponent10936({ config }: HeavyProps10936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10936.displayName = 'HeavyComponent10936';
export default HeavyComponent10936;

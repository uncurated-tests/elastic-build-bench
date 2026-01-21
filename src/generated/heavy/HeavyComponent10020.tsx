'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10020<T> = T extends (infer U)[]
  ? DeepReadonlyArray10020<U>
  : T extends object
  ? DeepReadonlyObject10020<T>
  : T;

interface DeepReadonlyArray10020<T> extends ReadonlyArray<DeepReadonly10020<T>> {}

type DeepReadonlyObject10020<T> = {
  readonly [P in keyof T]: DeepReadonly10020<T[P]>;
};

type UnionToIntersection10020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10020<T> = UnionToIntersection10020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10020<T extends unknown[], V> = [...T, V];

type TuplifyUnion10020<T, L = LastOf10020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10020<TuplifyUnion10020<Exclude<T, L>>, L>;

type DeepPartial10020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10020<T[P]> }
  : T;

type Paths10020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10020<K, Paths10020<T[K], Prev10020[D]>> : never }[keyof T]
  : never;

type Prev10020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10020 {
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

type ConfigPaths10020 = Paths10020<NestedConfig10020>;

interface HeavyProps10020 {
  config: DeepPartial10020<NestedConfig10020>;
  path?: ConfigPaths10020;
}

const HeavyComponent10020 = memo(function HeavyComponent10020({ config }: HeavyProps10020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10020.displayName = 'HeavyComponent10020';
export default HeavyComponent10020;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10118<T> = T extends (infer U)[]
  ? DeepReadonlyArray10118<U>
  : T extends object
  ? DeepReadonlyObject10118<T>
  : T;

interface DeepReadonlyArray10118<T> extends ReadonlyArray<DeepReadonly10118<T>> {}

type DeepReadonlyObject10118<T> = {
  readonly [P in keyof T]: DeepReadonly10118<T[P]>;
};

type UnionToIntersection10118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10118<T> = UnionToIntersection10118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10118<T extends unknown[], V> = [...T, V];

type TuplifyUnion10118<T, L = LastOf10118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10118<TuplifyUnion10118<Exclude<T, L>>, L>;

type DeepPartial10118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10118<T[P]> }
  : T;

type Paths10118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10118<K, Paths10118<T[K], Prev10118[D]>> : never }[keyof T]
  : never;

type Prev10118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10118 {
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

type ConfigPaths10118 = Paths10118<NestedConfig10118>;

interface HeavyProps10118 {
  config: DeepPartial10118<NestedConfig10118>;
  path?: ConfigPaths10118;
}

const HeavyComponent10118 = memo(function HeavyComponent10118({ config }: HeavyProps10118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10118.displayName = 'HeavyComponent10118';
export default HeavyComponent10118;

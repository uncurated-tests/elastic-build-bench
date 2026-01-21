'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10023<T> = T extends (infer U)[]
  ? DeepReadonlyArray10023<U>
  : T extends object
  ? DeepReadonlyObject10023<T>
  : T;

interface DeepReadonlyArray10023<T> extends ReadonlyArray<DeepReadonly10023<T>> {}

type DeepReadonlyObject10023<T> = {
  readonly [P in keyof T]: DeepReadonly10023<T[P]>;
};

type UnionToIntersection10023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10023<T> = UnionToIntersection10023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10023<T extends unknown[], V> = [...T, V];

type TuplifyUnion10023<T, L = LastOf10023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10023<TuplifyUnion10023<Exclude<T, L>>, L>;

type DeepPartial10023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10023<T[P]> }
  : T;

type Paths10023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10023<K, Paths10023<T[K], Prev10023[D]>> : never }[keyof T]
  : never;

type Prev10023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10023 {
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

type ConfigPaths10023 = Paths10023<NestedConfig10023>;

interface HeavyProps10023 {
  config: DeepPartial10023<NestedConfig10023>;
  path?: ConfigPaths10023;
}

const HeavyComponent10023 = memo(function HeavyComponent10023({ config }: HeavyProps10023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10023.displayName = 'HeavyComponent10023';
export default HeavyComponent10023;

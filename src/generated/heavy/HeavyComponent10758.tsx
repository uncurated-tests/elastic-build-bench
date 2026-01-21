'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10758<T> = T extends (infer U)[]
  ? DeepReadonlyArray10758<U>
  : T extends object
  ? DeepReadonlyObject10758<T>
  : T;

interface DeepReadonlyArray10758<T> extends ReadonlyArray<DeepReadonly10758<T>> {}

type DeepReadonlyObject10758<T> = {
  readonly [P in keyof T]: DeepReadonly10758<T[P]>;
};

type UnionToIntersection10758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10758<T> = UnionToIntersection10758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10758<T extends unknown[], V> = [...T, V];

type TuplifyUnion10758<T, L = LastOf10758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10758<TuplifyUnion10758<Exclude<T, L>>, L>;

type DeepPartial10758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10758<T[P]> }
  : T;

type Paths10758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10758<K, Paths10758<T[K], Prev10758[D]>> : never }[keyof T]
  : never;

type Prev10758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10758 {
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

type ConfigPaths10758 = Paths10758<NestedConfig10758>;

interface HeavyProps10758 {
  config: DeepPartial10758<NestedConfig10758>;
  path?: ConfigPaths10758;
}

const HeavyComponent10758 = memo(function HeavyComponent10758({ config }: HeavyProps10758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10758.displayName = 'HeavyComponent10758';
export default HeavyComponent10758;

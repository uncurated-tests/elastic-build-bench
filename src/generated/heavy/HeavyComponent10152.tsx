'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10152<T> = T extends (infer U)[]
  ? DeepReadonlyArray10152<U>
  : T extends object
  ? DeepReadonlyObject10152<T>
  : T;

interface DeepReadonlyArray10152<T> extends ReadonlyArray<DeepReadonly10152<T>> {}

type DeepReadonlyObject10152<T> = {
  readonly [P in keyof T]: DeepReadonly10152<T[P]>;
};

type UnionToIntersection10152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10152<T> = UnionToIntersection10152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10152<T extends unknown[], V> = [...T, V];

type TuplifyUnion10152<T, L = LastOf10152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10152<TuplifyUnion10152<Exclude<T, L>>, L>;

type DeepPartial10152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10152<T[P]> }
  : T;

type Paths10152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10152<K, Paths10152<T[K], Prev10152[D]>> : never }[keyof T]
  : never;

type Prev10152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10152 {
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

type ConfigPaths10152 = Paths10152<NestedConfig10152>;

interface HeavyProps10152 {
  config: DeepPartial10152<NestedConfig10152>;
  path?: ConfigPaths10152;
}

const HeavyComponent10152 = memo(function HeavyComponent10152({ config }: HeavyProps10152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10152.displayName = 'HeavyComponent10152';
export default HeavyComponent10152;

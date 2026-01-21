'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10921<T> = T extends (infer U)[]
  ? DeepReadonlyArray10921<U>
  : T extends object
  ? DeepReadonlyObject10921<T>
  : T;

interface DeepReadonlyArray10921<T> extends ReadonlyArray<DeepReadonly10921<T>> {}

type DeepReadonlyObject10921<T> = {
  readonly [P in keyof T]: DeepReadonly10921<T[P]>;
};

type UnionToIntersection10921<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10921<T> = UnionToIntersection10921<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10921<T extends unknown[], V> = [...T, V];

type TuplifyUnion10921<T, L = LastOf10921<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10921<TuplifyUnion10921<Exclude<T, L>>, L>;

type DeepPartial10921<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10921<T[P]> }
  : T;

type Paths10921<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10921<K, Paths10921<T[K], Prev10921[D]>> : never }[keyof T]
  : never;

type Prev10921 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10921<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10921 {
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

type ConfigPaths10921 = Paths10921<NestedConfig10921>;

interface HeavyProps10921 {
  config: DeepPartial10921<NestedConfig10921>;
  path?: ConfigPaths10921;
}

const HeavyComponent10921 = memo(function HeavyComponent10921({ config }: HeavyProps10921) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10921) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10921 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10921: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10921.displayName = 'HeavyComponent10921';
export default HeavyComponent10921;

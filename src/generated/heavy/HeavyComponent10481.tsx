'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10481<T> = T extends (infer U)[]
  ? DeepReadonlyArray10481<U>
  : T extends object
  ? DeepReadonlyObject10481<T>
  : T;

interface DeepReadonlyArray10481<T> extends ReadonlyArray<DeepReadonly10481<T>> {}

type DeepReadonlyObject10481<T> = {
  readonly [P in keyof T]: DeepReadonly10481<T[P]>;
};

type UnionToIntersection10481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10481<T> = UnionToIntersection10481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10481<T extends unknown[], V> = [...T, V];

type TuplifyUnion10481<T, L = LastOf10481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10481<TuplifyUnion10481<Exclude<T, L>>, L>;

type DeepPartial10481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10481<T[P]> }
  : T;

type Paths10481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10481<K, Paths10481<T[K], Prev10481[D]>> : never }[keyof T]
  : never;

type Prev10481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10481 {
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

type ConfigPaths10481 = Paths10481<NestedConfig10481>;

interface HeavyProps10481 {
  config: DeepPartial10481<NestedConfig10481>;
  path?: ConfigPaths10481;
}

const HeavyComponent10481 = memo(function HeavyComponent10481({ config }: HeavyProps10481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10481.displayName = 'HeavyComponent10481';
export default HeavyComponent10481;

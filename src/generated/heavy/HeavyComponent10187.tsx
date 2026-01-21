'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10187<T> = T extends (infer U)[]
  ? DeepReadonlyArray10187<U>
  : T extends object
  ? DeepReadonlyObject10187<T>
  : T;

interface DeepReadonlyArray10187<T> extends ReadonlyArray<DeepReadonly10187<T>> {}

type DeepReadonlyObject10187<T> = {
  readonly [P in keyof T]: DeepReadonly10187<T[P]>;
};

type UnionToIntersection10187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10187<T> = UnionToIntersection10187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10187<T extends unknown[], V> = [...T, V];

type TuplifyUnion10187<T, L = LastOf10187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10187<TuplifyUnion10187<Exclude<T, L>>, L>;

type DeepPartial10187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10187<T[P]> }
  : T;

type Paths10187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10187<K, Paths10187<T[K], Prev10187[D]>> : never }[keyof T]
  : never;

type Prev10187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10187 {
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

type ConfigPaths10187 = Paths10187<NestedConfig10187>;

interface HeavyProps10187 {
  config: DeepPartial10187<NestedConfig10187>;
  path?: ConfigPaths10187;
}

const HeavyComponent10187 = memo(function HeavyComponent10187({ config }: HeavyProps10187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10187.displayName = 'HeavyComponent10187';
export default HeavyComponent10187;

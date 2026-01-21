'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10763<T> = T extends (infer U)[]
  ? DeepReadonlyArray10763<U>
  : T extends object
  ? DeepReadonlyObject10763<T>
  : T;

interface DeepReadonlyArray10763<T> extends ReadonlyArray<DeepReadonly10763<T>> {}

type DeepReadonlyObject10763<T> = {
  readonly [P in keyof T]: DeepReadonly10763<T[P]>;
};

type UnionToIntersection10763<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10763<T> = UnionToIntersection10763<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10763<T extends unknown[], V> = [...T, V];

type TuplifyUnion10763<T, L = LastOf10763<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10763<TuplifyUnion10763<Exclude<T, L>>, L>;

type DeepPartial10763<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10763<T[P]> }
  : T;

type Paths10763<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10763<K, Paths10763<T[K], Prev10763[D]>> : never }[keyof T]
  : never;

type Prev10763 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10763<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10763 {
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

type ConfigPaths10763 = Paths10763<NestedConfig10763>;

interface HeavyProps10763 {
  config: DeepPartial10763<NestedConfig10763>;
  path?: ConfigPaths10763;
}

const HeavyComponent10763 = memo(function HeavyComponent10763({ config }: HeavyProps10763) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10763) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10763 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10763: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10763.displayName = 'HeavyComponent10763';
export default HeavyComponent10763;

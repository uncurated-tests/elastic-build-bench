'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10038<T> = T extends (infer U)[]
  ? DeepReadonlyArray10038<U>
  : T extends object
  ? DeepReadonlyObject10038<T>
  : T;

interface DeepReadonlyArray10038<T> extends ReadonlyArray<DeepReadonly10038<T>> {}

type DeepReadonlyObject10038<T> = {
  readonly [P in keyof T]: DeepReadonly10038<T[P]>;
};

type UnionToIntersection10038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10038<T> = UnionToIntersection10038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10038<T extends unknown[], V> = [...T, V];

type TuplifyUnion10038<T, L = LastOf10038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10038<TuplifyUnion10038<Exclude<T, L>>, L>;

type DeepPartial10038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10038<T[P]> }
  : T;

type Paths10038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10038<K, Paths10038<T[K], Prev10038[D]>> : never }[keyof T]
  : never;

type Prev10038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10038 {
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

type ConfigPaths10038 = Paths10038<NestedConfig10038>;

interface HeavyProps10038 {
  config: DeepPartial10038<NestedConfig10038>;
  path?: ConfigPaths10038;
}

const HeavyComponent10038 = memo(function HeavyComponent10038({ config }: HeavyProps10038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10038.displayName = 'HeavyComponent10038';
export default HeavyComponent10038;

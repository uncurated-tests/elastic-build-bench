'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10170<T> = T extends (infer U)[]
  ? DeepReadonlyArray10170<U>
  : T extends object
  ? DeepReadonlyObject10170<T>
  : T;

interface DeepReadonlyArray10170<T> extends ReadonlyArray<DeepReadonly10170<T>> {}

type DeepReadonlyObject10170<T> = {
  readonly [P in keyof T]: DeepReadonly10170<T[P]>;
};

type UnionToIntersection10170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10170<T> = UnionToIntersection10170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10170<T extends unknown[], V> = [...T, V];

type TuplifyUnion10170<T, L = LastOf10170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10170<TuplifyUnion10170<Exclude<T, L>>, L>;

type DeepPartial10170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10170<T[P]> }
  : T;

type Paths10170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10170<K, Paths10170<T[K], Prev10170[D]>> : never }[keyof T]
  : never;

type Prev10170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10170 {
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

type ConfigPaths10170 = Paths10170<NestedConfig10170>;

interface HeavyProps10170 {
  config: DeepPartial10170<NestedConfig10170>;
  path?: ConfigPaths10170;
}

const HeavyComponent10170 = memo(function HeavyComponent10170({ config }: HeavyProps10170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10170.displayName = 'HeavyComponent10170';
export default HeavyComponent10170;

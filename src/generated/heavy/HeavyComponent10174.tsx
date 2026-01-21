'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10174<T> = T extends (infer U)[]
  ? DeepReadonlyArray10174<U>
  : T extends object
  ? DeepReadonlyObject10174<T>
  : T;

interface DeepReadonlyArray10174<T> extends ReadonlyArray<DeepReadonly10174<T>> {}

type DeepReadonlyObject10174<T> = {
  readonly [P in keyof T]: DeepReadonly10174<T[P]>;
};

type UnionToIntersection10174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10174<T> = UnionToIntersection10174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10174<T extends unknown[], V> = [...T, V];

type TuplifyUnion10174<T, L = LastOf10174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10174<TuplifyUnion10174<Exclude<T, L>>, L>;

type DeepPartial10174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10174<T[P]> }
  : T;

type Paths10174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10174<K, Paths10174<T[K], Prev10174[D]>> : never }[keyof T]
  : never;

type Prev10174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10174 {
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

type ConfigPaths10174 = Paths10174<NestedConfig10174>;

interface HeavyProps10174 {
  config: DeepPartial10174<NestedConfig10174>;
  path?: ConfigPaths10174;
}

const HeavyComponent10174 = memo(function HeavyComponent10174({ config }: HeavyProps10174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10174.displayName = 'HeavyComponent10174';
export default HeavyComponent10174;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10298<T> = T extends (infer U)[]
  ? DeepReadonlyArray10298<U>
  : T extends object
  ? DeepReadonlyObject10298<T>
  : T;

interface DeepReadonlyArray10298<T> extends ReadonlyArray<DeepReadonly10298<T>> {}

type DeepReadonlyObject10298<T> = {
  readonly [P in keyof T]: DeepReadonly10298<T[P]>;
};

type UnionToIntersection10298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10298<T> = UnionToIntersection10298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10298<T extends unknown[], V> = [...T, V];

type TuplifyUnion10298<T, L = LastOf10298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10298<TuplifyUnion10298<Exclude<T, L>>, L>;

type DeepPartial10298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10298<T[P]> }
  : T;

type Paths10298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10298<K, Paths10298<T[K], Prev10298[D]>> : never }[keyof T]
  : never;

type Prev10298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10298 {
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

type ConfigPaths10298 = Paths10298<NestedConfig10298>;

interface HeavyProps10298 {
  config: DeepPartial10298<NestedConfig10298>;
  path?: ConfigPaths10298;
}

const HeavyComponent10298 = memo(function HeavyComponent10298({ config }: HeavyProps10298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10298.displayName = 'HeavyComponent10298';
export default HeavyComponent10298;

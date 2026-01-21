'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10864<T> = T extends (infer U)[]
  ? DeepReadonlyArray10864<U>
  : T extends object
  ? DeepReadonlyObject10864<T>
  : T;

interface DeepReadonlyArray10864<T> extends ReadonlyArray<DeepReadonly10864<T>> {}

type DeepReadonlyObject10864<T> = {
  readonly [P in keyof T]: DeepReadonly10864<T[P]>;
};

type UnionToIntersection10864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10864<T> = UnionToIntersection10864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10864<T extends unknown[], V> = [...T, V];

type TuplifyUnion10864<T, L = LastOf10864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10864<TuplifyUnion10864<Exclude<T, L>>, L>;

type DeepPartial10864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10864<T[P]> }
  : T;

type Paths10864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10864<K, Paths10864<T[K], Prev10864[D]>> : never }[keyof T]
  : never;

type Prev10864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10864 {
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

type ConfigPaths10864 = Paths10864<NestedConfig10864>;

interface HeavyProps10864 {
  config: DeepPartial10864<NestedConfig10864>;
  path?: ConfigPaths10864;
}

const HeavyComponent10864 = memo(function HeavyComponent10864({ config }: HeavyProps10864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10864.displayName = 'HeavyComponent10864';
export default HeavyComponent10864;

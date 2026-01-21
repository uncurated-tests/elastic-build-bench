'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10176<T> = T extends (infer U)[]
  ? DeepReadonlyArray10176<U>
  : T extends object
  ? DeepReadonlyObject10176<T>
  : T;

interface DeepReadonlyArray10176<T> extends ReadonlyArray<DeepReadonly10176<T>> {}

type DeepReadonlyObject10176<T> = {
  readonly [P in keyof T]: DeepReadonly10176<T[P]>;
};

type UnionToIntersection10176<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10176<T> = UnionToIntersection10176<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10176<T extends unknown[], V> = [...T, V];

type TuplifyUnion10176<T, L = LastOf10176<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10176<TuplifyUnion10176<Exclude<T, L>>, L>;

type DeepPartial10176<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10176<T[P]> }
  : T;

type Paths10176<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10176<K, Paths10176<T[K], Prev10176[D]>> : never }[keyof T]
  : never;

type Prev10176 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10176<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10176 {
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

type ConfigPaths10176 = Paths10176<NestedConfig10176>;

interface HeavyProps10176 {
  config: DeepPartial10176<NestedConfig10176>;
  path?: ConfigPaths10176;
}

const HeavyComponent10176 = memo(function HeavyComponent10176({ config }: HeavyProps10176) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10176) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10176 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10176: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10176.displayName = 'HeavyComponent10176';
export default HeavyComponent10176;

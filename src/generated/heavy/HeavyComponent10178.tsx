'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10178<T> = T extends (infer U)[]
  ? DeepReadonlyArray10178<U>
  : T extends object
  ? DeepReadonlyObject10178<T>
  : T;

interface DeepReadonlyArray10178<T> extends ReadonlyArray<DeepReadonly10178<T>> {}

type DeepReadonlyObject10178<T> = {
  readonly [P in keyof T]: DeepReadonly10178<T[P]>;
};

type UnionToIntersection10178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10178<T> = UnionToIntersection10178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10178<T extends unknown[], V> = [...T, V];

type TuplifyUnion10178<T, L = LastOf10178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10178<TuplifyUnion10178<Exclude<T, L>>, L>;

type DeepPartial10178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10178<T[P]> }
  : T;

type Paths10178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10178<K, Paths10178<T[K], Prev10178[D]>> : never }[keyof T]
  : never;

type Prev10178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10178 {
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

type ConfigPaths10178 = Paths10178<NestedConfig10178>;

interface HeavyProps10178 {
  config: DeepPartial10178<NestedConfig10178>;
  path?: ConfigPaths10178;
}

const HeavyComponent10178 = memo(function HeavyComponent10178({ config }: HeavyProps10178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10178.displayName = 'HeavyComponent10178';
export default HeavyComponent10178;

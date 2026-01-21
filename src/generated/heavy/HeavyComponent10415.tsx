'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10415<T> = T extends (infer U)[]
  ? DeepReadonlyArray10415<U>
  : T extends object
  ? DeepReadonlyObject10415<T>
  : T;

interface DeepReadonlyArray10415<T> extends ReadonlyArray<DeepReadonly10415<T>> {}

type DeepReadonlyObject10415<T> = {
  readonly [P in keyof T]: DeepReadonly10415<T[P]>;
};

type UnionToIntersection10415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10415<T> = UnionToIntersection10415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10415<T extends unknown[], V> = [...T, V];

type TuplifyUnion10415<T, L = LastOf10415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10415<TuplifyUnion10415<Exclude<T, L>>, L>;

type DeepPartial10415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10415<T[P]> }
  : T;

type Paths10415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10415<K, Paths10415<T[K], Prev10415[D]>> : never }[keyof T]
  : never;

type Prev10415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10415 {
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

type ConfigPaths10415 = Paths10415<NestedConfig10415>;

interface HeavyProps10415 {
  config: DeepPartial10415<NestedConfig10415>;
  path?: ConfigPaths10415;
}

const HeavyComponent10415 = memo(function HeavyComponent10415({ config }: HeavyProps10415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10415.displayName = 'HeavyComponent10415';
export default HeavyComponent10415;

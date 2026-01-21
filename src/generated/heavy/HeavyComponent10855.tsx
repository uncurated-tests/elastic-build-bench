'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10855<T> = T extends (infer U)[]
  ? DeepReadonlyArray10855<U>
  : T extends object
  ? DeepReadonlyObject10855<T>
  : T;

interface DeepReadonlyArray10855<T> extends ReadonlyArray<DeepReadonly10855<T>> {}

type DeepReadonlyObject10855<T> = {
  readonly [P in keyof T]: DeepReadonly10855<T[P]>;
};

type UnionToIntersection10855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10855<T> = UnionToIntersection10855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10855<T extends unknown[], V> = [...T, V];

type TuplifyUnion10855<T, L = LastOf10855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10855<TuplifyUnion10855<Exclude<T, L>>, L>;

type DeepPartial10855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10855<T[P]> }
  : T;

type Paths10855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10855<K, Paths10855<T[K], Prev10855[D]>> : never }[keyof T]
  : never;

type Prev10855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10855 {
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

type ConfigPaths10855 = Paths10855<NestedConfig10855>;

interface HeavyProps10855 {
  config: DeepPartial10855<NestedConfig10855>;
  path?: ConfigPaths10855;
}

const HeavyComponent10855 = memo(function HeavyComponent10855({ config }: HeavyProps10855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10855.displayName = 'HeavyComponent10855';
export default HeavyComponent10855;

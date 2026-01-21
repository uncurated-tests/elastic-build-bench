'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10985<T> = T extends (infer U)[]
  ? DeepReadonlyArray10985<U>
  : T extends object
  ? DeepReadonlyObject10985<T>
  : T;

interface DeepReadonlyArray10985<T> extends ReadonlyArray<DeepReadonly10985<T>> {}

type DeepReadonlyObject10985<T> = {
  readonly [P in keyof T]: DeepReadonly10985<T[P]>;
};

type UnionToIntersection10985<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10985<T> = UnionToIntersection10985<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10985<T extends unknown[], V> = [...T, V];

type TuplifyUnion10985<T, L = LastOf10985<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10985<TuplifyUnion10985<Exclude<T, L>>, L>;

type DeepPartial10985<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10985<T[P]> }
  : T;

type Paths10985<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10985<K, Paths10985<T[K], Prev10985[D]>> : never }[keyof T]
  : never;

type Prev10985 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10985<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10985 {
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

type ConfigPaths10985 = Paths10985<NestedConfig10985>;

interface HeavyProps10985 {
  config: DeepPartial10985<NestedConfig10985>;
  path?: ConfigPaths10985;
}

const HeavyComponent10985 = memo(function HeavyComponent10985({ config }: HeavyProps10985) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10985) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10985 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10985: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10985.displayName = 'HeavyComponent10985';
export default HeavyComponent10985;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10201<T> = T extends (infer U)[]
  ? DeepReadonlyArray10201<U>
  : T extends object
  ? DeepReadonlyObject10201<T>
  : T;

interface DeepReadonlyArray10201<T> extends ReadonlyArray<DeepReadonly10201<T>> {}

type DeepReadonlyObject10201<T> = {
  readonly [P in keyof T]: DeepReadonly10201<T[P]>;
};

type UnionToIntersection10201<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10201<T> = UnionToIntersection10201<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10201<T extends unknown[], V> = [...T, V];

type TuplifyUnion10201<T, L = LastOf10201<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10201<TuplifyUnion10201<Exclude<T, L>>, L>;

type DeepPartial10201<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10201<T[P]> }
  : T;

type Paths10201<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10201<K, Paths10201<T[K], Prev10201[D]>> : never }[keyof T]
  : never;

type Prev10201 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10201<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10201 {
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

type ConfigPaths10201 = Paths10201<NestedConfig10201>;

interface HeavyProps10201 {
  config: DeepPartial10201<NestedConfig10201>;
  path?: ConfigPaths10201;
}

const HeavyComponent10201 = memo(function HeavyComponent10201({ config }: HeavyProps10201) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10201) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10201 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10201: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10201.displayName = 'HeavyComponent10201';
export default HeavyComponent10201;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10383<T> = T extends (infer U)[]
  ? DeepReadonlyArray10383<U>
  : T extends object
  ? DeepReadonlyObject10383<T>
  : T;

interface DeepReadonlyArray10383<T> extends ReadonlyArray<DeepReadonly10383<T>> {}

type DeepReadonlyObject10383<T> = {
  readonly [P in keyof T]: DeepReadonly10383<T[P]>;
};

type UnionToIntersection10383<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10383<T> = UnionToIntersection10383<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10383<T extends unknown[], V> = [...T, V];

type TuplifyUnion10383<T, L = LastOf10383<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10383<TuplifyUnion10383<Exclude<T, L>>, L>;

type DeepPartial10383<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10383<T[P]> }
  : T;

type Paths10383<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10383<K, Paths10383<T[K], Prev10383[D]>> : never }[keyof T]
  : never;

type Prev10383 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10383<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10383 {
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

type ConfigPaths10383 = Paths10383<NestedConfig10383>;

interface HeavyProps10383 {
  config: DeepPartial10383<NestedConfig10383>;
  path?: ConfigPaths10383;
}

const HeavyComponent10383 = memo(function HeavyComponent10383({ config }: HeavyProps10383) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10383) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10383 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10383: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10383.displayName = 'HeavyComponent10383';
export default HeavyComponent10383;

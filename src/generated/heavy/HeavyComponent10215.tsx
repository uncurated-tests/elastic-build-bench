'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10215<T> = T extends (infer U)[]
  ? DeepReadonlyArray10215<U>
  : T extends object
  ? DeepReadonlyObject10215<T>
  : T;

interface DeepReadonlyArray10215<T> extends ReadonlyArray<DeepReadonly10215<T>> {}

type DeepReadonlyObject10215<T> = {
  readonly [P in keyof T]: DeepReadonly10215<T[P]>;
};

type UnionToIntersection10215<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10215<T> = UnionToIntersection10215<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10215<T extends unknown[], V> = [...T, V];

type TuplifyUnion10215<T, L = LastOf10215<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10215<TuplifyUnion10215<Exclude<T, L>>, L>;

type DeepPartial10215<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10215<T[P]> }
  : T;

type Paths10215<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10215<K, Paths10215<T[K], Prev10215[D]>> : never }[keyof T]
  : never;

type Prev10215 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10215<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10215 {
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

type ConfigPaths10215 = Paths10215<NestedConfig10215>;

interface HeavyProps10215 {
  config: DeepPartial10215<NestedConfig10215>;
  path?: ConfigPaths10215;
}

const HeavyComponent10215 = memo(function HeavyComponent10215({ config }: HeavyProps10215) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10215) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10215 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10215: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10215.displayName = 'HeavyComponent10215';
export default HeavyComponent10215;

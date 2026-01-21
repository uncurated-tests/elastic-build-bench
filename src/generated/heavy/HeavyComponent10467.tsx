'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10467<T> = T extends (infer U)[]
  ? DeepReadonlyArray10467<U>
  : T extends object
  ? DeepReadonlyObject10467<T>
  : T;

interface DeepReadonlyArray10467<T> extends ReadonlyArray<DeepReadonly10467<T>> {}

type DeepReadonlyObject10467<T> = {
  readonly [P in keyof T]: DeepReadonly10467<T[P]>;
};

type UnionToIntersection10467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10467<T> = UnionToIntersection10467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10467<T extends unknown[], V> = [...T, V];

type TuplifyUnion10467<T, L = LastOf10467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10467<TuplifyUnion10467<Exclude<T, L>>, L>;

type DeepPartial10467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10467<T[P]> }
  : T;

type Paths10467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10467<K, Paths10467<T[K], Prev10467[D]>> : never }[keyof T]
  : never;

type Prev10467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10467 {
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

type ConfigPaths10467 = Paths10467<NestedConfig10467>;

interface HeavyProps10467 {
  config: DeepPartial10467<NestedConfig10467>;
  path?: ConfigPaths10467;
}

const HeavyComponent10467 = memo(function HeavyComponent10467({ config }: HeavyProps10467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10467.displayName = 'HeavyComponent10467';
export default HeavyComponent10467;

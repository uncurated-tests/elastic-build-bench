'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10452<T> = T extends (infer U)[]
  ? DeepReadonlyArray10452<U>
  : T extends object
  ? DeepReadonlyObject10452<T>
  : T;

interface DeepReadonlyArray10452<T> extends ReadonlyArray<DeepReadonly10452<T>> {}

type DeepReadonlyObject10452<T> = {
  readonly [P in keyof T]: DeepReadonly10452<T[P]>;
};

type UnionToIntersection10452<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10452<T> = UnionToIntersection10452<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10452<T extends unknown[], V> = [...T, V];

type TuplifyUnion10452<T, L = LastOf10452<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10452<TuplifyUnion10452<Exclude<T, L>>, L>;

type DeepPartial10452<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10452<T[P]> }
  : T;

type Paths10452<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10452<K, Paths10452<T[K], Prev10452[D]>> : never }[keyof T]
  : never;

type Prev10452 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10452<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10452 {
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

type ConfigPaths10452 = Paths10452<NestedConfig10452>;

interface HeavyProps10452 {
  config: DeepPartial10452<NestedConfig10452>;
  path?: ConfigPaths10452;
}

const HeavyComponent10452 = memo(function HeavyComponent10452({ config }: HeavyProps10452) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10452) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10452 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10452: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10452.displayName = 'HeavyComponent10452';
export default HeavyComponent10452;

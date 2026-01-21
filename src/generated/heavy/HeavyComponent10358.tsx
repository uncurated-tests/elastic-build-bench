'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10358<T> = T extends (infer U)[]
  ? DeepReadonlyArray10358<U>
  : T extends object
  ? DeepReadonlyObject10358<T>
  : T;

interface DeepReadonlyArray10358<T> extends ReadonlyArray<DeepReadonly10358<T>> {}

type DeepReadonlyObject10358<T> = {
  readonly [P in keyof T]: DeepReadonly10358<T[P]>;
};

type UnionToIntersection10358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10358<T> = UnionToIntersection10358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10358<T extends unknown[], V> = [...T, V];

type TuplifyUnion10358<T, L = LastOf10358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10358<TuplifyUnion10358<Exclude<T, L>>, L>;

type DeepPartial10358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10358<T[P]> }
  : T;

type Paths10358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10358<K, Paths10358<T[K], Prev10358[D]>> : never }[keyof T]
  : never;

type Prev10358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10358 {
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

type ConfigPaths10358 = Paths10358<NestedConfig10358>;

interface HeavyProps10358 {
  config: DeepPartial10358<NestedConfig10358>;
  path?: ConfigPaths10358;
}

const HeavyComponent10358 = memo(function HeavyComponent10358({ config }: HeavyProps10358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10358.displayName = 'HeavyComponent10358';
export default HeavyComponent10358;

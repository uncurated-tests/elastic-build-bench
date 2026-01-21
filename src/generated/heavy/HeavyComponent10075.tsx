'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10075<T> = T extends (infer U)[]
  ? DeepReadonlyArray10075<U>
  : T extends object
  ? DeepReadonlyObject10075<T>
  : T;

interface DeepReadonlyArray10075<T> extends ReadonlyArray<DeepReadonly10075<T>> {}

type DeepReadonlyObject10075<T> = {
  readonly [P in keyof T]: DeepReadonly10075<T[P]>;
};

type UnionToIntersection10075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10075<T> = UnionToIntersection10075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10075<T extends unknown[], V> = [...T, V];

type TuplifyUnion10075<T, L = LastOf10075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10075<TuplifyUnion10075<Exclude<T, L>>, L>;

type DeepPartial10075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10075<T[P]> }
  : T;

type Paths10075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10075<K, Paths10075<T[K], Prev10075[D]>> : never }[keyof T]
  : never;

type Prev10075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10075 {
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

type ConfigPaths10075 = Paths10075<NestedConfig10075>;

interface HeavyProps10075 {
  config: DeepPartial10075<NestedConfig10075>;
  path?: ConfigPaths10075;
}

const HeavyComponent10075 = memo(function HeavyComponent10075({ config }: HeavyProps10075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10075.displayName = 'HeavyComponent10075';
export default HeavyComponent10075;

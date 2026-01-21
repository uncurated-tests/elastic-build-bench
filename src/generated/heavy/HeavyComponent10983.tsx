'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10983<T> = T extends (infer U)[]
  ? DeepReadonlyArray10983<U>
  : T extends object
  ? DeepReadonlyObject10983<T>
  : T;

interface DeepReadonlyArray10983<T> extends ReadonlyArray<DeepReadonly10983<T>> {}

type DeepReadonlyObject10983<T> = {
  readonly [P in keyof T]: DeepReadonly10983<T[P]>;
};

type UnionToIntersection10983<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10983<T> = UnionToIntersection10983<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10983<T extends unknown[], V> = [...T, V];

type TuplifyUnion10983<T, L = LastOf10983<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10983<TuplifyUnion10983<Exclude<T, L>>, L>;

type DeepPartial10983<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10983<T[P]> }
  : T;

type Paths10983<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10983<K, Paths10983<T[K], Prev10983[D]>> : never }[keyof T]
  : never;

type Prev10983 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10983<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10983 {
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

type ConfigPaths10983 = Paths10983<NestedConfig10983>;

interface HeavyProps10983 {
  config: DeepPartial10983<NestedConfig10983>;
  path?: ConfigPaths10983;
}

const HeavyComponent10983 = memo(function HeavyComponent10983({ config }: HeavyProps10983) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10983) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10983 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10983: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10983.displayName = 'HeavyComponent10983';
export default HeavyComponent10983;

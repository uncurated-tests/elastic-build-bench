'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10280<T> = T extends (infer U)[]
  ? DeepReadonlyArray10280<U>
  : T extends object
  ? DeepReadonlyObject10280<T>
  : T;

interface DeepReadonlyArray10280<T> extends ReadonlyArray<DeepReadonly10280<T>> {}

type DeepReadonlyObject10280<T> = {
  readonly [P in keyof T]: DeepReadonly10280<T[P]>;
};

type UnionToIntersection10280<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10280<T> = UnionToIntersection10280<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10280<T extends unknown[], V> = [...T, V];

type TuplifyUnion10280<T, L = LastOf10280<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10280<TuplifyUnion10280<Exclude<T, L>>, L>;

type DeepPartial10280<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10280<T[P]> }
  : T;

type Paths10280<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10280<K, Paths10280<T[K], Prev10280[D]>> : never }[keyof T]
  : never;

type Prev10280 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10280<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10280 {
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

type ConfigPaths10280 = Paths10280<NestedConfig10280>;

interface HeavyProps10280 {
  config: DeepPartial10280<NestedConfig10280>;
  path?: ConfigPaths10280;
}

const HeavyComponent10280 = memo(function HeavyComponent10280({ config }: HeavyProps10280) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10280) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10280 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10280: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10280.displayName = 'HeavyComponent10280';
export default HeavyComponent10280;

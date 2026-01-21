'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10801<T> = T extends (infer U)[]
  ? DeepReadonlyArray10801<U>
  : T extends object
  ? DeepReadonlyObject10801<T>
  : T;

interface DeepReadonlyArray10801<T> extends ReadonlyArray<DeepReadonly10801<T>> {}

type DeepReadonlyObject10801<T> = {
  readonly [P in keyof T]: DeepReadonly10801<T[P]>;
};

type UnionToIntersection10801<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10801<T> = UnionToIntersection10801<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10801<T extends unknown[], V> = [...T, V];

type TuplifyUnion10801<T, L = LastOf10801<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10801<TuplifyUnion10801<Exclude<T, L>>, L>;

type DeepPartial10801<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10801<T[P]> }
  : T;

type Paths10801<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10801<K, Paths10801<T[K], Prev10801[D]>> : never }[keyof T]
  : never;

type Prev10801 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10801<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10801 {
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

type ConfigPaths10801 = Paths10801<NestedConfig10801>;

interface HeavyProps10801 {
  config: DeepPartial10801<NestedConfig10801>;
  path?: ConfigPaths10801;
}

const HeavyComponent10801 = memo(function HeavyComponent10801({ config }: HeavyProps10801) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10801) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10801 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10801: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10801.displayName = 'HeavyComponent10801';
export default HeavyComponent10801;

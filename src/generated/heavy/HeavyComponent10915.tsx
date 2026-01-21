'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10915<T> = T extends (infer U)[]
  ? DeepReadonlyArray10915<U>
  : T extends object
  ? DeepReadonlyObject10915<T>
  : T;

interface DeepReadonlyArray10915<T> extends ReadonlyArray<DeepReadonly10915<T>> {}

type DeepReadonlyObject10915<T> = {
  readonly [P in keyof T]: DeepReadonly10915<T[P]>;
};

type UnionToIntersection10915<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10915<T> = UnionToIntersection10915<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10915<T extends unknown[], V> = [...T, V];

type TuplifyUnion10915<T, L = LastOf10915<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10915<TuplifyUnion10915<Exclude<T, L>>, L>;

type DeepPartial10915<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10915<T[P]> }
  : T;

type Paths10915<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10915<K, Paths10915<T[K], Prev10915[D]>> : never }[keyof T]
  : never;

type Prev10915 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10915<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10915 {
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

type ConfigPaths10915 = Paths10915<NestedConfig10915>;

interface HeavyProps10915 {
  config: DeepPartial10915<NestedConfig10915>;
  path?: ConfigPaths10915;
}

const HeavyComponent10915 = memo(function HeavyComponent10915({ config }: HeavyProps10915) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10915) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10915 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10915: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10915.displayName = 'HeavyComponent10915';
export default HeavyComponent10915;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10566<T> = T extends (infer U)[]
  ? DeepReadonlyArray10566<U>
  : T extends object
  ? DeepReadonlyObject10566<T>
  : T;

interface DeepReadonlyArray10566<T> extends ReadonlyArray<DeepReadonly10566<T>> {}

type DeepReadonlyObject10566<T> = {
  readonly [P in keyof T]: DeepReadonly10566<T[P]>;
};

type UnionToIntersection10566<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10566<T> = UnionToIntersection10566<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10566<T extends unknown[], V> = [...T, V];

type TuplifyUnion10566<T, L = LastOf10566<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10566<TuplifyUnion10566<Exclude<T, L>>, L>;

type DeepPartial10566<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10566<T[P]> }
  : T;

type Paths10566<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10566<K, Paths10566<T[K], Prev10566[D]>> : never }[keyof T]
  : never;

type Prev10566 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10566<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10566 {
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

type ConfigPaths10566 = Paths10566<NestedConfig10566>;

interface HeavyProps10566 {
  config: DeepPartial10566<NestedConfig10566>;
  path?: ConfigPaths10566;
}

const HeavyComponent10566 = memo(function HeavyComponent10566({ config }: HeavyProps10566) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10566) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10566 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10566: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10566.displayName = 'HeavyComponent10566';
export default HeavyComponent10566;

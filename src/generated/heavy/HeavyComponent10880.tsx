'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10880<T> = T extends (infer U)[]
  ? DeepReadonlyArray10880<U>
  : T extends object
  ? DeepReadonlyObject10880<T>
  : T;

interface DeepReadonlyArray10880<T> extends ReadonlyArray<DeepReadonly10880<T>> {}

type DeepReadonlyObject10880<T> = {
  readonly [P in keyof T]: DeepReadonly10880<T[P]>;
};

type UnionToIntersection10880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10880<T> = UnionToIntersection10880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10880<T extends unknown[], V> = [...T, V];

type TuplifyUnion10880<T, L = LastOf10880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10880<TuplifyUnion10880<Exclude<T, L>>, L>;

type DeepPartial10880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10880<T[P]> }
  : T;

type Paths10880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10880<K, Paths10880<T[K], Prev10880[D]>> : never }[keyof T]
  : never;

type Prev10880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10880 {
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

type ConfigPaths10880 = Paths10880<NestedConfig10880>;

interface HeavyProps10880 {
  config: DeepPartial10880<NestedConfig10880>;
  path?: ConfigPaths10880;
}

const HeavyComponent10880 = memo(function HeavyComponent10880({ config }: HeavyProps10880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10880.displayName = 'HeavyComponent10880';
export default HeavyComponent10880;

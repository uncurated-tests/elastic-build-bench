'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10493<T> = T extends (infer U)[]
  ? DeepReadonlyArray10493<U>
  : T extends object
  ? DeepReadonlyObject10493<T>
  : T;

interface DeepReadonlyArray10493<T> extends ReadonlyArray<DeepReadonly10493<T>> {}

type DeepReadonlyObject10493<T> = {
  readonly [P in keyof T]: DeepReadonly10493<T[P]>;
};

type UnionToIntersection10493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10493<T> = UnionToIntersection10493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10493<T extends unknown[], V> = [...T, V];

type TuplifyUnion10493<T, L = LastOf10493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10493<TuplifyUnion10493<Exclude<T, L>>, L>;

type DeepPartial10493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10493<T[P]> }
  : T;

type Paths10493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10493<K, Paths10493<T[K], Prev10493[D]>> : never }[keyof T]
  : never;

type Prev10493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10493 {
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

type ConfigPaths10493 = Paths10493<NestedConfig10493>;

interface HeavyProps10493 {
  config: DeepPartial10493<NestedConfig10493>;
  path?: ConfigPaths10493;
}

const HeavyComponent10493 = memo(function HeavyComponent10493({ config }: HeavyProps10493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10493.displayName = 'HeavyComponent10493';
export default HeavyComponent10493;

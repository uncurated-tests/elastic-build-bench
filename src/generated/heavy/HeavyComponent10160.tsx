'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10160<T> = T extends (infer U)[]
  ? DeepReadonlyArray10160<U>
  : T extends object
  ? DeepReadonlyObject10160<T>
  : T;

interface DeepReadonlyArray10160<T> extends ReadonlyArray<DeepReadonly10160<T>> {}

type DeepReadonlyObject10160<T> = {
  readonly [P in keyof T]: DeepReadonly10160<T[P]>;
};

type UnionToIntersection10160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10160<T> = UnionToIntersection10160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10160<T extends unknown[], V> = [...T, V];

type TuplifyUnion10160<T, L = LastOf10160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10160<TuplifyUnion10160<Exclude<T, L>>, L>;

type DeepPartial10160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10160<T[P]> }
  : T;

type Paths10160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10160<K, Paths10160<T[K], Prev10160[D]>> : never }[keyof T]
  : never;

type Prev10160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10160 {
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

type ConfigPaths10160 = Paths10160<NestedConfig10160>;

interface HeavyProps10160 {
  config: DeepPartial10160<NestedConfig10160>;
  path?: ConfigPaths10160;
}

const HeavyComponent10160 = memo(function HeavyComponent10160({ config }: HeavyProps10160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10160.displayName = 'HeavyComponent10160';
export default HeavyComponent10160;

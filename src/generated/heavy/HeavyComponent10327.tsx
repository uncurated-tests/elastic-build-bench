'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10327<T> = T extends (infer U)[]
  ? DeepReadonlyArray10327<U>
  : T extends object
  ? DeepReadonlyObject10327<T>
  : T;

interface DeepReadonlyArray10327<T> extends ReadonlyArray<DeepReadonly10327<T>> {}

type DeepReadonlyObject10327<T> = {
  readonly [P in keyof T]: DeepReadonly10327<T[P]>;
};

type UnionToIntersection10327<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10327<T> = UnionToIntersection10327<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10327<T extends unknown[], V> = [...T, V];

type TuplifyUnion10327<T, L = LastOf10327<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10327<TuplifyUnion10327<Exclude<T, L>>, L>;

type DeepPartial10327<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10327<T[P]> }
  : T;

type Paths10327<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10327<K, Paths10327<T[K], Prev10327[D]>> : never }[keyof T]
  : never;

type Prev10327 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10327<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10327 {
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

type ConfigPaths10327 = Paths10327<NestedConfig10327>;

interface HeavyProps10327 {
  config: DeepPartial10327<NestedConfig10327>;
  path?: ConfigPaths10327;
}

const HeavyComponent10327 = memo(function HeavyComponent10327({ config }: HeavyProps10327) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10327) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10327 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10327: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10327.displayName = 'HeavyComponent10327';
export default HeavyComponent10327;

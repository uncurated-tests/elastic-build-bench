'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10878<T> = T extends (infer U)[]
  ? DeepReadonlyArray10878<U>
  : T extends object
  ? DeepReadonlyObject10878<T>
  : T;

interface DeepReadonlyArray10878<T> extends ReadonlyArray<DeepReadonly10878<T>> {}

type DeepReadonlyObject10878<T> = {
  readonly [P in keyof T]: DeepReadonly10878<T[P]>;
};

type UnionToIntersection10878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10878<T> = UnionToIntersection10878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10878<T extends unknown[], V> = [...T, V];

type TuplifyUnion10878<T, L = LastOf10878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10878<TuplifyUnion10878<Exclude<T, L>>, L>;

type DeepPartial10878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10878<T[P]> }
  : T;

type Paths10878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10878<K, Paths10878<T[K], Prev10878[D]>> : never }[keyof T]
  : never;

type Prev10878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10878 {
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

type ConfigPaths10878 = Paths10878<NestedConfig10878>;

interface HeavyProps10878 {
  config: DeepPartial10878<NestedConfig10878>;
  path?: ConfigPaths10878;
}

const HeavyComponent10878 = memo(function HeavyComponent10878({ config }: HeavyProps10878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10878.displayName = 'HeavyComponent10878';
export default HeavyComponent10878;

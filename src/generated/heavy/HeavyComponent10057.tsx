'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10057<T> = T extends (infer U)[]
  ? DeepReadonlyArray10057<U>
  : T extends object
  ? DeepReadonlyObject10057<T>
  : T;

interface DeepReadonlyArray10057<T> extends ReadonlyArray<DeepReadonly10057<T>> {}

type DeepReadonlyObject10057<T> = {
  readonly [P in keyof T]: DeepReadonly10057<T[P]>;
};

type UnionToIntersection10057<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10057<T> = UnionToIntersection10057<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10057<T extends unknown[], V> = [...T, V];

type TuplifyUnion10057<T, L = LastOf10057<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10057<TuplifyUnion10057<Exclude<T, L>>, L>;

type DeepPartial10057<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10057<T[P]> }
  : T;

type Paths10057<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10057<K, Paths10057<T[K], Prev10057[D]>> : never }[keyof T]
  : never;

type Prev10057 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10057<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10057 {
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

type ConfigPaths10057 = Paths10057<NestedConfig10057>;

interface HeavyProps10057 {
  config: DeepPartial10057<NestedConfig10057>;
  path?: ConfigPaths10057;
}

const HeavyComponent10057 = memo(function HeavyComponent10057({ config }: HeavyProps10057) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10057) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10057 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10057: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10057.displayName = 'HeavyComponent10057';
export default HeavyComponent10057;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10047<T> = T extends (infer U)[]
  ? DeepReadonlyArray10047<U>
  : T extends object
  ? DeepReadonlyObject10047<T>
  : T;

interface DeepReadonlyArray10047<T> extends ReadonlyArray<DeepReadonly10047<T>> {}

type DeepReadonlyObject10047<T> = {
  readonly [P in keyof T]: DeepReadonly10047<T[P]>;
};

type UnionToIntersection10047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10047<T> = UnionToIntersection10047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10047<T extends unknown[], V> = [...T, V];

type TuplifyUnion10047<T, L = LastOf10047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10047<TuplifyUnion10047<Exclude<T, L>>, L>;

type DeepPartial10047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10047<T[P]> }
  : T;

type Paths10047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10047<K, Paths10047<T[K], Prev10047[D]>> : never }[keyof T]
  : never;

type Prev10047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10047 {
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

type ConfigPaths10047 = Paths10047<NestedConfig10047>;

interface HeavyProps10047 {
  config: DeepPartial10047<NestedConfig10047>;
  path?: ConfigPaths10047;
}

const HeavyComponent10047 = memo(function HeavyComponent10047({ config }: HeavyProps10047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10047.displayName = 'HeavyComponent10047';
export default HeavyComponent10047;

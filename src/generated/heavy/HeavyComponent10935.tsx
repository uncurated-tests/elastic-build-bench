'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10935<T> = T extends (infer U)[]
  ? DeepReadonlyArray10935<U>
  : T extends object
  ? DeepReadonlyObject10935<T>
  : T;

interface DeepReadonlyArray10935<T> extends ReadonlyArray<DeepReadonly10935<T>> {}

type DeepReadonlyObject10935<T> = {
  readonly [P in keyof T]: DeepReadonly10935<T[P]>;
};

type UnionToIntersection10935<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10935<T> = UnionToIntersection10935<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10935<T extends unknown[], V> = [...T, V];

type TuplifyUnion10935<T, L = LastOf10935<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10935<TuplifyUnion10935<Exclude<T, L>>, L>;

type DeepPartial10935<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10935<T[P]> }
  : T;

type Paths10935<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10935<K, Paths10935<T[K], Prev10935[D]>> : never }[keyof T]
  : never;

type Prev10935 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10935<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10935 {
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

type ConfigPaths10935 = Paths10935<NestedConfig10935>;

interface HeavyProps10935 {
  config: DeepPartial10935<NestedConfig10935>;
  path?: ConfigPaths10935;
}

const HeavyComponent10935 = memo(function HeavyComponent10935({ config }: HeavyProps10935) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10935) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10935 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10935: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10935.displayName = 'HeavyComponent10935';
export default HeavyComponent10935;

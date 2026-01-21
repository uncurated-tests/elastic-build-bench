'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10113<T> = T extends (infer U)[]
  ? DeepReadonlyArray10113<U>
  : T extends object
  ? DeepReadonlyObject10113<T>
  : T;

interface DeepReadonlyArray10113<T> extends ReadonlyArray<DeepReadonly10113<T>> {}

type DeepReadonlyObject10113<T> = {
  readonly [P in keyof T]: DeepReadonly10113<T[P]>;
};

type UnionToIntersection10113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10113<T> = UnionToIntersection10113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10113<T extends unknown[], V> = [...T, V];

type TuplifyUnion10113<T, L = LastOf10113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10113<TuplifyUnion10113<Exclude<T, L>>, L>;

type DeepPartial10113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10113<T[P]> }
  : T;

type Paths10113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10113<K, Paths10113<T[K], Prev10113[D]>> : never }[keyof T]
  : never;

type Prev10113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10113 {
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

type ConfigPaths10113 = Paths10113<NestedConfig10113>;

interface HeavyProps10113 {
  config: DeepPartial10113<NestedConfig10113>;
  path?: ConfigPaths10113;
}

const HeavyComponent10113 = memo(function HeavyComponent10113({ config }: HeavyProps10113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10113.displayName = 'HeavyComponent10113';
export default HeavyComponent10113;

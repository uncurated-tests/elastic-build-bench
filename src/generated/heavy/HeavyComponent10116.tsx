'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10116<T> = T extends (infer U)[]
  ? DeepReadonlyArray10116<U>
  : T extends object
  ? DeepReadonlyObject10116<T>
  : T;

interface DeepReadonlyArray10116<T> extends ReadonlyArray<DeepReadonly10116<T>> {}

type DeepReadonlyObject10116<T> = {
  readonly [P in keyof T]: DeepReadonly10116<T[P]>;
};

type UnionToIntersection10116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10116<T> = UnionToIntersection10116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10116<T extends unknown[], V> = [...T, V];

type TuplifyUnion10116<T, L = LastOf10116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10116<TuplifyUnion10116<Exclude<T, L>>, L>;

type DeepPartial10116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10116<T[P]> }
  : T;

type Paths10116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10116<K, Paths10116<T[K], Prev10116[D]>> : never }[keyof T]
  : never;

type Prev10116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10116 {
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

type ConfigPaths10116 = Paths10116<NestedConfig10116>;

interface HeavyProps10116 {
  config: DeepPartial10116<NestedConfig10116>;
  path?: ConfigPaths10116;
}

const HeavyComponent10116 = memo(function HeavyComponent10116({ config }: HeavyProps10116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10116.displayName = 'HeavyComponent10116';
export default HeavyComponent10116;

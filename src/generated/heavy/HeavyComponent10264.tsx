'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10264<T> = T extends (infer U)[]
  ? DeepReadonlyArray10264<U>
  : T extends object
  ? DeepReadonlyObject10264<T>
  : T;

interface DeepReadonlyArray10264<T> extends ReadonlyArray<DeepReadonly10264<T>> {}

type DeepReadonlyObject10264<T> = {
  readonly [P in keyof T]: DeepReadonly10264<T[P]>;
};

type UnionToIntersection10264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10264<T> = UnionToIntersection10264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10264<T extends unknown[], V> = [...T, V];

type TuplifyUnion10264<T, L = LastOf10264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10264<TuplifyUnion10264<Exclude<T, L>>, L>;

type DeepPartial10264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10264<T[P]> }
  : T;

type Paths10264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10264<K, Paths10264<T[K], Prev10264[D]>> : never }[keyof T]
  : never;

type Prev10264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10264 {
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

type ConfigPaths10264 = Paths10264<NestedConfig10264>;

interface HeavyProps10264 {
  config: DeepPartial10264<NestedConfig10264>;
  path?: ConfigPaths10264;
}

const HeavyComponent10264 = memo(function HeavyComponent10264({ config }: HeavyProps10264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10264.displayName = 'HeavyComponent10264';
export default HeavyComponent10264;

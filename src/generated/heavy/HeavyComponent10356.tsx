'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10356<T> = T extends (infer U)[]
  ? DeepReadonlyArray10356<U>
  : T extends object
  ? DeepReadonlyObject10356<T>
  : T;

interface DeepReadonlyArray10356<T> extends ReadonlyArray<DeepReadonly10356<T>> {}

type DeepReadonlyObject10356<T> = {
  readonly [P in keyof T]: DeepReadonly10356<T[P]>;
};

type UnionToIntersection10356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10356<T> = UnionToIntersection10356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10356<T extends unknown[], V> = [...T, V];

type TuplifyUnion10356<T, L = LastOf10356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10356<TuplifyUnion10356<Exclude<T, L>>, L>;

type DeepPartial10356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10356<T[P]> }
  : T;

type Paths10356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10356<K, Paths10356<T[K], Prev10356[D]>> : never }[keyof T]
  : never;

type Prev10356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10356 {
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

type ConfigPaths10356 = Paths10356<NestedConfig10356>;

interface HeavyProps10356 {
  config: DeepPartial10356<NestedConfig10356>;
  path?: ConfigPaths10356;
}

const HeavyComponent10356 = memo(function HeavyComponent10356({ config }: HeavyProps10356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10356.displayName = 'HeavyComponent10356';
export default HeavyComponent10356;

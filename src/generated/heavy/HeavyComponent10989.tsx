'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10989<T> = T extends (infer U)[]
  ? DeepReadonlyArray10989<U>
  : T extends object
  ? DeepReadonlyObject10989<T>
  : T;

interface DeepReadonlyArray10989<T> extends ReadonlyArray<DeepReadonly10989<T>> {}

type DeepReadonlyObject10989<T> = {
  readonly [P in keyof T]: DeepReadonly10989<T[P]>;
};

type UnionToIntersection10989<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10989<T> = UnionToIntersection10989<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10989<T extends unknown[], V> = [...T, V];

type TuplifyUnion10989<T, L = LastOf10989<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10989<TuplifyUnion10989<Exclude<T, L>>, L>;

type DeepPartial10989<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10989<T[P]> }
  : T;

type Paths10989<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10989<K, Paths10989<T[K], Prev10989[D]>> : never }[keyof T]
  : never;

type Prev10989 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10989<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10989 {
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

type ConfigPaths10989 = Paths10989<NestedConfig10989>;

interface HeavyProps10989 {
  config: DeepPartial10989<NestedConfig10989>;
  path?: ConfigPaths10989;
}

const HeavyComponent10989 = memo(function HeavyComponent10989({ config }: HeavyProps10989) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10989) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10989 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10989: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10989.displayName = 'HeavyComponent10989';
export default HeavyComponent10989;

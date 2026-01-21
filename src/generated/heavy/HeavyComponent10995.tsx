'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10995<T> = T extends (infer U)[]
  ? DeepReadonlyArray10995<U>
  : T extends object
  ? DeepReadonlyObject10995<T>
  : T;

interface DeepReadonlyArray10995<T> extends ReadonlyArray<DeepReadonly10995<T>> {}

type DeepReadonlyObject10995<T> = {
  readonly [P in keyof T]: DeepReadonly10995<T[P]>;
};

type UnionToIntersection10995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10995<T> = UnionToIntersection10995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10995<T extends unknown[], V> = [...T, V];

type TuplifyUnion10995<T, L = LastOf10995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10995<TuplifyUnion10995<Exclude<T, L>>, L>;

type DeepPartial10995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10995<T[P]> }
  : T;

type Paths10995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10995<K, Paths10995<T[K], Prev10995[D]>> : never }[keyof T]
  : never;

type Prev10995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10995 {
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

type ConfigPaths10995 = Paths10995<NestedConfig10995>;

interface HeavyProps10995 {
  config: DeepPartial10995<NestedConfig10995>;
  path?: ConfigPaths10995;
}

const HeavyComponent10995 = memo(function HeavyComponent10995({ config }: HeavyProps10995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10995.displayName = 'HeavyComponent10995';
export default HeavyComponent10995;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10109<T> = T extends (infer U)[]
  ? DeepReadonlyArray10109<U>
  : T extends object
  ? DeepReadonlyObject10109<T>
  : T;

interface DeepReadonlyArray10109<T> extends ReadonlyArray<DeepReadonly10109<T>> {}

type DeepReadonlyObject10109<T> = {
  readonly [P in keyof T]: DeepReadonly10109<T[P]>;
};

type UnionToIntersection10109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10109<T> = UnionToIntersection10109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10109<T extends unknown[], V> = [...T, V];

type TuplifyUnion10109<T, L = LastOf10109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10109<TuplifyUnion10109<Exclude<T, L>>, L>;

type DeepPartial10109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10109<T[P]> }
  : T;

type Paths10109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10109<K, Paths10109<T[K], Prev10109[D]>> : never }[keyof T]
  : never;

type Prev10109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10109 {
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

type ConfigPaths10109 = Paths10109<NestedConfig10109>;

interface HeavyProps10109 {
  config: DeepPartial10109<NestedConfig10109>;
  path?: ConfigPaths10109;
}

const HeavyComponent10109 = memo(function HeavyComponent10109({ config }: HeavyProps10109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10109.displayName = 'HeavyComponent10109';
export default HeavyComponent10109;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10456<T> = T extends (infer U)[]
  ? DeepReadonlyArray10456<U>
  : T extends object
  ? DeepReadonlyObject10456<T>
  : T;

interface DeepReadonlyArray10456<T> extends ReadonlyArray<DeepReadonly10456<T>> {}

type DeepReadonlyObject10456<T> = {
  readonly [P in keyof T]: DeepReadonly10456<T[P]>;
};

type UnionToIntersection10456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10456<T> = UnionToIntersection10456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10456<T extends unknown[], V> = [...T, V];

type TuplifyUnion10456<T, L = LastOf10456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10456<TuplifyUnion10456<Exclude<T, L>>, L>;

type DeepPartial10456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10456<T[P]> }
  : T;

type Paths10456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10456<K, Paths10456<T[K], Prev10456[D]>> : never }[keyof T]
  : never;

type Prev10456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10456 {
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

type ConfigPaths10456 = Paths10456<NestedConfig10456>;

interface HeavyProps10456 {
  config: DeepPartial10456<NestedConfig10456>;
  path?: ConfigPaths10456;
}

const HeavyComponent10456 = memo(function HeavyComponent10456({ config }: HeavyProps10456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10456.displayName = 'HeavyComponent10456';
export default HeavyComponent10456;

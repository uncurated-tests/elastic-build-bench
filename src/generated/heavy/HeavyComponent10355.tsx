'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10355<T> = T extends (infer U)[]
  ? DeepReadonlyArray10355<U>
  : T extends object
  ? DeepReadonlyObject10355<T>
  : T;

interface DeepReadonlyArray10355<T> extends ReadonlyArray<DeepReadonly10355<T>> {}

type DeepReadonlyObject10355<T> = {
  readonly [P in keyof T]: DeepReadonly10355<T[P]>;
};

type UnionToIntersection10355<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10355<T> = UnionToIntersection10355<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10355<T extends unknown[], V> = [...T, V];

type TuplifyUnion10355<T, L = LastOf10355<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10355<TuplifyUnion10355<Exclude<T, L>>, L>;

type DeepPartial10355<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10355<T[P]> }
  : T;

type Paths10355<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10355<K, Paths10355<T[K], Prev10355[D]>> : never }[keyof T]
  : never;

type Prev10355 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10355<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10355 {
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

type ConfigPaths10355 = Paths10355<NestedConfig10355>;

interface HeavyProps10355 {
  config: DeepPartial10355<NestedConfig10355>;
  path?: ConfigPaths10355;
}

const HeavyComponent10355 = memo(function HeavyComponent10355({ config }: HeavyProps10355) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10355) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10355 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10355: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10355.displayName = 'HeavyComponent10355';
export default HeavyComponent10355;

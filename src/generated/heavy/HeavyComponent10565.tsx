'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10565<T> = T extends (infer U)[]
  ? DeepReadonlyArray10565<U>
  : T extends object
  ? DeepReadonlyObject10565<T>
  : T;

interface DeepReadonlyArray10565<T> extends ReadonlyArray<DeepReadonly10565<T>> {}

type DeepReadonlyObject10565<T> = {
  readonly [P in keyof T]: DeepReadonly10565<T[P]>;
};

type UnionToIntersection10565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10565<T> = UnionToIntersection10565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10565<T extends unknown[], V> = [...T, V];

type TuplifyUnion10565<T, L = LastOf10565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10565<TuplifyUnion10565<Exclude<T, L>>, L>;

type DeepPartial10565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10565<T[P]> }
  : T;

type Paths10565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10565<K, Paths10565<T[K], Prev10565[D]>> : never }[keyof T]
  : never;

type Prev10565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10565 {
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

type ConfigPaths10565 = Paths10565<NestedConfig10565>;

interface HeavyProps10565 {
  config: DeepPartial10565<NestedConfig10565>;
  path?: ConfigPaths10565;
}

const HeavyComponent10565 = memo(function HeavyComponent10565({ config }: HeavyProps10565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10565.displayName = 'HeavyComponent10565';
export default HeavyComponent10565;

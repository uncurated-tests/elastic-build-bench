'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10526<T> = T extends (infer U)[]
  ? DeepReadonlyArray10526<U>
  : T extends object
  ? DeepReadonlyObject10526<T>
  : T;

interface DeepReadonlyArray10526<T> extends ReadonlyArray<DeepReadonly10526<T>> {}

type DeepReadonlyObject10526<T> = {
  readonly [P in keyof T]: DeepReadonly10526<T[P]>;
};

type UnionToIntersection10526<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10526<T> = UnionToIntersection10526<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10526<T extends unknown[], V> = [...T, V];

type TuplifyUnion10526<T, L = LastOf10526<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10526<TuplifyUnion10526<Exclude<T, L>>, L>;

type DeepPartial10526<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10526<T[P]> }
  : T;

type Paths10526<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10526<K, Paths10526<T[K], Prev10526[D]>> : never }[keyof T]
  : never;

type Prev10526 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10526<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10526 {
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

type ConfigPaths10526 = Paths10526<NestedConfig10526>;

interface HeavyProps10526 {
  config: DeepPartial10526<NestedConfig10526>;
  path?: ConfigPaths10526;
}

const HeavyComponent10526 = memo(function HeavyComponent10526({ config }: HeavyProps10526) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10526) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10526 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10526: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10526.displayName = 'HeavyComponent10526';
export default HeavyComponent10526;

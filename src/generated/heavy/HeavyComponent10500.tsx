'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10500<T> = T extends (infer U)[]
  ? DeepReadonlyArray10500<U>
  : T extends object
  ? DeepReadonlyObject10500<T>
  : T;

interface DeepReadonlyArray10500<T> extends ReadonlyArray<DeepReadonly10500<T>> {}

type DeepReadonlyObject10500<T> = {
  readonly [P in keyof T]: DeepReadonly10500<T[P]>;
};

type UnionToIntersection10500<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10500<T> = UnionToIntersection10500<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10500<T extends unknown[], V> = [...T, V];

type TuplifyUnion10500<T, L = LastOf10500<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10500<TuplifyUnion10500<Exclude<T, L>>, L>;

type DeepPartial10500<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10500<T[P]> }
  : T;

type Paths10500<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10500<K, Paths10500<T[K], Prev10500[D]>> : never }[keyof T]
  : never;

type Prev10500 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10500<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10500 {
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

type ConfigPaths10500 = Paths10500<NestedConfig10500>;

interface HeavyProps10500 {
  config: DeepPartial10500<NestedConfig10500>;
  path?: ConfigPaths10500;
}

const HeavyComponent10500 = memo(function HeavyComponent10500({ config }: HeavyProps10500) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10500) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10500 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10500: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10500.displayName = 'HeavyComponent10500';
export default HeavyComponent10500;

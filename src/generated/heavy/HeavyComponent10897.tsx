'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10897<T> = T extends (infer U)[]
  ? DeepReadonlyArray10897<U>
  : T extends object
  ? DeepReadonlyObject10897<T>
  : T;

interface DeepReadonlyArray10897<T> extends ReadonlyArray<DeepReadonly10897<T>> {}

type DeepReadonlyObject10897<T> = {
  readonly [P in keyof T]: DeepReadonly10897<T[P]>;
};

type UnionToIntersection10897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10897<T> = UnionToIntersection10897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10897<T extends unknown[], V> = [...T, V];

type TuplifyUnion10897<T, L = LastOf10897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10897<TuplifyUnion10897<Exclude<T, L>>, L>;

type DeepPartial10897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10897<T[P]> }
  : T;

type Paths10897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10897<K, Paths10897<T[K], Prev10897[D]>> : never }[keyof T]
  : never;

type Prev10897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10897 {
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

type ConfigPaths10897 = Paths10897<NestedConfig10897>;

interface HeavyProps10897 {
  config: DeepPartial10897<NestedConfig10897>;
  path?: ConfigPaths10897;
}

const HeavyComponent10897 = memo(function HeavyComponent10897({ config }: HeavyProps10897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10897.displayName = 'HeavyComponent10897';
export default HeavyComponent10897;

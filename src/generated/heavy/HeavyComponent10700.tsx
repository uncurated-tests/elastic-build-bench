'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10700<T> = T extends (infer U)[]
  ? DeepReadonlyArray10700<U>
  : T extends object
  ? DeepReadonlyObject10700<T>
  : T;

interface DeepReadonlyArray10700<T> extends ReadonlyArray<DeepReadonly10700<T>> {}

type DeepReadonlyObject10700<T> = {
  readonly [P in keyof T]: DeepReadonly10700<T[P]>;
};

type UnionToIntersection10700<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10700<T> = UnionToIntersection10700<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10700<T extends unknown[], V> = [...T, V];

type TuplifyUnion10700<T, L = LastOf10700<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10700<TuplifyUnion10700<Exclude<T, L>>, L>;

type DeepPartial10700<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10700<T[P]> }
  : T;

type Paths10700<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10700<K, Paths10700<T[K], Prev10700[D]>> : never }[keyof T]
  : never;

type Prev10700 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10700<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10700 {
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

type ConfigPaths10700 = Paths10700<NestedConfig10700>;

interface HeavyProps10700 {
  config: DeepPartial10700<NestedConfig10700>;
  path?: ConfigPaths10700;
}

const HeavyComponent10700 = memo(function HeavyComponent10700({ config }: HeavyProps10700) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10700) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10700 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10700: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10700.displayName = 'HeavyComponent10700';
export default HeavyComponent10700;

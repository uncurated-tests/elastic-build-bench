'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10244<T> = T extends (infer U)[]
  ? DeepReadonlyArray10244<U>
  : T extends object
  ? DeepReadonlyObject10244<T>
  : T;

interface DeepReadonlyArray10244<T> extends ReadonlyArray<DeepReadonly10244<T>> {}

type DeepReadonlyObject10244<T> = {
  readonly [P in keyof T]: DeepReadonly10244<T[P]>;
};

type UnionToIntersection10244<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10244<T> = UnionToIntersection10244<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10244<T extends unknown[], V> = [...T, V];

type TuplifyUnion10244<T, L = LastOf10244<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10244<TuplifyUnion10244<Exclude<T, L>>, L>;

type DeepPartial10244<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10244<T[P]> }
  : T;

type Paths10244<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10244<K, Paths10244<T[K], Prev10244[D]>> : never }[keyof T]
  : never;

type Prev10244 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10244<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10244 {
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

type ConfigPaths10244 = Paths10244<NestedConfig10244>;

interface HeavyProps10244 {
  config: DeepPartial10244<NestedConfig10244>;
  path?: ConfigPaths10244;
}

const HeavyComponent10244 = memo(function HeavyComponent10244({ config }: HeavyProps10244) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10244) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10244 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10244: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10244.displayName = 'HeavyComponent10244';
export default HeavyComponent10244;

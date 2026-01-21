'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10141<T> = T extends (infer U)[]
  ? DeepReadonlyArray10141<U>
  : T extends object
  ? DeepReadonlyObject10141<T>
  : T;

interface DeepReadonlyArray10141<T> extends ReadonlyArray<DeepReadonly10141<T>> {}

type DeepReadonlyObject10141<T> = {
  readonly [P in keyof T]: DeepReadonly10141<T[P]>;
};

type UnionToIntersection10141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10141<T> = UnionToIntersection10141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10141<T extends unknown[], V> = [...T, V];

type TuplifyUnion10141<T, L = LastOf10141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10141<TuplifyUnion10141<Exclude<T, L>>, L>;

type DeepPartial10141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10141<T[P]> }
  : T;

type Paths10141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10141<K, Paths10141<T[K], Prev10141[D]>> : never }[keyof T]
  : never;

type Prev10141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10141 {
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

type ConfigPaths10141 = Paths10141<NestedConfig10141>;

interface HeavyProps10141 {
  config: DeepPartial10141<NestedConfig10141>;
  path?: ConfigPaths10141;
}

const HeavyComponent10141 = memo(function HeavyComponent10141({ config }: HeavyProps10141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10141.displayName = 'HeavyComponent10141';
export default HeavyComponent10141;

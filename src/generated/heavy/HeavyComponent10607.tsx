'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10607<T> = T extends (infer U)[]
  ? DeepReadonlyArray10607<U>
  : T extends object
  ? DeepReadonlyObject10607<T>
  : T;

interface DeepReadonlyArray10607<T> extends ReadonlyArray<DeepReadonly10607<T>> {}

type DeepReadonlyObject10607<T> = {
  readonly [P in keyof T]: DeepReadonly10607<T[P]>;
};

type UnionToIntersection10607<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10607<T> = UnionToIntersection10607<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10607<T extends unknown[], V> = [...T, V];

type TuplifyUnion10607<T, L = LastOf10607<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10607<TuplifyUnion10607<Exclude<T, L>>, L>;

type DeepPartial10607<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10607<T[P]> }
  : T;

type Paths10607<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10607<K, Paths10607<T[K], Prev10607[D]>> : never }[keyof T]
  : never;

type Prev10607 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10607<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10607 {
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

type ConfigPaths10607 = Paths10607<NestedConfig10607>;

interface HeavyProps10607 {
  config: DeepPartial10607<NestedConfig10607>;
  path?: ConfigPaths10607;
}

const HeavyComponent10607 = memo(function HeavyComponent10607({ config }: HeavyProps10607) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10607) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10607 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10607: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10607.displayName = 'HeavyComponent10607';
export default HeavyComponent10607;

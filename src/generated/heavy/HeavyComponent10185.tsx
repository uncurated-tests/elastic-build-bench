'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10185<T> = T extends (infer U)[]
  ? DeepReadonlyArray10185<U>
  : T extends object
  ? DeepReadonlyObject10185<T>
  : T;

interface DeepReadonlyArray10185<T> extends ReadonlyArray<DeepReadonly10185<T>> {}

type DeepReadonlyObject10185<T> = {
  readonly [P in keyof T]: DeepReadonly10185<T[P]>;
};

type UnionToIntersection10185<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10185<T> = UnionToIntersection10185<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10185<T extends unknown[], V> = [...T, V];

type TuplifyUnion10185<T, L = LastOf10185<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10185<TuplifyUnion10185<Exclude<T, L>>, L>;

type DeepPartial10185<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10185<T[P]> }
  : T;

type Paths10185<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10185<K, Paths10185<T[K], Prev10185[D]>> : never }[keyof T]
  : never;

type Prev10185 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10185<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10185 {
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

type ConfigPaths10185 = Paths10185<NestedConfig10185>;

interface HeavyProps10185 {
  config: DeepPartial10185<NestedConfig10185>;
  path?: ConfigPaths10185;
}

const HeavyComponent10185 = memo(function HeavyComponent10185({ config }: HeavyProps10185) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10185) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10185 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10185: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10185.displayName = 'HeavyComponent10185';
export default HeavyComponent10185;

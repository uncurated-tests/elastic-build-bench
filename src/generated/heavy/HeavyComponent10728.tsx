'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10728<T> = T extends (infer U)[]
  ? DeepReadonlyArray10728<U>
  : T extends object
  ? DeepReadonlyObject10728<T>
  : T;

interface DeepReadonlyArray10728<T> extends ReadonlyArray<DeepReadonly10728<T>> {}

type DeepReadonlyObject10728<T> = {
  readonly [P in keyof T]: DeepReadonly10728<T[P]>;
};

type UnionToIntersection10728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10728<T> = UnionToIntersection10728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10728<T extends unknown[], V> = [...T, V];

type TuplifyUnion10728<T, L = LastOf10728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10728<TuplifyUnion10728<Exclude<T, L>>, L>;

type DeepPartial10728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10728<T[P]> }
  : T;

type Paths10728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10728<K, Paths10728<T[K], Prev10728[D]>> : never }[keyof T]
  : never;

type Prev10728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10728 {
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

type ConfigPaths10728 = Paths10728<NestedConfig10728>;

interface HeavyProps10728 {
  config: DeepPartial10728<NestedConfig10728>;
  path?: ConfigPaths10728;
}

const HeavyComponent10728 = memo(function HeavyComponent10728({ config }: HeavyProps10728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10728.displayName = 'HeavyComponent10728';
export default HeavyComponent10728;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10120<T> = T extends (infer U)[]
  ? DeepReadonlyArray10120<U>
  : T extends object
  ? DeepReadonlyObject10120<T>
  : T;

interface DeepReadonlyArray10120<T> extends ReadonlyArray<DeepReadonly10120<T>> {}

type DeepReadonlyObject10120<T> = {
  readonly [P in keyof T]: DeepReadonly10120<T[P]>;
};

type UnionToIntersection10120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10120<T> = UnionToIntersection10120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10120<T extends unknown[], V> = [...T, V];

type TuplifyUnion10120<T, L = LastOf10120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10120<TuplifyUnion10120<Exclude<T, L>>, L>;

type DeepPartial10120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10120<T[P]> }
  : T;

type Paths10120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10120<K, Paths10120<T[K], Prev10120[D]>> : never }[keyof T]
  : never;

type Prev10120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10120 {
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

type ConfigPaths10120 = Paths10120<NestedConfig10120>;

interface HeavyProps10120 {
  config: DeepPartial10120<NestedConfig10120>;
  path?: ConfigPaths10120;
}

const HeavyComponent10120 = memo(function HeavyComponent10120({ config }: HeavyProps10120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10120.displayName = 'HeavyComponent10120';
export default HeavyComponent10120;

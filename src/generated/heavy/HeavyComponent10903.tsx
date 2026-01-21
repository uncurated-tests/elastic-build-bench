'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10903<T> = T extends (infer U)[]
  ? DeepReadonlyArray10903<U>
  : T extends object
  ? DeepReadonlyObject10903<T>
  : T;

interface DeepReadonlyArray10903<T> extends ReadonlyArray<DeepReadonly10903<T>> {}

type DeepReadonlyObject10903<T> = {
  readonly [P in keyof T]: DeepReadonly10903<T[P]>;
};

type UnionToIntersection10903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10903<T> = UnionToIntersection10903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10903<T extends unknown[], V> = [...T, V];

type TuplifyUnion10903<T, L = LastOf10903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10903<TuplifyUnion10903<Exclude<T, L>>, L>;

type DeepPartial10903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10903<T[P]> }
  : T;

type Paths10903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10903<K, Paths10903<T[K], Prev10903[D]>> : never }[keyof T]
  : never;

type Prev10903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10903 {
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

type ConfigPaths10903 = Paths10903<NestedConfig10903>;

interface HeavyProps10903 {
  config: DeepPartial10903<NestedConfig10903>;
  path?: ConfigPaths10903;
}

const HeavyComponent10903 = memo(function HeavyComponent10903({ config }: HeavyProps10903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10903.displayName = 'HeavyComponent10903';
export default HeavyComponent10903;

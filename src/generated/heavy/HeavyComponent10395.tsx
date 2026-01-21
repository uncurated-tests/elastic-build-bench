'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10395<T> = T extends (infer U)[]
  ? DeepReadonlyArray10395<U>
  : T extends object
  ? DeepReadonlyObject10395<T>
  : T;

interface DeepReadonlyArray10395<T> extends ReadonlyArray<DeepReadonly10395<T>> {}

type DeepReadonlyObject10395<T> = {
  readonly [P in keyof T]: DeepReadonly10395<T[P]>;
};

type UnionToIntersection10395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10395<T> = UnionToIntersection10395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10395<T extends unknown[], V> = [...T, V];

type TuplifyUnion10395<T, L = LastOf10395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10395<TuplifyUnion10395<Exclude<T, L>>, L>;

type DeepPartial10395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10395<T[P]> }
  : T;

type Paths10395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10395<K, Paths10395<T[K], Prev10395[D]>> : never }[keyof T]
  : never;

type Prev10395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10395 {
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

type ConfigPaths10395 = Paths10395<NestedConfig10395>;

interface HeavyProps10395 {
  config: DeepPartial10395<NestedConfig10395>;
  path?: ConfigPaths10395;
}

const HeavyComponent10395 = memo(function HeavyComponent10395({ config }: HeavyProps10395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10395.displayName = 'HeavyComponent10395';
export default HeavyComponent10395;

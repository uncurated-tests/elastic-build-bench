'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10918<T> = T extends (infer U)[]
  ? DeepReadonlyArray10918<U>
  : T extends object
  ? DeepReadonlyObject10918<T>
  : T;

interface DeepReadonlyArray10918<T> extends ReadonlyArray<DeepReadonly10918<T>> {}

type DeepReadonlyObject10918<T> = {
  readonly [P in keyof T]: DeepReadonly10918<T[P]>;
};

type UnionToIntersection10918<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10918<T> = UnionToIntersection10918<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10918<T extends unknown[], V> = [...T, V];

type TuplifyUnion10918<T, L = LastOf10918<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10918<TuplifyUnion10918<Exclude<T, L>>, L>;

type DeepPartial10918<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10918<T[P]> }
  : T;

type Paths10918<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10918<K, Paths10918<T[K], Prev10918[D]>> : never }[keyof T]
  : never;

type Prev10918 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10918<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10918 {
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

type ConfigPaths10918 = Paths10918<NestedConfig10918>;

interface HeavyProps10918 {
  config: DeepPartial10918<NestedConfig10918>;
  path?: ConfigPaths10918;
}

const HeavyComponent10918 = memo(function HeavyComponent10918({ config }: HeavyProps10918) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10918) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10918 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10918: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10918.displayName = 'HeavyComponent10918';
export default HeavyComponent10918;

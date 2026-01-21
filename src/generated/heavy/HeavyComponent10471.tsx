'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10471<T> = T extends (infer U)[]
  ? DeepReadonlyArray10471<U>
  : T extends object
  ? DeepReadonlyObject10471<T>
  : T;

interface DeepReadonlyArray10471<T> extends ReadonlyArray<DeepReadonly10471<T>> {}

type DeepReadonlyObject10471<T> = {
  readonly [P in keyof T]: DeepReadonly10471<T[P]>;
};

type UnionToIntersection10471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10471<T> = UnionToIntersection10471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10471<T extends unknown[], V> = [...T, V];

type TuplifyUnion10471<T, L = LastOf10471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10471<TuplifyUnion10471<Exclude<T, L>>, L>;

type DeepPartial10471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10471<T[P]> }
  : T;

type Paths10471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10471<K, Paths10471<T[K], Prev10471[D]>> : never }[keyof T]
  : never;

type Prev10471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10471 {
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

type ConfigPaths10471 = Paths10471<NestedConfig10471>;

interface HeavyProps10471 {
  config: DeepPartial10471<NestedConfig10471>;
  path?: ConfigPaths10471;
}

const HeavyComponent10471 = memo(function HeavyComponent10471({ config }: HeavyProps10471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10471.displayName = 'HeavyComponent10471';
export default HeavyComponent10471;

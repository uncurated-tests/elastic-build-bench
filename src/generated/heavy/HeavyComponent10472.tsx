'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10472<T> = T extends (infer U)[]
  ? DeepReadonlyArray10472<U>
  : T extends object
  ? DeepReadonlyObject10472<T>
  : T;

interface DeepReadonlyArray10472<T> extends ReadonlyArray<DeepReadonly10472<T>> {}

type DeepReadonlyObject10472<T> = {
  readonly [P in keyof T]: DeepReadonly10472<T[P]>;
};

type UnionToIntersection10472<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10472<T> = UnionToIntersection10472<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10472<T extends unknown[], V> = [...T, V];

type TuplifyUnion10472<T, L = LastOf10472<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10472<TuplifyUnion10472<Exclude<T, L>>, L>;

type DeepPartial10472<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10472<T[P]> }
  : T;

type Paths10472<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10472<K, Paths10472<T[K], Prev10472[D]>> : never }[keyof T]
  : never;

type Prev10472 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10472<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10472 {
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

type ConfigPaths10472 = Paths10472<NestedConfig10472>;

interface HeavyProps10472 {
  config: DeepPartial10472<NestedConfig10472>;
  path?: ConfigPaths10472;
}

const HeavyComponent10472 = memo(function HeavyComponent10472({ config }: HeavyProps10472) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10472) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10472 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10472: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10472.displayName = 'HeavyComponent10472';
export default HeavyComponent10472;

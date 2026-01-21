'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10341<T> = T extends (infer U)[]
  ? DeepReadonlyArray10341<U>
  : T extends object
  ? DeepReadonlyObject10341<T>
  : T;

interface DeepReadonlyArray10341<T> extends ReadonlyArray<DeepReadonly10341<T>> {}

type DeepReadonlyObject10341<T> = {
  readonly [P in keyof T]: DeepReadonly10341<T[P]>;
};

type UnionToIntersection10341<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10341<T> = UnionToIntersection10341<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10341<T extends unknown[], V> = [...T, V];

type TuplifyUnion10341<T, L = LastOf10341<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10341<TuplifyUnion10341<Exclude<T, L>>, L>;

type DeepPartial10341<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10341<T[P]> }
  : T;

type Paths10341<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10341<K, Paths10341<T[K], Prev10341[D]>> : never }[keyof T]
  : never;

type Prev10341 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10341<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10341 {
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

type ConfigPaths10341 = Paths10341<NestedConfig10341>;

interface HeavyProps10341 {
  config: DeepPartial10341<NestedConfig10341>;
  path?: ConfigPaths10341;
}

const HeavyComponent10341 = memo(function HeavyComponent10341({ config }: HeavyProps10341) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10341) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10341 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10341: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10341.displayName = 'HeavyComponent10341';
export default HeavyComponent10341;

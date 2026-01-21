'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10876<T> = T extends (infer U)[]
  ? DeepReadonlyArray10876<U>
  : T extends object
  ? DeepReadonlyObject10876<T>
  : T;

interface DeepReadonlyArray10876<T> extends ReadonlyArray<DeepReadonly10876<T>> {}

type DeepReadonlyObject10876<T> = {
  readonly [P in keyof T]: DeepReadonly10876<T[P]>;
};

type UnionToIntersection10876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10876<T> = UnionToIntersection10876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10876<T extends unknown[], V> = [...T, V];

type TuplifyUnion10876<T, L = LastOf10876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10876<TuplifyUnion10876<Exclude<T, L>>, L>;

type DeepPartial10876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10876<T[P]> }
  : T;

type Paths10876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10876<K, Paths10876<T[K], Prev10876[D]>> : never }[keyof T]
  : never;

type Prev10876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10876 {
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

type ConfigPaths10876 = Paths10876<NestedConfig10876>;

interface HeavyProps10876 {
  config: DeepPartial10876<NestedConfig10876>;
  path?: ConfigPaths10876;
}

const HeavyComponent10876 = memo(function HeavyComponent10876({ config }: HeavyProps10876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10876.displayName = 'HeavyComponent10876';
export default HeavyComponent10876;

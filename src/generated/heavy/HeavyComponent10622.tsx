'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10622<T> = T extends (infer U)[]
  ? DeepReadonlyArray10622<U>
  : T extends object
  ? DeepReadonlyObject10622<T>
  : T;

interface DeepReadonlyArray10622<T> extends ReadonlyArray<DeepReadonly10622<T>> {}

type DeepReadonlyObject10622<T> = {
  readonly [P in keyof T]: DeepReadonly10622<T[P]>;
};

type UnionToIntersection10622<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10622<T> = UnionToIntersection10622<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10622<T extends unknown[], V> = [...T, V];

type TuplifyUnion10622<T, L = LastOf10622<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10622<TuplifyUnion10622<Exclude<T, L>>, L>;

type DeepPartial10622<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10622<T[P]> }
  : T;

type Paths10622<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10622<K, Paths10622<T[K], Prev10622[D]>> : never }[keyof T]
  : never;

type Prev10622 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10622<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10622 {
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

type ConfigPaths10622 = Paths10622<NestedConfig10622>;

interface HeavyProps10622 {
  config: DeepPartial10622<NestedConfig10622>;
  path?: ConfigPaths10622;
}

const HeavyComponent10622 = memo(function HeavyComponent10622({ config }: HeavyProps10622) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10622) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10622 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10622: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10622.displayName = 'HeavyComponent10622';
export default HeavyComponent10622;

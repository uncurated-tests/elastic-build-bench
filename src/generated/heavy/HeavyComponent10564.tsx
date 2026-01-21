'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10564<T> = T extends (infer U)[]
  ? DeepReadonlyArray10564<U>
  : T extends object
  ? DeepReadonlyObject10564<T>
  : T;

interface DeepReadonlyArray10564<T> extends ReadonlyArray<DeepReadonly10564<T>> {}

type DeepReadonlyObject10564<T> = {
  readonly [P in keyof T]: DeepReadonly10564<T[P]>;
};

type UnionToIntersection10564<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10564<T> = UnionToIntersection10564<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10564<T extends unknown[], V> = [...T, V];

type TuplifyUnion10564<T, L = LastOf10564<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10564<TuplifyUnion10564<Exclude<T, L>>, L>;

type DeepPartial10564<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10564<T[P]> }
  : T;

type Paths10564<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10564<K, Paths10564<T[K], Prev10564[D]>> : never }[keyof T]
  : never;

type Prev10564 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10564<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10564 {
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

type ConfigPaths10564 = Paths10564<NestedConfig10564>;

interface HeavyProps10564 {
  config: DeepPartial10564<NestedConfig10564>;
  path?: ConfigPaths10564;
}

const HeavyComponent10564 = memo(function HeavyComponent10564({ config }: HeavyProps10564) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10564) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10564 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10564: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10564.displayName = 'HeavyComponent10564';
export default HeavyComponent10564;

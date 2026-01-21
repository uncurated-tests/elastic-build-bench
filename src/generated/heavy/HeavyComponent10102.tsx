'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10102<T> = T extends (infer U)[]
  ? DeepReadonlyArray10102<U>
  : T extends object
  ? DeepReadonlyObject10102<T>
  : T;

interface DeepReadonlyArray10102<T> extends ReadonlyArray<DeepReadonly10102<T>> {}

type DeepReadonlyObject10102<T> = {
  readonly [P in keyof T]: DeepReadonly10102<T[P]>;
};

type UnionToIntersection10102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10102<T> = UnionToIntersection10102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10102<T extends unknown[], V> = [...T, V];

type TuplifyUnion10102<T, L = LastOf10102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10102<TuplifyUnion10102<Exclude<T, L>>, L>;

type DeepPartial10102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10102<T[P]> }
  : T;

type Paths10102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10102<K, Paths10102<T[K], Prev10102[D]>> : never }[keyof T]
  : never;

type Prev10102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10102 {
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

type ConfigPaths10102 = Paths10102<NestedConfig10102>;

interface HeavyProps10102 {
  config: DeepPartial10102<NestedConfig10102>;
  path?: ConfigPaths10102;
}

const HeavyComponent10102 = memo(function HeavyComponent10102({ config }: HeavyProps10102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10102.displayName = 'HeavyComponent10102';
export default HeavyComponent10102;

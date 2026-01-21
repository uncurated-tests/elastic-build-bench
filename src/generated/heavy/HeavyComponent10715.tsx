'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10715<T> = T extends (infer U)[]
  ? DeepReadonlyArray10715<U>
  : T extends object
  ? DeepReadonlyObject10715<T>
  : T;

interface DeepReadonlyArray10715<T> extends ReadonlyArray<DeepReadonly10715<T>> {}

type DeepReadonlyObject10715<T> = {
  readonly [P in keyof T]: DeepReadonly10715<T[P]>;
};

type UnionToIntersection10715<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10715<T> = UnionToIntersection10715<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10715<T extends unknown[], V> = [...T, V];

type TuplifyUnion10715<T, L = LastOf10715<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10715<TuplifyUnion10715<Exclude<T, L>>, L>;

type DeepPartial10715<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10715<T[P]> }
  : T;

type Paths10715<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10715<K, Paths10715<T[K], Prev10715[D]>> : never }[keyof T]
  : never;

type Prev10715 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10715<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10715 {
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

type ConfigPaths10715 = Paths10715<NestedConfig10715>;

interface HeavyProps10715 {
  config: DeepPartial10715<NestedConfig10715>;
  path?: ConfigPaths10715;
}

const HeavyComponent10715 = memo(function HeavyComponent10715({ config }: HeavyProps10715) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10715) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10715 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10715: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10715.displayName = 'HeavyComponent10715';
export default HeavyComponent10715;

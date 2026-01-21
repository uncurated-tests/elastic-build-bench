'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10465<T> = T extends (infer U)[]
  ? DeepReadonlyArray10465<U>
  : T extends object
  ? DeepReadonlyObject10465<T>
  : T;

interface DeepReadonlyArray10465<T> extends ReadonlyArray<DeepReadonly10465<T>> {}

type DeepReadonlyObject10465<T> = {
  readonly [P in keyof T]: DeepReadonly10465<T[P]>;
};

type UnionToIntersection10465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10465<T> = UnionToIntersection10465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10465<T extends unknown[], V> = [...T, V];

type TuplifyUnion10465<T, L = LastOf10465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10465<TuplifyUnion10465<Exclude<T, L>>, L>;

type DeepPartial10465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10465<T[P]> }
  : T;

type Paths10465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10465<K, Paths10465<T[K], Prev10465[D]>> : never }[keyof T]
  : never;

type Prev10465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10465 {
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

type ConfigPaths10465 = Paths10465<NestedConfig10465>;

interface HeavyProps10465 {
  config: DeepPartial10465<NestedConfig10465>;
  path?: ConfigPaths10465;
}

const HeavyComponent10465 = memo(function HeavyComponent10465({ config }: HeavyProps10465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10465.displayName = 'HeavyComponent10465';
export default HeavyComponent10465;

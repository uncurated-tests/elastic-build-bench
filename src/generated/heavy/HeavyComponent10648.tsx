'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10648<T> = T extends (infer U)[]
  ? DeepReadonlyArray10648<U>
  : T extends object
  ? DeepReadonlyObject10648<T>
  : T;

interface DeepReadonlyArray10648<T> extends ReadonlyArray<DeepReadonly10648<T>> {}

type DeepReadonlyObject10648<T> = {
  readonly [P in keyof T]: DeepReadonly10648<T[P]>;
};

type UnionToIntersection10648<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10648<T> = UnionToIntersection10648<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10648<T extends unknown[], V> = [...T, V];

type TuplifyUnion10648<T, L = LastOf10648<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10648<TuplifyUnion10648<Exclude<T, L>>, L>;

type DeepPartial10648<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10648<T[P]> }
  : T;

type Paths10648<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10648<K, Paths10648<T[K], Prev10648[D]>> : never }[keyof T]
  : never;

type Prev10648 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10648<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10648 {
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

type ConfigPaths10648 = Paths10648<NestedConfig10648>;

interface HeavyProps10648 {
  config: DeepPartial10648<NestedConfig10648>;
  path?: ConfigPaths10648;
}

const HeavyComponent10648 = memo(function HeavyComponent10648({ config }: HeavyProps10648) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10648) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10648 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10648: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10648.displayName = 'HeavyComponent10648';
export default HeavyComponent10648;

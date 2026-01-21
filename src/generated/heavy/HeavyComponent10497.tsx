'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10497<T> = T extends (infer U)[]
  ? DeepReadonlyArray10497<U>
  : T extends object
  ? DeepReadonlyObject10497<T>
  : T;

interface DeepReadonlyArray10497<T> extends ReadonlyArray<DeepReadonly10497<T>> {}

type DeepReadonlyObject10497<T> = {
  readonly [P in keyof T]: DeepReadonly10497<T[P]>;
};

type UnionToIntersection10497<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10497<T> = UnionToIntersection10497<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10497<T extends unknown[], V> = [...T, V];

type TuplifyUnion10497<T, L = LastOf10497<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10497<TuplifyUnion10497<Exclude<T, L>>, L>;

type DeepPartial10497<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10497<T[P]> }
  : T;

type Paths10497<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10497<K, Paths10497<T[K], Prev10497[D]>> : never }[keyof T]
  : never;

type Prev10497 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10497<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10497 {
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

type ConfigPaths10497 = Paths10497<NestedConfig10497>;

interface HeavyProps10497 {
  config: DeepPartial10497<NestedConfig10497>;
  path?: ConfigPaths10497;
}

const HeavyComponent10497 = memo(function HeavyComponent10497({ config }: HeavyProps10497) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10497) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10497 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10497: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10497.displayName = 'HeavyComponent10497';
export default HeavyComponent10497;

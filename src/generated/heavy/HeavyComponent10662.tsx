'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10662<T> = T extends (infer U)[]
  ? DeepReadonlyArray10662<U>
  : T extends object
  ? DeepReadonlyObject10662<T>
  : T;

interface DeepReadonlyArray10662<T> extends ReadonlyArray<DeepReadonly10662<T>> {}

type DeepReadonlyObject10662<T> = {
  readonly [P in keyof T]: DeepReadonly10662<T[P]>;
};

type UnionToIntersection10662<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10662<T> = UnionToIntersection10662<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10662<T extends unknown[], V> = [...T, V];

type TuplifyUnion10662<T, L = LastOf10662<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10662<TuplifyUnion10662<Exclude<T, L>>, L>;

type DeepPartial10662<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10662<T[P]> }
  : T;

type Paths10662<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10662<K, Paths10662<T[K], Prev10662[D]>> : never }[keyof T]
  : never;

type Prev10662 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10662<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10662 {
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

type ConfigPaths10662 = Paths10662<NestedConfig10662>;

interface HeavyProps10662 {
  config: DeepPartial10662<NestedConfig10662>;
  path?: ConfigPaths10662;
}

const HeavyComponent10662 = memo(function HeavyComponent10662({ config }: HeavyProps10662) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10662) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10662 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10662: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10662.displayName = 'HeavyComponent10662';
export default HeavyComponent10662;

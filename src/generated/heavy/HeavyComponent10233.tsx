'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10233<T> = T extends (infer U)[]
  ? DeepReadonlyArray10233<U>
  : T extends object
  ? DeepReadonlyObject10233<T>
  : T;

interface DeepReadonlyArray10233<T> extends ReadonlyArray<DeepReadonly10233<T>> {}

type DeepReadonlyObject10233<T> = {
  readonly [P in keyof T]: DeepReadonly10233<T[P]>;
};

type UnionToIntersection10233<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10233<T> = UnionToIntersection10233<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10233<T extends unknown[], V> = [...T, V];

type TuplifyUnion10233<T, L = LastOf10233<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10233<TuplifyUnion10233<Exclude<T, L>>, L>;

type DeepPartial10233<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10233<T[P]> }
  : T;

type Paths10233<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10233<K, Paths10233<T[K], Prev10233[D]>> : never }[keyof T]
  : never;

type Prev10233 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10233<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10233 {
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

type ConfigPaths10233 = Paths10233<NestedConfig10233>;

interface HeavyProps10233 {
  config: DeepPartial10233<NestedConfig10233>;
  path?: ConfigPaths10233;
}

const HeavyComponent10233 = memo(function HeavyComponent10233({ config }: HeavyProps10233) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10233) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10233 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10233: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10233.displayName = 'HeavyComponent10233';
export default HeavyComponent10233;

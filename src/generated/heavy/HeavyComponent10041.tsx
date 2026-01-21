'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10041<T> = T extends (infer U)[]
  ? DeepReadonlyArray10041<U>
  : T extends object
  ? DeepReadonlyObject10041<T>
  : T;

interface DeepReadonlyArray10041<T> extends ReadonlyArray<DeepReadonly10041<T>> {}

type DeepReadonlyObject10041<T> = {
  readonly [P in keyof T]: DeepReadonly10041<T[P]>;
};

type UnionToIntersection10041<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10041<T> = UnionToIntersection10041<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10041<T extends unknown[], V> = [...T, V];

type TuplifyUnion10041<T, L = LastOf10041<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10041<TuplifyUnion10041<Exclude<T, L>>, L>;

type DeepPartial10041<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10041<T[P]> }
  : T;

type Paths10041<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10041<K, Paths10041<T[K], Prev10041[D]>> : never }[keyof T]
  : never;

type Prev10041 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10041<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10041 {
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

type ConfigPaths10041 = Paths10041<NestedConfig10041>;

interface HeavyProps10041 {
  config: DeepPartial10041<NestedConfig10041>;
  path?: ConfigPaths10041;
}

const HeavyComponent10041 = memo(function HeavyComponent10041({ config }: HeavyProps10041) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10041) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10041 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10041: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10041.displayName = 'HeavyComponent10041';
export default HeavyComponent10041;

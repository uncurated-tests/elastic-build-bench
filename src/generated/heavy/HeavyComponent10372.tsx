'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10372<T> = T extends (infer U)[]
  ? DeepReadonlyArray10372<U>
  : T extends object
  ? DeepReadonlyObject10372<T>
  : T;

interface DeepReadonlyArray10372<T> extends ReadonlyArray<DeepReadonly10372<T>> {}

type DeepReadonlyObject10372<T> = {
  readonly [P in keyof T]: DeepReadonly10372<T[P]>;
};

type UnionToIntersection10372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10372<T> = UnionToIntersection10372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10372<T extends unknown[], V> = [...T, V];

type TuplifyUnion10372<T, L = LastOf10372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10372<TuplifyUnion10372<Exclude<T, L>>, L>;

type DeepPartial10372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10372<T[P]> }
  : T;

type Paths10372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10372<K, Paths10372<T[K], Prev10372[D]>> : never }[keyof T]
  : never;

type Prev10372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10372 {
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

type ConfigPaths10372 = Paths10372<NestedConfig10372>;

interface HeavyProps10372 {
  config: DeepPartial10372<NestedConfig10372>;
  path?: ConfigPaths10372;
}

const HeavyComponent10372 = memo(function HeavyComponent10372({ config }: HeavyProps10372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10372.displayName = 'HeavyComponent10372';
export default HeavyComponent10372;

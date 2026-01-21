'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10254<T> = T extends (infer U)[]
  ? DeepReadonlyArray10254<U>
  : T extends object
  ? DeepReadonlyObject10254<T>
  : T;

interface DeepReadonlyArray10254<T> extends ReadonlyArray<DeepReadonly10254<T>> {}

type DeepReadonlyObject10254<T> = {
  readonly [P in keyof T]: DeepReadonly10254<T[P]>;
};

type UnionToIntersection10254<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10254<T> = UnionToIntersection10254<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10254<T extends unknown[], V> = [...T, V];

type TuplifyUnion10254<T, L = LastOf10254<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10254<TuplifyUnion10254<Exclude<T, L>>, L>;

type DeepPartial10254<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10254<T[P]> }
  : T;

type Paths10254<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10254<K, Paths10254<T[K], Prev10254[D]>> : never }[keyof T]
  : never;

type Prev10254 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10254<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10254 {
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

type ConfigPaths10254 = Paths10254<NestedConfig10254>;

interface HeavyProps10254 {
  config: DeepPartial10254<NestedConfig10254>;
  path?: ConfigPaths10254;
}

const HeavyComponent10254 = memo(function HeavyComponent10254({ config }: HeavyProps10254) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10254) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10254 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10254: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10254.displayName = 'HeavyComponent10254';
export default HeavyComponent10254;

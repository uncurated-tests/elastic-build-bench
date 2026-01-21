'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10315<T> = T extends (infer U)[]
  ? DeepReadonlyArray10315<U>
  : T extends object
  ? DeepReadonlyObject10315<T>
  : T;

interface DeepReadonlyArray10315<T> extends ReadonlyArray<DeepReadonly10315<T>> {}

type DeepReadonlyObject10315<T> = {
  readonly [P in keyof T]: DeepReadonly10315<T[P]>;
};

type UnionToIntersection10315<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10315<T> = UnionToIntersection10315<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10315<T extends unknown[], V> = [...T, V];

type TuplifyUnion10315<T, L = LastOf10315<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10315<TuplifyUnion10315<Exclude<T, L>>, L>;

type DeepPartial10315<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10315<T[P]> }
  : T;

type Paths10315<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10315<K, Paths10315<T[K], Prev10315[D]>> : never }[keyof T]
  : never;

type Prev10315 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10315<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10315 {
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

type ConfigPaths10315 = Paths10315<NestedConfig10315>;

interface HeavyProps10315 {
  config: DeepPartial10315<NestedConfig10315>;
  path?: ConfigPaths10315;
}

const HeavyComponent10315 = memo(function HeavyComponent10315({ config }: HeavyProps10315) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10315) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10315 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10315: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10315.displayName = 'HeavyComponent10315';
export default HeavyComponent10315;

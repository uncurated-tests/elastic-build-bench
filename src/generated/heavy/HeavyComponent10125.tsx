'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10125<T> = T extends (infer U)[]
  ? DeepReadonlyArray10125<U>
  : T extends object
  ? DeepReadonlyObject10125<T>
  : T;

interface DeepReadonlyArray10125<T> extends ReadonlyArray<DeepReadonly10125<T>> {}

type DeepReadonlyObject10125<T> = {
  readonly [P in keyof T]: DeepReadonly10125<T[P]>;
};

type UnionToIntersection10125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10125<T> = UnionToIntersection10125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10125<T extends unknown[], V> = [...T, V];

type TuplifyUnion10125<T, L = LastOf10125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10125<TuplifyUnion10125<Exclude<T, L>>, L>;

type DeepPartial10125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10125<T[P]> }
  : T;

type Paths10125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10125<K, Paths10125<T[K], Prev10125[D]>> : never }[keyof T]
  : never;

type Prev10125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10125 {
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

type ConfigPaths10125 = Paths10125<NestedConfig10125>;

interface HeavyProps10125 {
  config: DeepPartial10125<NestedConfig10125>;
  path?: ConfigPaths10125;
}

const HeavyComponent10125 = memo(function HeavyComponent10125({ config }: HeavyProps10125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10125.displayName = 'HeavyComponent10125';
export default HeavyComponent10125;

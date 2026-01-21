'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10846<T> = T extends (infer U)[]
  ? DeepReadonlyArray10846<U>
  : T extends object
  ? DeepReadonlyObject10846<T>
  : T;

interface DeepReadonlyArray10846<T> extends ReadonlyArray<DeepReadonly10846<T>> {}

type DeepReadonlyObject10846<T> = {
  readonly [P in keyof T]: DeepReadonly10846<T[P]>;
};

type UnionToIntersection10846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10846<T> = UnionToIntersection10846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10846<T extends unknown[], V> = [...T, V];

type TuplifyUnion10846<T, L = LastOf10846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10846<TuplifyUnion10846<Exclude<T, L>>, L>;

type DeepPartial10846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10846<T[P]> }
  : T;

type Paths10846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10846<K, Paths10846<T[K], Prev10846[D]>> : never }[keyof T]
  : never;

type Prev10846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10846 {
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

type ConfigPaths10846 = Paths10846<NestedConfig10846>;

interface HeavyProps10846 {
  config: DeepPartial10846<NestedConfig10846>;
  path?: ConfigPaths10846;
}

const HeavyComponent10846 = memo(function HeavyComponent10846({ config }: HeavyProps10846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10846.displayName = 'HeavyComponent10846';
export default HeavyComponent10846;

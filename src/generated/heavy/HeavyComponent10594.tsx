'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10594<T> = T extends (infer U)[]
  ? DeepReadonlyArray10594<U>
  : T extends object
  ? DeepReadonlyObject10594<T>
  : T;

interface DeepReadonlyArray10594<T> extends ReadonlyArray<DeepReadonly10594<T>> {}

type DeepReadonlyObject10594<T> = {
  readonly [P in keyof T]: DeepReadonly10594<T[P]>;
};

type UnionToIntersection10594<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10594<T> = UnionToIntersection10594<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10594<T extends unknown[], V> = [...T, V];

type TuplifyUnion10594<T, L = LastOf10594<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10594<TuplifyUnion10594<Exclude<T, L>>, L>;

type DeepPartial10594<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10594<T[P]> }
  : T;

type Paths10594<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10594<K, Paths10594<T[K], Prev10594[D]>> : never }[keyof T]
  : never;

type Prev10594 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10594<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10594 {
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

type ConfigPaths10594 = Paths10594<NestedConfig10594>;

interface HeavyProps10594 {
  config: DeepPartial10594<NestedConfig10594>;
  path?: ConfigPaths10594;
}

const HeavyComponent10594 = memo(function HeavyComponent10594({ config }: HeavyProps10594) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10594) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10594 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10594: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10594.displayName = 'HeavyComponent10594';
export default HeavyComponent10594;

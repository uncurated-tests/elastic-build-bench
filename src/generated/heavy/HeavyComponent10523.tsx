'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10523<T> = T extends (infer U)[]
  ? DeepReadonlyArray10523<U>
  : T extends object
  ? DeepReadonlyObject10523<T>
  : T;

interface DeepReadonlyArray10523<T> extends ReadonlyArray<DeepReadonly10523<T>> {}

type DeepReadonlyObject10523<T> = {
  readonly [P in keyof T]: DeepReadonly10523<T[P]>;
};

type UnionToIntersection10523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10523<T> = UnionToIntersection10523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10523<T extends unknown[], V> = [...T, V];

type TuplifyUnion10523<T, L = LastOf10523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10523<TuplifyUnion10523<Exclude<T, L>>, L>;

type DeepPartial10523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10523<T[P]> }
  : T;

type Paths10523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10523<K, Paths10523<T[K], Prev10523[D]>> : never }[keyof T]
  : never;

type Prev10523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10523 {
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

type ConfigPaths10523 = Paths10523<NestedConfig10523>;

interface HeavyProps10523 {
  config: DeepPartial10523<NestedConfig10523>;
  path?: ConfigPaths10523;
}

const HeavyComponent10523 = memo(function HeavyComponent10523({ config }: HeavyProps10523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10523.displayName = 'HeavyComponent10523';
export default HeavyComponent10523;

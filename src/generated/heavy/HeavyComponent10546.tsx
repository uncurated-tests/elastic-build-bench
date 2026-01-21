'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10546<T> = T extends (infer U)[]
  ? DeepReadonlyArray10546<U>
  : T extends object
  ? DeepReadonlyObject10546<T>
  : T;

interface DeepReadonlyArray10546<T> extends ReadonlyArray<DeepReadonly10546<T>> {}

type DeepReadonlyObject10546<T> = {
  readonly [P in keyof T]: DeepReadonly10546<T[P]>;
};

type UnionToIntersection10546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10546<T> = UnionToIntersection10546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10546<T extends unknown[], V> = [...T, V];

type TuplifyUnion10546<T, L = LastOf10546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10546<TuplifyUnion10546<Exclude<T, L>>, L>;

type DeepPartial10546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10546<T[P]> }
  : T;

type Paths10546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10546<K, Paths10546<T[K], Prev10546[D]>> : never }[keyof T]
  : never;

type Prev10546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10546 {
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

type ConfigPaths10546 = Paths10546<NestedConfig10546>;

interface HeavyProps10546 {
  config: DeepPartial10546<NestedConfig10546>;
  path?: ConfigPaths10546;
}

const HeavyComponent10546 = memo(function HeavyComponent10546({ config }: HeavyProps10546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10546.displayName = 'HeavyComponent10546';
export default HeavyComponent10546;

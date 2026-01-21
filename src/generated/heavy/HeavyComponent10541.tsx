'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10541<T> = T extends (infer U)[]
  ? DeepReadonlyArray10541<U>
  : T extends object
  ? DeepReadonlyObject10541<T>
  : T;

interface DeepReadonlyArray10541<T> extends ReadonlyArray<DeepReadonly10541<T>> {}

type DeepReadonlyObject10541<T> = {
  readonly [P in keyof T]: DeepReadonly10541<T[P]>;
};

type UnionToIntersection10541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10541<T> = UnionToIntersection10541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10541<T extends unknown[], V> = [...T, V];

type TuplifyUnion10541<T, L = LastOf10541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10541<TuplifyUnion10541<Exclude<T, L>>, L>;

type DeepPartial10541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10541<T[P]> }
  : T;

type Paths10541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10541<K, Paths10541<T[K], Prev10541[D]>> : never }[keyof T]
  : never;

type Prev10541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10541 {
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

type ConfigPaths10541 = Paths10541<NestedConfig10541>;

interface HeavyProps10541 {
  config: DeepPartial10541<NestedConfig10541>;
  path?: ConfigPaths10541;
}

const HeavyComponent10541 = memo(function HeavyComponent10541({ config }: HeavyProps10541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10541.displayName = 'HeavyComponent10541';
export default HeavyComponent10541;

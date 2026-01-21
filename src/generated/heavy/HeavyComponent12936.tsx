'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12936<T> = T extends (infer U)[]
  ? DeepReadonlyArray12936<U>
  : T extends object
  ? DeepReadonlyObject12936<T>
  : T;

interface DeepReadonlyArray12936<T> extends ReadonlyArray<DeepReadonly12936<T>> {}

type DeepReadonlyObject12936<T> = {
  readonly [P in keyof T]: DeepReadonly12936<T[P]>;
};

type UnionToIntersection12936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12936<T> = UnionToIntersection12936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12936<T extends unknown[], V> = [...T, V];

type TuplifyUnion12936<T, L = LastOf12936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12936<TuplifyUnion12936<Exclude<T, L>>, L>;

type DeepPartial12936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12936<T[P]> }
  : T;

type Paths12936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12936<K, Paths12936<T[K], Prev12936[D]>> : never }[keyof T]
  : never;

type Prev12936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12936 {
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

type ConfigPaths12936 = Paths12936<NestedConfig12936>;

interface HeavyProps12936 {
  config: DeepPartial12936<NestedConfig12936>;
  path?: ConfigPaths12936;
}

const HeavyComponent12936 = memo(function HeavyComponent12936({ config }: HeavyProps12936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12936.displayName = 'HeavyComponent12936';
export default HeavyComponent12936;

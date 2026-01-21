'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12977<T> = T extends (infer U)[]
  ? DeepReadonlyArray12977<U>
  : T extends object
  ? DeepReadonlyObject12977<T>
  : T;

interface DeepReadonlyArray12977<T> extends ReadonlyArray<DeepReadonly12977<T>> {}

type DeepReadonlyObject12977<T> = {
  readonly [P in keyof T]: DeepReadonly12977<T[P]>;
};

type UnionToIntersection12977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12977<T> = UnionToIntersection12977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12977<T extends unknown[], V> = [...T, V];

type TuplifyUnion12977<T, L = LastOf12977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12977<TuplifyUnion12977<Exclude<T, L>>, L>;

type DeepPartial12977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12977<T[P]> }
  : T;

type Paths12977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12977<K, Paths12977<T[K], Prev12977[D]>> : never }[keyof T]
  : never;

type Prev12977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12977 {
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

type ConfigPaths12977 = Paths12977<NestedConfig12977>;

interface HeavyProps12977 {
  config: DeepPartial12977<NestedConfig12977>;
  path?: ConfigPaths12977;
}

const HeavyComponent12977 = memo(function HeavyComponent12977({ config }: HeavyProps12977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12977.displayName = 'HeavyComponent12977';
export default HeavyComponent12977;

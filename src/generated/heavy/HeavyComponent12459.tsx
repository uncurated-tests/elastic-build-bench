'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12459<T> = T extends (infer U)[]
  ? DeepReadonlyArray12459<U>
  : T extends object
  ? DeepReadonlyObject12459<T>
  : T;

interface DeepReadonlyArray12459<T> extends ReadonlyArray<DeepReadonly12459<T>> {}

type DeepReadonlyObject12459<T> = {
  readonly [P in keyof T]: DeepReadonly12459<T[P]>;
};

type UnionToIntersection12459<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12459<T> = UnionToIntersection12459<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12459<T extends unknown[], V> = [...T, V];

type TuplifyUnion12459<T, L = LastOf12459<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12459<TuplifyUnion12459<Exclude<T, L>>, L>;

type DeepPartial12459<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12459<T[P]> }
  : T;

type Paths12459<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12459<K, Paths12459<T[K], Prev12459[D]>> : never }[keyof T]
  : never;

type Prev12459 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12459<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12459 {
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

type ConfigPaths12459 = Paths12459<NestedConfig12459>;

interface HeavyProps12459 {
  config: DeepPartial12459<NestedConfig12459>;
  path?: ConfigPaths12459;
}

const HeavyComponent12459 = memo(function HeavyComponent12459({ config }: HeavyProps12459) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12459) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12459 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12459: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12459.displayName = 'HeavyComponent12459';
export default HeavyComponent12459;

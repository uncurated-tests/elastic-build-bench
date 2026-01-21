'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5662<T> = T extends (infer U)[]
  ? DeepReadonlyArray5662<U>
  : T extends object
  ? DeepReadonlyObject5662<T>
  : T;

interface DeepReadonlyArray5662<T> extends ReadonlyArray<DeepReadonly5662<T>> {}

type DeepReadonlyObject5662<T> = {
  readonly [P in keyof T]: DeepReadonly5662<T[P]>;
};

type UnionToIntersection5662<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5662<T> = UnionToIntersection5662<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5662<T extends unknown[], V> = [...T, V];

type TuplifyUnion5662<T, L = LastOf5662<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5662<TuplifyUnion5662<Exclude<T, L>>, L>;

type DeepPartial5662<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5662<T[P]> }
  : T;

type Paths5662<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5662<K, Paths5662<T[K], Prev5662[D]>> : never }[keyof T]
  : never;

type Prev5662 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5662<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5662 {
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

type ConfigPaths5662 = Paths5662<NestedConfig5662>;

interface HeavyProps5662 {
  config: DeepPartial5662<NestedConfig5662>;
  path?: ConfigPaths5662;
}

const HeavyComponent5662 = memo(function HeavyComponent5662({ config }: HeavyProps5662) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5662) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5662 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5662: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5662.displayName = 'HeavyComponent5662';
export default HeavyComponent5662;

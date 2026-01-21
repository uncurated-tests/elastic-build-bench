'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5026<T> = T extends (infer U)[]
  ? DeepReadonlyArray5026<U>
  : T extends object
  ? DeepReadonlyObject5026<T>
  : T;

interface DeepReadonlyArray5026<T> extends ReadonlyArray<DeepReadonly5026<T>> {}

type DeepReadonlyObject5026<T> = {
  readonly [P in keyof T]: DeepReadonly5026<T[P]>;
};

type UnionToIntersection5026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5026<T> = UnionToIntersection5026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5026<T extends unknown[], V> = [...T, V];

type TuplifyUnion5026<T, L = LastOf5026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5026<TuplifyUnion5026<Exclude<T, L>>, L>;

type DeepPartial5026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5026<T[P]> }
  : T;

type Paths5026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5026<K, Paths5026<T[K], Prev5026[D]>> : never }[keyof T]
  : never;

type Prev5026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5026 {
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

type ConfigPaths5026 = Paths5026<NestedConfig5026>;

interface HeavyProps5026 {
  config: DeepPartial5026<NestedConfig5026>;
  path?: ConfigPaths5026;
}

const HeavyComponent5026 = memo(function HeavyComponent5026({ config }: HeavyProps5026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5026.displayName = 'HeavyComponent5026';
export default HeavyComponent5026;

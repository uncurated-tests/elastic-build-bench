'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5655<T> = T extends (infer U)[]
  ? DeepReadonlyArray5655<U>
  : T extends object
  ? DeepReadonlyObject5655<T>
  : T;

interface DeepReadonlyArray5655<T> extends ReadonlyArray<DeepReadonly5655<T>> {}

type DeepReadonlyObject5655<T> = {
  readonly [P in keyof T]: DeepReadonly5655<T[P]>;
};

type UnionToIntersection5655<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5655<T> = UnionToIntersection5655<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5655<T extends unknown[], V> = [...T, V];

type TuplifyUnion5655<T, L = LastOf5655<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5655<TuplifyUnion5655<Exclude<T, L>>, L>;

type DeepPartial5655<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5655<T[P]> }
  : T;

type Paths5655<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5655<K, Paths5655<T[K], Prev5655[D]>> : never }[keyof T]
  : never;

type Prev5655 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5655<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5655 {
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

type ConfigPaths5655 = Paths5655<NestedConfig5655>;

interface HeavyProps5655 {
  config: DeepPartial5655<NestedConfig5655>;
  path?: ConfigPaths5655;
}

const HeavyComponent5655 = memo(function HeavyComponent5655({ config }: HeavyProps5655) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5655) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5655 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5655: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5655.displayName = 'HeavyComponent5655';
export default HeavyComponent5655;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5878<T> = T extends (infer U)[]
  ? DeepReadonlyArray5878<U>
  : T extends object
  ? DeepReadonlyObject5878<T>
  : T;

interface DeepReadonlyArray5878<T> extends ReadonlyArray<DeepReadonly5878<T>> {}

type DeepReadonlyObject5878<T> = {
  readonly [P in keyof T]: DeepReadonly5878<T[P]>;
};

type UnionToIntersection5878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5878<T> = UnionToIntersection5878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5878<T extends unknown[], V> = [...T, V];

type TuplifyUnion5878<T, L = LastOf5878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5878<TuplifyUnion5878<Exclude<T, L>>, L>;

type DeepPartial5878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5878<T[P]> }
  : T;

type Paths5878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5878<K, Paths5878<T[K], Prev5878[D]>> : never }[keyof T]
  : never;

type Prev5878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5878 {
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

type ConfigPaths5878 = Paths5878<NestedConfig5878>;

interface HeavyProps5878 {
  config: DeepPartial5878<NestedConfig5878>;
  path?: ConfigPaths5878;
}

const HeavyComponent5878 = memo(function HeavyComponent5878({ config }: HeavyProps5878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5878.displayName = 'HeavyComponent5878';
export default HeavyComponent5878;

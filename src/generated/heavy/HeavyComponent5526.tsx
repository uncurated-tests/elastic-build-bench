'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5526<T> = T extends (infer U)[]
  ? DeepReadonlyArray5526<U>
  : T extends object
  ? DeepReadonlyObject5526<T>
  : T;

interface DeepReadonlyArray5526<T> extends ReadonlyArray<DeepReadonly5526<T>> {}

type DeepReadonlyObject5526<T> = {
  readonly [P in keyof T]: DeepReadonly5526<T[P]>;
};

type UnionToIntersection5526<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5526<T> = UnionToIntersection5526<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5526<T extends unknown[], V> = [...T, V];

type TuplifyUnion5526<T, L = LastOf5526<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5526<TuplifyUnion5526<Exclude<T, L>>, L>;

type DeepPartial5526<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5526<T[P]> }
  : T;

type Paths5526<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5526<K, Paths5526<T[K], Prev5526[D]>> : never }[keyof T]
  : never;

type Prev5526 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5526<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5526 {
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

type ConfigPaths5526 = Paths5526<NestedConfig5526>;

interface HeavyProps5526 {
  config: DeepPartial5526<NestedConfig5526>;
  path?: ConfigPaths5526;
}

const HeavyComponent5526 = memo(function HeavyComponent5526({ config }: HeavyProps5526) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5526) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5526 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5526: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5526.displayName = 'HeavyComponent5526';
export default HeavyComponent5526;

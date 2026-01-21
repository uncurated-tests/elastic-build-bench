'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5371<T> = T extends (infer U)[]
  ? DeepReadonlyArray5371<U>
  : T extends object
  ? DeepReadonlyObject5371<T>
  : T;

interface DeepReadonlyArray5371<T> extends ReadonlyArray<DeepReadonly5371<T>> {}

type DeepReadonlyObject5371<T> = {
  readonly [P in keyof T]: DeepReadonly5371<T[P]>;
};

type UnionToIntersection5371<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5371<T> = UnionToIntersection5371<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5371<T extends unknown[], V> = [...T, V];

type TuplifyUnion5371<T, L = LastOf5371<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5371<TuplifyUnion5371<Exclude<T, L>>, L>;

type DeepPartial5371<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5371<T[P]> }
  : T;

type Paths5371<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5371<K, Paths5371<T[K], Prev5371[D]>> : never }[keyof T]
  : never;

type Prev5371 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5371<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5371 {
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

type ConfigPaths5371 = Paths5371<NestedConfig5371>;

interface HeavyProps5371 {
  config: DeepPartial5371<NestedConfig5371>;
  path?: ConfigPaths5371;
}

const HeavyComponent5371 = memo(function HeavyComponent5371({ config }: HeavyProps5371) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5371) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5371 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5371: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5371.displayName = 'HeavyComponent5371';
export default HeavyComponent5371;

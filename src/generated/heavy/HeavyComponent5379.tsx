'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5379<T> = T extends (infer U)[]
  ? DeepReadonlyArray5379<U>
  : T extends object
  ? DeepReadonlyObject5379<T>
  : T;

interface DeepReadonlyArray5379<T> extends ReadonlyArray<DeepReadonly5379<T>> {}

type DeepReadonlyObject5379<T> = {
  readonly [P in keyof T]: DeepReadonly5379<T[P]>;
};

type UnionToIntersection5379<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5379<T> = UnionToIntersection5379<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5379<T extends unknown[], V> = [...T, V];

type TuplifyUnion5379<T, L = LastOf5379<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5379<TuplifyUnion5379<Exclude<T, L>>, L>;

type DeepPartial5379<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5379<T[P]> }
  : T;

type Paths5379<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5379<K, Paths5379<T[K], Prev5379[D]>> : never }[keyof T]
  : never;

type Prev5379 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5379<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5379 {
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

type ConfigPaths5379 = Paths5379<NestedConfig5379>;

interface HeavyProps5379 {
  config: DeepPartial5379<NestedConfig5379>;
  path?: ConfigPaths5379;
}

const HeavyComponent5379 = memo(function HeavyComponent5379({ config }: HeavyProps5379) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5379) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5379 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5379: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5379.displayName = 'HeavyComponent5379';
export default HeavyComponent5379;

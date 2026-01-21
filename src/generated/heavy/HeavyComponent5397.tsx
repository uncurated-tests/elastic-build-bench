'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5397<T> = T extends (infer U)[]
  ? DeepReadonlyArray5397<U>
  : T extends object
  ? DeepReadonlyObject5397<T>
  : T;

interface DeepReadonlyArray5397<T> extends ReadonlyArray<DeepReadonly5397<T>> {}

type DeepReadonlyObject5397<T> = {
  readonly [P in keyof T]: DeepReadonly5397<T[P]>;
};

type UnionToIntersection5397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5397<T> = UnionToIntersection5397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5397<T extends unknown[], V> = [...T, V];

type TuplifyUnion5397<T, L = LastOf5397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5397<TuplifyUnion5397<Exclude<T, L>>, L>;

type DeepPartial5397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5397<T[P]> }
  : T;

type Paths5397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5397<K, Paths5397<T[K], Prev5397[D]>> : never }[keyof T]
  : never;

type Prev5397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5397 {
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

type ConfigPaths5397 = Paths5397<NestedConfig5397>;

interface HeavyProps5397 {
  config: DeepPartial5397<NestedConfig5397>;
  path?: ConfigPaths5397;
}

const HeavyComponent5397 = memo(function HeavyComponent5397({ config }: HeavyProps5397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5397.displayName = 'HeavyComponent5397';
export default HeavyComponent5397;

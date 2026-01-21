'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5997<T> = T extends (infer U)[]
  ? DeepReadonlyArray5997<U>
  : T extends object
  ? DeepReadonlyObject5997<T>
  : T;

interface DeepReadonlyArray5997<T> extends ReadonlyArray<DeepReadonly5997<T>> {}

type DeepReadonlyObject5997<T> = {
  readonly [P in keyof T]: DeepReadonly5997<T[P]>;
};

type UnionToIntersection5997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5997<T> = UnionToIntersection5997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5997<T extends unknown[], V> = [...T, V];

type TuplifyUnion5997<T, L = LastOf5997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5997<TuplifyUnion5997<Exclude<T, L>>, L>;

type DeepPartial5997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5997<T[P]> }
  : T;

type Paths5997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5997<K, Paths5997<T[K], Prev5997[D]>> : never }[keyof T]
  : never;

type Prev5997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5997 {
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

type ConfigPaths5997 = Paths5997<NestedConfig5997>;

interface HeavyProps5997 {
  config: DeepPartial5997<NestedConfig5997>;
  path?: ConfigPaths5997;
}

const HeavyComponent5997 = memo(function HeavyComponent5997({ config }: HeavyProps5997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5997.displayName = 'HeavyComponent5997';
export default HeavyComponent5997;

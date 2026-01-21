'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5454<T> = T extends (infer U)[]
  ? DeepReadonlyArray5454<U>
  : T extends object
  ? DeepReadonlyObject5454<T>
  : T;

interface DeepReadonlyArray5454<T> extends ReadonlyArray<DeepReadonly5454<T>> {}

type DeepReadonlyObject5454<T> = {
  readonly [P in keyof T]: DeepReadonly5454<T[P]>;
};

type UnionToIntersection5454<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5454<T> = UnionToIntersection5454<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5454<T extends unknown[], V> = [...T, V];

type TuplifyUnion5454<T, L = LastOf5454<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5454<TuplifyUnion5454<Exclude<T, L>>, L>;

type DeepPartial5454<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5454<T[P]> }
  : T;

type Paths5454<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5454<K, Paths5454<T[K], Prev5454[D]>> : never }[keyof T]
  : never;

type Prev5454 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5454<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5454 {
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

type ConfigPaths5454 = Paths5454<NestedConfig5454>;

interface HeavyProps5454 {
  config: DeepPartial5454<NestedConfig5454>;
  path?: ConfigPaths5454;
}

const HeavyComponent5454 = memo(function HeavyComponent5454({ config }: HeavyProps5454) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5454) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5454 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5454: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5454.displayName = 'HeavyComponent5454';
export default HeavyComponent5454;

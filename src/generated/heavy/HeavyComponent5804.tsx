'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5804<T> = T extends (infer U)[]
  ? DeepReadonlyArray5804<U>
  : T extends object
  ? DeepReadonlyObject5804<T>
  : T;

interface DeepReadonlyArray5804<T> extends ReadonlyArray<DeepReadonly5804<T>> {}

type DeepReadonlyObject5804<T> = {
  readonly [P in keyof T]: DeepReadonly5804<T[P]>;
};

type UnionToIntersection5804<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5804<T> = UnionToIntersection5804<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5804<T extends unknown[], V> = [...T, V];

type TuplifyUnion5804<T, L = LastOf5804<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5804<TuplifyUnion5804<Exclude<T, L>>, L>;

type DeepPartial5804<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5804<T[P]> }
  : T;

type Paths5804<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5804<K, Paths5804<T[K], Prev5804[D]>> : never }[keyof T]
  : never;

type Prev5804 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5804<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5804 {
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

type ConfigPaths5804 = Paths5804<NestedConfig5804>;

interface HeavyProps5804 {
  config: DeepPartial5804<NestedConfig5804>;
  path?: ConfigPaths5804;
}

const HeavyComponent5804 = memo(function HeavyComponent5804({ config }: HeavyProps5804) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5804) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5804 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5804: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5804.displayName = 'HeavyComponent5804';
export default HeavyComponent5804;

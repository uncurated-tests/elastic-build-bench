'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5243<T> = T extends (infer U)[]
  ? DeepReadonlyArray5243<U>
  : T extends object
  ? DeepReadonlyObject5243<T>
  : T;

interface DeepReadonlyArray5243<T> extends ReadonlyArray<DeepReadonly5243<T>> {}

type DeepReadonlyObject5243<T> = {
  readonly [P in keyof T]: DeepReadonly5243<T[P]>;
};

type UnionToIntersection5243<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5243<T> = UnionToIntersection5243<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5243<T extends unknown[], V> = [...T, V];

type TuplifyUnion5243<T, L = LastOf5243<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5243<TuplifyUnion5243<Exclude<T, L>>, L>;

type DeepPartial5243<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5243<T[P]> }
  : T;

type Paths5243<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5243<K, Paths5243<T[K], Prev5243[D]>> : never }[keyof T]
  : never;

type Prev5243 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5243<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5243 {
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

type ConfigPaths5243 = Paths5243<NestedConfig5243>;

interface HeavyProps5243 {
  config: DeepPartial5243<NestedConfig5243>;
  path?: ConfigPaths5243;
}

const HeavyComponent5243 = memo(function HeavyComponent5243({ config }: HeavyProps5243) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5243) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5243 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5243: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5243.displayName = 'HeavyComponent5243';
export default HeavyComponent5243;

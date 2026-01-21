'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5160<T> = T extends (infer U)[]
  ? DeepReadonlyArray5160<U>
  : T extends object
  ? DeepReadonlyObject5160<T>
  : T;

interface DeepReadonlyArray5160<T> extends ReadonlyArray<DeepReadonly5160<T>> {}

type DeepReadonlyObject5160<T> = {
  readonly [P in keyof T]: DeepReadonly5160<T[P]>;
};

type UnionToIntersection5160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5160<T> = UnionToIntersection5160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5160<T extends unknown[], V> = [...T, V];

type TuplifyUnion5160<T, L = LastOf5160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5160<TuplifyUnion5160<Exclude<T, L>>, L>;

type DeepPartial5160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5160<T[P]> }
  : T;

type Paths5160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5160<K, Paths5160<T[K], Prev5160[D]>> : never }[keyof T]
  : never;

type Prev5160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5160 {
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

type ConfigPaths5160 = Paths5160<NestedConfig5160>;

interface HeavyProps5160 {
  config: DeepPartial5160<NestedConfig5160>;
  path?: ConfigPaths5160;
}

const HeavyComponent5160 = memo(function HeavyComponent5160({ config }: HeavyProps5160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5160.displayName = 'HeavyComponent5160';
export default HeavyComponent5160;

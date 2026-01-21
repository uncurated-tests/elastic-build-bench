'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5951<T> = T extends (infer U)[]
  ? DeepReadonlyArray5951<U>
  : T extends object
  ? DeepReadonlyObject5951<T>
  : T;

interface DeepReadonlyArray5951<T> extends ReadonlyArray<DeepReadonly5951<T>> {}

type DeepReadonlyObject5951<T> = {
  readonly [P in keyof T]: DeepReadonly5951<T[P]>;
};

type UnionToIntersection5951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5951<T> = UnionToIntersection5951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5951<T extends unknown[], V> = [...T, V];

type TuplifyUnion5951<T, L = LastOf5951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5951<TuplifyUnion5951<Exclude<T, L>>, L>;

type DeepPartial5951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5951<T[P]> }
  : T;

type Paths5951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5951<K, Paths5951<T[K], Prev5951[D]>> : never }[keyof T]
  : never;

type Prev5951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5951 {
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

type ConfigPaths5951 = Paths5951<NestedConfig5951>;

interface HeavyProps5951 {
  config: DeepPartial5951<NestedConfig5951>;
  path?: ConfigPaths5951;
}

const HeavyComponent5951 = memo(function HeavyComponent5951({ config }: HeavyProps5951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5951.displayName = 'HeavyComponent5951';
export default HeavyComponent5951;

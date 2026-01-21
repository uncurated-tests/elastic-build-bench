'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5332<T> = T extends (infer U)[]
  ? DeepReadonlyArray5332<U>
  : T extends object
  ? DeepReadonlyObject5332<T>
  : T;

interface DeepReadonlyArray5332<T> extends ReadonlyArray<DeepReadonly5332<T>> {}

type DeepReadonlyObject5332<T> = {
  readonly [P in keyof T]: DeepReadonly5332<T[P]>;
};

type UnionToIntersection5332<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5332<T> = UnionToIntersection5332<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5332<T extends unknown[], V> = [...T, V];

type TuplifyUnion5332<T, L = LastOf5332<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5332<TuplifyUnion5332<Exclude<T, L>>, L>;

type DeepPartial5332<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5332<T[P]> }
  : T;

type Paths5332<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5332<K, Paths5332<T[K], Prev5332[D]>> : never }[keyof T]
  : never;

type Prev5332 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5332<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5332 {
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

type ConfigPaths5332 = Paths5332<NestedConfig5332>;

interface HeavyProps5332 {
  config: DeepPartial5332<NestedConfig5332>;
  path?: ConfigPaths5332;
}

const HeavyComponent5332 = memo(function HeavyComponent5332({ config }: HeavyProps5332) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5332) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5332 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5332: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5332.displayName = 'HeavyComponent5332';
export default HeavyComponent5332;

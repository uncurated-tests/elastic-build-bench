'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5065<T> = T extends (infer U)[]
  ? DeepReadonlyArray5065<U>
  : T extends object
  ? DeepReadonlyObject5065<T>
  : T;

interface DeepReadonlyArray5065<T> extends ReadonlyArray<DeepReadonly5065<T>> {}

type DeepReadonlyObject5065<T> = {
  readonly [P in keyof T]: DeepReadonly5065<T[P]>;
};

type UnionToIntersection5065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5065<T> = UnionToIntersection5065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5065<T extends unknown[], V> = [...T, V];

type TuplifyUnion5065<T, L = LastOf5065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5065<TuplifyUnion5065<Exclude<T, L>>, L>;

type DeepPartial5065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5065<T[P]> }
  : T;

type Paths5065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5065<K, Paths5065<T[K], Prev5065[D]>> : never }[keyof T]
  : never;

type Prev5065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5065 {
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

type ConfigPaths5065 = Paths5065<NestedConfig5065>;

interface HeavyProps5065 {
  config: DeepPartial5065<NestedConfig5065>;
  path?: ConfigPaths5065;
}

const HeavyComponent5065 = memo(function HeavyComponent5065({ config }: HeavyProps5065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5065.displayName = 'HeavyComponent5065';
export default HeavyComponent5065;

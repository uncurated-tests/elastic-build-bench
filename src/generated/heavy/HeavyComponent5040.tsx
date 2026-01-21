'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5040<T> = T extends (infer U)[]
  ? DeepReadonlyArray5040<U>
  : T extends object
  ? DeepReadonlyObject5040<T>
  : T;

interface DeepReadonlyArray5040<T> extends ReadonlyArray<DeepReadonly5040<T>> {}

type DeepReadonlyObject5040<T> = {
  readonly [P in keyof T]: DeepReadonly5040<T[P]>;
};

type UnionToIntersection5040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5040<T> = UnionToIntersection5040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5040<T extends unknown[], V> = [...T, V];

type TuplifyUnion5040<T, L = LastOf5040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5040<TuplifyUnion5040<Exclude<T, L>>, L>;

type DeepPartial5040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5040<T[P]> }
  : T;

type Paths5040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5040<K, Paths5040<T[K], Prev5040[D]>> : never }[keyof T]
  : never;

type Prev5040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5040 {
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

type ConfigPaths5040 = Paths5040<NestedConfig5040>;

interface HeavyProps5040 {
  config: DeepPartial5040<NestedConfig5040>;
  path?: ConfigPaths5040;
}

const HeavyComponent5040 = memo(function HeavyComponent5040({ config }: HeavyProps5040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5040.displayName = 'HeavyComponent5040';
export default HeavyComponent5040;

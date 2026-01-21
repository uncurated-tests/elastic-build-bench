'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5914<T> = T extends (infer U)[]
  ? DeepReadonlyArray5914<U>
  : T extends object
  ? DeepReadonlyObject5914<T>
  : T;

interface DeepReadonlyArray5914<T> extends ReadonlyArray<DeepReadonly5914<T>> {}

type DeepReadonlyObject5914<T> = {
  readonly [P in keyof T]: DeepReadonly5914<T[P]>;
};

type UnionToIntersection5914<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5914<T> = UnionToIntersection5914<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5914<T extends unknown[], V> = [...T, V];

type TuplifyUnion5914<T, L = LastOf5914<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5914<TuplifyUnion5914<Exclude<T, L>>, L>;

type DeepPartial5914<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5914<T[P]> }
  : T;

type Paths5914<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5914<K, Paths5914<T[K], Prev5914[D]>> : never }[keyof T]
  : never;

type Prev5914 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5914<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5914 {
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

type ConfigPaths5914 = Paths5914<NestedConfig5914>;

interface HeavyProps5914 {
  config: DeepPartial5914<NestedConfig5914>;
  path?: ConfigPaths5914;
}

const HeavyComponent5914 = memo(function HeavyComponent5914({ config }: HeavyProps5914) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5914) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5914 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5914: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5914.displayName = 'HeavyComponent5914';
export default HeavyComponent5914;

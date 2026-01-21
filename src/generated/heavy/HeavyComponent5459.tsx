'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5459<T> = T extends (infer U)[]
  ? DeepReadonlyArray5459<U>
  : T extends object
  ? DeepReadonlyObject5459<T>
  : T;

interface DeepReadonlyArray5459<T> extends ReadonlyArray<DeepReadonly5459<T>> {}

type DeepReadonlyObject5459<T> = {
  readonly [P in keyof T]: DeepReadonly5459<T[P]>;
};

type UnionToIntersection5459<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5459<T> = UnionToIntersection5459<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5459<T extends unknown[], V> = [...T, V];

type TuplifyUnion5459<T, L = LastOf5459<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5459<TuplifyUnion5459<Exclude<T, L>>, L>;

type DeepPartial5459<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5459<T[P]> }
  : T;

type Paths5459<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5459<K, Paths5459<T[K], Prev5459[D]>> : never }[keyof T]
  : never;

type Prev5459 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5459<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5459 {
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

type ConfigPaths5459 = Paths5459<NestedConfig5459>;

interface HeavyProps5459 {
  config: DeepPartial5459<NestedConfig5459>;
  path?: ConfigPaths5459;
}

const HeavyComponent5459 = memo(function HeavyComponent5459({ config }: HeavyProps5459) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5459) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5459 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5459: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5459.displayName = 'HeavyComponent5459';
export default HeavyComponent5459;

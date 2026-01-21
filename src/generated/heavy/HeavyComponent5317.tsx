'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5317<T> = T extends (infer U)[]
  ? DeepReadonlyArray5317<U>
  : T extends object
  ? DeepReadonlyObject5317<T>
  : T;

interface DeepReadonlyArray5317<T> extends ReadonlyArray<DeepReadonly5317<T>> {}

type DeepReadonlyObject5317<T> = {
  readonly [P in keyof T]: DeepReadonly5317<T[P]>;
};

type UnionToIntersection5317<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5317<T> = UnionToIntersection5317<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5317<T extends unknown[], V> = [...T, V];

type TuplifyUnion5317<T, L = LastOf5317<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5317<TuplifyUnion5317<Exclude<T, L>>, L>;

type DeepPartial5317<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5317<T[P]> }
  : T;

type Paths5317<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5317<K, Paths5317<T[K], Prev5317[D]>> : never }[keyof T]
  : never;

type Prev5317 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5317<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5317 {
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

type ConfigPaths5317 = Paths5317<NestedConfig5317>;

interface HeavyProps5317 {
  config: DeepPartial5317<NestedConfig5317>;
  path?: ConfigPaths5317;
}

const HeavyComponent5317 = memo(function HeavyComponent5317({ config }: HeavyProps5317) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5317) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5317 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5317: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5317.displayName = 'HeavyComponent5317';
export default HeavyComponent5317;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5166<T> = T extends (infer U)[]
  ? DeepReadonlyArray5166<U>
  : T extends object
  ? DeepReadonlyObject5166<T>
  : T;

interface DeepReadonlyArray5166<T> extends ReadonlyArray<DeepReadonly5166<T>> {}

type DeepReadonlyObject5166<T> = {
  readonly [P in keyof T]: DeepReadonly5166<T[P]>;
};

type UnionToIntersection5166<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5166<T> = UnionToIntersection5166<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5166<T extends unknown[], V> = [...T, V];

type TuplifyUnion5166<T, L = LastOf5166<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5166<TuplifyUnion5166<Exclude<T, L>>, L>;

type DeepPartial5166<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5166<T[P]> }
  : T;

type Paths5166<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5166<K, Paths5166<T[K], Prev5166[D]>> : never }[keyof T]
  : never;

type Prev5166 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5166<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5166 {
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

type ConfigPaths5166 = Paths5166<NestedConfig5166>;

interface HeavyProps5166 {
  config: DeepPartial5166<NestedConfig5166>;
  path?: ConfigPaths5166;
}

const HeavyComponent5166 = memo(function HeavyComponent5166({ config }: HeavyProps5166) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5166) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5166 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5166: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5166.displayName = 'HeavyComponent5166';
export default HeavyComponent5166;

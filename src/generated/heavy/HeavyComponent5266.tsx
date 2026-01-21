'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5266<T> = T extends (infer U)[]
  ? DeepReadonlyArray5266<U>
  : T extends object
  ? DeepReadonlyObject5266<T>
  : T;

interface DeepReadonlyArray5266<T> extends ReadonlyArray<DeepReadonly5266<T>> {}

type DeepReadonlyObject5266<T> = {
  readonly [P in keyof T]: DeepReadonly5266<T[P]>;
};

type UnionToIntersection5266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5266<T> = UnionToIntersection5266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5266<T extends unknown[], V> = [...T, V];

type TuplifyUnion5266<T, L = LastOf5266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5266<TuplifyUnion5266<Exclude<T, L>>, L>;

type DeepPartial5266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5266<T[P]> }
  : T;

type Paths5266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5266<K, Paths5266<T[K], Prev5266[D]>> : never }[keyof T]
  : never;

type Prev5266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5266 {
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

type ConfigPaths5266 = Paths5266<NestedConfig5266>;

interface HeavyProps5266 {
  config: DeepPartial5266<NestedConfig5266>;
  path?: ConfigPaths5266;
}

const HeavyComponent5266 = memo(function HeavyComponent5266({ config }: HeavyProps5266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5266.displayName = 'HeavyComponent5266';
export default HeavyComponent5266;

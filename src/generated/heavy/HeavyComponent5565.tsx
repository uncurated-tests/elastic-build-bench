'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5565<T> = T extends (infer U)[]
  ? DeepReadonlyArray5565<U>
  : T extends object
  ? DeepReadonlyObject5565<T>
  : T;

interface DeepReadonlyArray5565<T> extends ReadonlyArray<DeepReadonly5565<T>> {}

type DeepReadonlyObject5565<T> = {
  readonly [P in keyof T]: DeepReadonly5565<T[P]>;
};

type UnionToIntersection5565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5565<T> = UnionToIntersection5565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5565<T extends unknown[], V> = [...T, V];

type TuplifyUnion5565<T, L = LastOf5565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5565<TuplifyUnion5565<Exclude<T, L>>, L>;

type DeepPartial5565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5565<T[P]> }
  : T;

type Paths5565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5565<K, Paths5565<T[K], Prev5565[D]>> : never }[keyof T]
  : never;

type Prev5565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5565 {
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

type ConfigPaths5565 = Paths5565<NestedConfig5565>;

interface HeavyProps5565 {
  config: DeepPartial5565<NestedConfig5565>;
  path?: ConfigPaths5565;
}

const HeavyComponent5565 = memo(function HeavyComponent5565({ config }: HeavyProps5565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5565.displayName = 'HeavyComponent5565';
export default HeavyComponent5565;

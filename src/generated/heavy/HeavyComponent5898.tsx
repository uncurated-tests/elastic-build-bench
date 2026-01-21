'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5898<T> = T extends (infer U)[]
  ? DeepReadonlyArray5898<U>
  : T extends object
  ? DeepReadonlyObject5898<T>
  : T;

interface DeepReadonlyArray5898<T> extends ReadonlyArray<DeepReadonly5898<T>> {}

type DeepReadonlyObject5898<T> = {
  readonly [P in keyof T]: DeepReadonly5898<T[P]>;
};

type UnionToIntersection5898<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5898<T> = UnionToIntersection5898<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5898<T extends unknown[], V> = [...T, V];

type TuplifyUnion5898<T, L = LastOf5898<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5898<TuplifyUnion5898<Exclude<T, L>>, L>;

type DeepPartial5898<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5898<T[P]> }
  : T;

type Paths5898<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5898<K, Paths5898<T[K], Prev5898[D]>> : never }[keyof T]
  : never;

type Prev5898 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5898<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5898 {
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

type ConfigPaths5898 = Paths5898<NestedConfig5898>;

interface HeavyProps5898 {
  config: DeepPartial5898<NestedConfig5898>;
  path?: ConfigPaths5898;
}

const HeavyComponent5898 = memo(function HeavyComponent5898({ config }: HeavyProps5898) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5898) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5898 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5898: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5898.displayName = 'HeavyComponent5898';
export default HeavyComponent5898;

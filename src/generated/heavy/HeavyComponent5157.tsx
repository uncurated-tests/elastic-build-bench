'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5157<T> = T extends (infer U)[]
  ? DeepReadonlyArray5157<U>
  : T extends object
  ? DeepReadonlyObject5157<T>
  : T;

interface DeepReadonlyArray5157<T> extends ReadonlyArray<DeepReadonly5157<T>> {}

type DeepReadonlyObject5157<T> = {
  readonly [P in keyof T]: DeepReadonly5157<T[P]>;
};

type UnionToIntersection5157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5157<T> = UnionToIntersection5157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5157<T extends unknown[], V> = [...T, V];

type TuplifyUnion5157<T, L = LastOf5157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5157<TuplifyUnion5157<Exclude<T, L>>, L>;

type DeepPartial5157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5157<T[P]> }
  : T;

type Paths5157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5157<K, Paths5157<T[K], Prev5157[D]>> : never }[keyof T]
  : never;

type Prev5157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5157 {
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

type ConfigPaths5157 = Paths5157<NestedConfig5157>;

interface HeavyProps5157 {
  config: DeepPartial5157<NestedConfig5157>;
  path?: ConfigPaths5157;
}

const HeavyComponent5157 = memo(function HeavyComponent5157({ config }: HeavyProps5157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5157.displayName = 'HeavyComponent5157';
export default HeavyComponent5157;

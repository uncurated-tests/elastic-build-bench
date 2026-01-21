'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5754<T> = T extends (infer U)[]
  ? DeepReadonlyArray5754<U>
  : T extends object
  ? DeepReadonlyObject5754<T>
  : T;

interface DeepReadonlyArray5754<T> extends ReadonlyArray<DeepReadonly5754<T>> {}

type DeepReadonlyObject5754<T> = {
  readonly [P in keyof T]: DeepReadonly5754<T[P]>;
};

type UnionToIntersection5754<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5754<T> = UnionToIntersection5754<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5754<T extends unknown[], V> = [...T, V];

type TuplifyUnion5754<T, L = LastOf5754<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5754<TuplifyUnion5754<Exclude<T, L>>, L>;

type DeepPartial5754<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5754<T[P]> }
  : T;

type Paths5754<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5754<K, Paths5754<T[K], Prev5754[D]>> : never }[keyof T]
  : never;

type Prev5754 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5754<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5754 {
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

type ConfigPaths5754 = Paths5754<NestedConfig5754>;

interface HeavyProps5754 {
  config: DeepPartial5754<NestedConfig5754>;
  path?: ConfigPaths5754;
}

const HeavyComponent5754 = memo(function HeavyComponent5754({ config }: HeavyProps5754) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5754) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5754 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5754: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5754.displayName = 'HeavyComponent5754';
export default HeavyComponent5754;

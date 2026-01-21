'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5967<T> = T extends (infer U)[]
  ? DeepReadonlyArray5967<U>
  : T extends object
  ? DeepReadonlyObject5967<T>
  : T;

interface DeepReadonlyArray5967<T> extends ReadonlyArray<DeepReadonly5967<T>> {}

type DeepReadonlyObject5967<T> = {
  readonly [P in keyof T]: DeepReadonly5967<T[P]>;
};

type UnionToIntersection5967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5967<T> = UnionToIntersection5967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5967<T extends unknown[], V> = [...T, V];

type TuplifyUnion5967<T, L = LastOf5967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5967<TuplifyUnion5967<Exclude<T, L>>, L>;

type DeepPartial5967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5967<T[P]> }
  : T;

type Paths5967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5967<K, Paths5967<T[K], Prev5967[D]>> : never }[keyof T]
  : never;

type Prev5967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5967 {
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

type ConfigPaths5967 = Paths5967<NestedConfig5967>;

interface HeavyProps5967 {
  config: DeepPartial5967<NestedConfig5967>;
  path?: ConfigPaths5967;
}

const HeavyComponent5967 = memo(function HeavyComponent5967({ config }: HeavyProps5967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5967.displayName = 'HeavyComponent5967';
export default HeavyComponent5967;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5433<T> = T extends (infer U)[]
  ? DeepReadonlyArray5433<U>
  : T extends object
  ? DeepReadonlyObject5433<T>
  : T;

interface DeepReadonlyArray5433<T> extends ReadonlyArray<DeepReadonly5433<T>> {}

type DeepReadonlyObject5433<T> = {
  readonly [P in keyof T]: DeepReadonly5433<T[P]>;
};

type UnionToIntersection5433<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5433<T> = UnionToIntersection5433<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5433<T extends unknown[], V> = [...T, V];

type TuplifyUnion5433<T, L = LastOf5433<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5433<TuplifyUnion5433<Exclude<T, L>>, L>;

type DeepPartial5433<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5433<T[P]> }
  : T;

type Paths5433<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5433<K, Paths5433<T[K], Prev5433[D]>> : never }[keyof T]
  : never;

type Prev5433 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5433<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5433 {
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

type ConfigPaths5433 = Paths5433<NestedConfig5433>;

interface HeavyProps5433 {
  config: DeepPartial5433<NestedConfig5433>;
  path?: ConfigPaths5433;
}

const HeavyComponent5433 = memo(function HeavyComponent5433({ config }: HeavyProps5433) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5433) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5433 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5433: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5433.displayName = 'HeavyComponent5433';
export default HeavyComponent5433;

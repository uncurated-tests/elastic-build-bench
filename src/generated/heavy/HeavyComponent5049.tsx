'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5049<T> = T extends (infer U)[]
  ? DeepReadonlyArray5049<U>
  : T extends object
  ? DeepReadonlyObject5049<T>
  : T;

interface DeepReadonlyArray5049<T> extends ReadonlyArray<DeepReadonly5049<T>> {}

type DeepReadonlyObject5049<T> = {
  readonly [P in keyof T]: DeepReadonly5049<T[P]>;
};

type UnionToIntersection5049<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5049<T> = UnionToIntersection5049<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5049<T extends unknown[], V> = [...T, V];

type TuplifyUnion5049<T, L = LastOf5049<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5049<TuplifyUnion5049<Exclude<T, L>>, L>;

type DeepPartial5049<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5049<T[P]> }
  : T;

type Paths5049<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5049<K, Paths5049<T[K], Prev5049[D]>> : never }[keyof T]
  : never;

type Prev5049 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5049<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5049 {
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

type ConfigPaths5049 = Paths5049<NestedConfig5049>;

interface HeavyProps5049 {
  config: DeepPartial5049<NestedConfig5049>;
  path?: ConfigPaths5049;
}

const HeavyComponent5049 = memo(function HeavyComponent5049({ config }: HeavyProps5049) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5049) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5049 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5049: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5049.displayName = 'HeavyComponent5049';
export default HeavyComponent5049;

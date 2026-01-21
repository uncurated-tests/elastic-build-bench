'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5648<T> = T extends (infer U)[]
  ? DeepReadonlyArray5648<U>
  : T extends object
  ? DeepReadonlyObject5648<T>
  : T;

interface DeepReadonlyArray5648<T> extends ReadonlyArray<DeepReadonly5648<T>> {}

type DeepReadonlyObject5648<T> = {
  readonly [P in keyof T]: DeepReadonly5648<T[P]>;
};

type UnionToIntersection5648<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5648<T> = UnionToIntersection5648<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5648<T extends unknown[], V> = [...T, V];

type TuplifyUnion5648<T, L = LastOf5648<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5648<TuplifyUnion5648<Exclude<T, L>>, L>;

type DeepPartial5648<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5648<T[P]> }
  : T;

type Paths5648<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5648<K, Paths5648<T[K], Prev5648[D]>> : never }[keyof T]
  : never;

type Prev5648 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5648<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5648 {
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

type ConfigPaths5648 = Paths5648<NestedConfig5648>;

interface HeavyProps5648 {
  config: DeepPartial5648<NestedConfig5648>;
  path?: ConfigPaths5648;
}

const HeavyComponent5648 = memo(function HeavyComponent5648({ config }: HeavyProps5648) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5648) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5648 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5648: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5648.displayName = 'HeavyComponent5648';
export default HeavyComponent5648;

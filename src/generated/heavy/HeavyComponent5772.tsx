'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5772<T> = T extends (infer U)[]
  ? DeepReadonlyArray5772<U>
  : T extends object
  ? DeepReadonlyObject5772<T>
  : T;

interface DeepReadonlyArray5772<T> extends ReadonlyArray<DeepReadonly5772<T>> {}

type DeepReadonlyObject5772<T> = {
  readonly [P in keyof T]: DeepReadonly5772<T[P]>;
};

type UnionToIntersection5772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5772<T> = UnionToIntersection5772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5772<T extends unknown[], V> = [...T, V];

type TuplifyUnion5772<T, L = LastOf5772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5772<TuplifyUnion5772<Exclude<T, L>>, L>;

type DeepPartial5772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5772<T[P]> }
  : T;

type Paths5772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5772<K, Paths5772<T[K], Prev5772[D]>> : never }[keyof T]
  : never;

type Prev5772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5772 {
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

type ConfigPaths5772 = Paths5772<NestedConfig5772>;

interface HeavyProps5772 {
  config: DeepPartial5772<NestedConfig5772>;
  path?: ConfigPaths5772;
}

const HeavyComponent5772 = memo(function HeavyComponent5772({ config }: HeavyProps5772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5772.displayName = 'HeavyComponent5772';
export default HeavyComponent5772;

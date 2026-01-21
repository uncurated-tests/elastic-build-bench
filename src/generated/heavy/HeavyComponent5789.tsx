'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5789<T> = T extends (infer U)[]
  ? DeepReadonlyArray5789<U>
  : T extends object
  ? DeepReadonlyObject5789<T>
  : T;

interface DeepReadonlyArray5789<T> extends ReadonlyArray<DeepReadonly5789<T>> {}

type DeepReadonlyObject5789<T> = {
  readonly [P in keyof T]: DeepReadonly5789<T[P]>;
};

type UnionToIntersection5789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5789<T> = UnionToIntersection5789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5789<T extends unknown[], V> = [...T, V];

type TuplifyUnion5789<T, L = LastOf5789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5789<TuplifyUnion5789<Exclude<T, L>>, L>;

type DeepPartial5789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5789<T[P]> }
  : T;

type Paths5789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5789<K, Paths5789<T[K], Prev5789[D]>> : never }[keyof T]
  : never;

type Prev5789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5789 {
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

type ConfigPaths5789 = Paths5789<NestedConfig5789>;

interface HeavyProps5789 {
  config: DeepPartial5789<NestedConfig5789>;
  path?: ConfigPaths5789;
}

const HeavyComponent5789 = memo(function HeavyComponent5789({ config }: HeavyProps5789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5789.displayName = 'HeavyComponent5789';
export default HeavyComponent5789;

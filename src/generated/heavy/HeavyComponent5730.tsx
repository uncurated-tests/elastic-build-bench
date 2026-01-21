'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5730<T> = T extends (infer U)[]
  ? DeepReadonlyArray5730<U>
  : T extends object
  ? DeepReadonlyObject5730<T>
  : T;

interface DeepReadonlyArray5730<T> extends ReadonlyArray<DeepReadonly5730<T>> {}

type DeepReadonlyObject5730<T> = {
  readonly [P in keyof T]: DeepReadonly5730<T[P]>;
};

type UnionToIntersection5730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5730<T> = UnionToIntersection5730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5730<T extends unknown[], V> = [...T, V];

type TuplifyUnion5730<T, L = LastOf5730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5730<TuplifyUnion5730<Exclude<T, L>>, L>;

type DeepPartial5730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5730<T[P]> }
  : T;

type Paths5730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5730<K, Paths5730<T[K], Prev5730[D]>> : never }[keyof T]
  : never;

type Prev5730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5730 {
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

type ConfigPaths5730 = Paths5730<NestedConfig5730>;

interface HeavyProps5730 {
  config: DeepPartial5730<NestedConfig5730>;
  path?: ConfigPaths5730;
}

const HeavyComponent5730 = memo(function HeavyComponent5730({ config }: HeavyProps5730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5730.displayName = 'HeavyComponent5730';
export default HeavyComponent5730;

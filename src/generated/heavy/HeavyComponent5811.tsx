'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5811<T> = T extends (infer U)[]
  ? DeepReadonlyArray5811<U>
  : T extends object
  ? DeepReadonlyObject5811<T>
  : T;

interface DeepReadonlyArray5811<T> extends ReadonlyArray<DeepReadonly5811<T>> {}

type DeepReadonlyObject5811<T> = {
  readonly [P in keyof T]: DeepReadonly5811<T[P]>;
};

type UnionToIntersection5811<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5811<T> = UnionToIntersection5811<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5811<T extends unknown[], V> = [...T, V];

type TuplifyUnion5811<T, L = LastOf5811<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5811<TuplifyUnion5811<Exclude<T, L>>, L>;

type DeepPartial5811<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5811<T[P]> }
  : T;

type Paths5811<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5811<K, Paths5811<T[K], Prev5811[D]>> : never }[keyof T]
  : never;

type Prev5811 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5811<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5811 {
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

type ConfigPaths5811 = Paths5811<NestedConfig5811>;

interface HeavyProps5811 {
  config: DeepPartial5811<NestedConfig5811>;
  path?: ConfigPaths5811;
}

const HeavyComponent5811 = memo(function HeavyComponent5811({ config }: HeavyProps5811) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5811) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5811 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5811: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5811.displayName = 'HeavyComponent5811';
export default HeavyComponent5811;

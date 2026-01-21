'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5097<T> = T extends (infer U)[]
  ? DeepReadonlyArray5097<U>
  : T extends object
  ? DeepReadonlyObject5097<T>
  : T;

interface DeepReadonlyArray5097<T> extends ReadonlyArray<DeepReadonly5097<T>> {}

type DeepReadonlyObject5097<T> = {
  readonly [P in keyof T]: DeepReadonly5097<T[P]>;
};

type UnionToIntersection5097<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5097<T> = UnionToIntersection5097<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5097<T extends unknown[], V> = [...T, V];

type TuplifyUnion5097<T, L = LastOf5097<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5097<TuplifyUnion5097<Exclude<T, L>>, L>;

type DeepPartial5097<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5097<T[P]> }
  : T;

type Paths5097<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5097<K, Paths5097<T[K], Prev5097[D]>> : never }[keyof T]
  : never;

type Prev5097 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5097<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5097 {
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

type ConfigPaths5097 = Paths5097<NestedConfig5097>;

interface HeavyProps5097 {
  config: DeepPartial5097<NestedConfig5097>;
  path?: ConfigPaths5097;
}

const HeavyComponent5097 = memo(function HeavyComponent5097({ config }: HeavyProps5097) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5097) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5097 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5097: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5097.displayName = 'HeavyComponent5097';
export default HeavyComponent5097;

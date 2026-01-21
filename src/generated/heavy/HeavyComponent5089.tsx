'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5089<T> = T extends (infer U)[]
  ? DeepReadonlyArray5089<U>
  : T extends object
  ? DeepReadonlyObject5089<T>
  : T;

interface DeepReadonlyArray5089<T> extends ReadonlyArray<DeepReadonly5089<T>> {}

type DeepReadonlyObject5089<T> = {
  readonly [P in keyof T]: DeepReadonly5089<T[P]>;
};

type UnionToIntersection5089<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5089<T> = UnionToIntersection5089<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5089<T extends unknown[], V> = [...T, V];

type TuplifyUnion5089<T, L = LastOf5089<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5089<TuplifyUnion5089<Exclude<T, L>>, L>;

type DeepPartial5089<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5089<T[P]> }
  : T;

type Paths5089<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5089<K, Paths5089<T[K], Prev5089[D]>> : never }[keyof T]
  : never;

type Prev5089 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5089<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5089 {
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

type ConfigPaths5089 = Paths5089<NestedConfig5089>;

interface HeavyProps5089 {
  config: DeepPartial5089<NestedConfig5089>;
  path?: ConfigPaths5089;
}

const HeavyComponent5089 = memo(function HeavyComponent5089({ config }: HeavyProps5089) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5089) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5089 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5089: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5089.displayName = 'HeavyComponent5089';
export default HeavyComponent5089;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5396<T> = T extends (infer U)[]
  ? DeepReadonlyArray5396<U>
  : T extends object
  ? DeepReadonlyObject5396<T>
  : T;

interface DeepReadonlyArray5396<T> extends ReadonlyArray<DeepReadonly5396<T>> {}

type DeepReadonlyObject5396<T> = {
  readonly [P in keyof T]: DeepReadonly5396<T[P]>;
};

type UnionToIntersection5396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5396<T> = UnionToIntersection5396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5396<T extends unknown[], V> = [...T, V];

type TuplifyUnion5396<T, L = LastOf5396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5396<TuplifyUnion5396<Exclude<T, L>>, L>;

type DeepPartial5396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5396<T[P]> }
  : T;

type Paths5396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5396<K, Paths5396<T[K], Prev5396[D]>> : never }[keyof T]
  : never;

type Prev5396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5396 {
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

type ConfigPaths5396 = Paths5396<NestedConfig5396>;

interface HeavyProps5396 {
  config: DeepPartial5396<NestedConfig5396>;
  path?: ConfigPaths5396;
}

const HeavyComponent5396 = memo(function HeavyComponent5396({ config }: HeavyProps5396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5396.displayName = 'HeavyComponent5396';
export default HeavyComponent5396;

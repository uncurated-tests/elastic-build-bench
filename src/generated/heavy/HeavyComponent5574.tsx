'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5574<T> = T extends (infer U)[]
  ? DeepReadonlyArray5574<U>
  : T extends object
  ? DeepReadonlyObject5574<T>
  : T;

interface DeepReadonlyArray5574<T> extends ReadonlyArray<DeepReadonly5574<T>> {}

type DeepReadonlyObject5574<T> = {
  readonly [P in keyof T]: DeepReadonly5574<T[P]>;
};

type UnionToIntersection5574<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5574<T> = UnionToIntersection5574<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5574<T extends unknown[], V> = [...T, V];

type TuplifyUnion5574<T, L = LastOf5574<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5574<TuplifyUnion5574<Exclude<T, L>>, L>;

type DeepPartial5574<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5574<T[P]> }
  : T;

type Paths5574<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5574<K, Paths5574<T[K], Prev5574[D]>> : never }[keyof T]
  : never;

type Prev5574 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5574<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5574 {
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

type ConfigPaths5574 = Paths5574<NestedConfig5574>;

interface HeavyProps5574 {
  config: DeepPartial5574<NestedConfig5574>;
  path?: ConfigPaths5574;
}

const HeavyComponent5574 = memo(function HeavyComponent5574({ config }: HeavyProps5574) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5574) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5574 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5574: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5574.displayName = 'HeavyComponent5574';
export default HeavyComponent5574;

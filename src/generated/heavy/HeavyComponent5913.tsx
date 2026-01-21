'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5913<T> = T extends (infer U)[]
  ? DeepReadonlyArray5913<U>
  : T extends object
  ? DeepReadonlyObject5913<T>
  : T;

interface DeepReadonlyArray5913<T> extends ReadonlyArray<DeepReadonly5913<T>> {}

type DeepReadonlyObject5913<T> = {
  readonly [P in keyof T]: DeepReadonly5913<T[P]>;
};

type UnionToIntersection5913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5913<T> = UnionToIntersection5913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5913<T extends unknown[], V> = [...T, V];

type TuplifyUnion5913<T, L = LastOf5913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5913<TuplifyUnion5913<Exclude<T, L>>, L>;

type DeepPartial5913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5913<T[P]> }
  : T;

type Paths5913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5913<K, Paths5913<T[K], Prev5913[D]>> : never }[keyof T]
  : never;

type Prev5913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5913 {
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

type ConfigPaths5913 = Paths5913<NestedConfig5913>;

interface HeavyProps5913 {
  config: DeepPartial5913<NestedConfig5913>;
  path?: ConfigPaths5913;
}

const HeavyComponent5913 = memo(function HeavyComponent5913({ config }: HeavyProps5913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5913.displayName = 'HeavyComponent5913';
export default HeavyComponent5913;

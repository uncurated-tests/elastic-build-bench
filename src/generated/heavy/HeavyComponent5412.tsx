'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5412<T> = T extends (infer U)[]
  ? DeepReadonlyArray5412<U>
  : T extends object
  ? DeepReadonlyObject5412<T>
  : T;

interface DeepReadonlyArray5412<T> extends ReadonlyArray<DeepReadonly5412<T>> {}

type DeepReadonlyObject5412<T> = {
  readonly [P in keyof T]: DeepReadonly5412<T[P]>;
};

type UnionToIntersection5412<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5412<T> = UnionToIntersection5412<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5412<T extends unknown[], V> = [...T, V];

type TuplifyUnion5412<T, L = LastOf5412<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5412<TuplifyUnion5412<Exclude<T, L>>, L>;

type DeepPartial5412<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5412<T[P]> }
  : T;

type Paths5412<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5412<K, Paths5412<T[K], Prev5412[D]>> : never }[keyof T]
  : never;

type Prev5412 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5412<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5412 {
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

type ConfigPaths5412 = Paths5412<NestedConfig5412>;

interface HeavyProps5412 {
  config: DeepPartial5412<NestedConfig5412>;
  path?: ConfigPaths5412;
}

const HeavyComponent5412 = memo(function HeavyComponent5412({ config }: HeavyProps5412) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5412) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5412 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5412: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5412.displayName = 'HeavyComponent5412';
export default HeavyComponent5412;

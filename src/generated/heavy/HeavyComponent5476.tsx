'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5476<T> = T extends (infer U)[]
  ? DeepReadonlyArray5476<U>
  : T extends object
  ? DeepReadonlyObject5476<T>
  : T;

interface DeepReadonlyArray5476<T> extends ReadonlyArray<DeepReadonly5476<T>> {}

type DeepReadonlyObject5476<T> = {
  readonly [P in keyof T]: DeepReadonly5476<T[P]>;
};

type UnionToIntersection5476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5476<T> = UnionToIntersection5476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5476<T extends unknown[], V> = [...T, V];

type TuplifyUnion5476<T, L = LastOf5476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5476<TuplifyUnion5476<Exclude<T, L>>, L>;

type DeepPartial5476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5476<T[P]> }
  : T;

type Paths5476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5476<K, Paths5476<T[K], Prev5476[D]>> : never }[keyof T]
  : never;

type Prev5476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5476 {
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

type ConfigPaths5476 = Paths5476<NestedConfig5476>;

interface HeavyProps5476 {
  config: DeepPartial5476<NestedConfig5476>;
  path?: ConfigPaths5476;
}

const HeavyComponent5476 = memo(function HeavyComponent5476({ config }: HeavyProps5476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5476.displayName = 'HeavyComponent5476';
export default HeavyComponent5476;

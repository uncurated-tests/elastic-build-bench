'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5343<T> = T extends (infer U)[]
  ? DeepReadonlyArray5343<U>
  : T extends object
  ? DeepReadonlyObject5343<T>
  : T;

interface DeepReadonlyArray5343<T> extends ReadonlyArray<DeepReadonly5343<T>> {}

type DeepReadonlyObject5343<T> = {
  readonly [P in keyof T]: DeepReadonly5343<T[P]>;
};

type UnionToIntersection5343<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5343<T> = UnionToIntersection5343<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5343<T extends unknown[], V> = [...T, V];

type TuplifyUnion5343<T, L = LastOf5343<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5343<TuplifyUnion5343<Exclude<T, L>>, L>;

type DeepPartial5343<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5343<T[P]> }
  : T;

type Paths5343<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5343<K, Paths5343<T[K], Prev5343[D]>> : never }[keyof T]
  : never;

type Prev5343 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5343<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5343 {
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

type ConfigPaths5343 = Paths5343<NestedConfig5343>;

interface HeavyProps5343 {
  config: DeepPartial5343<NestedConfig5343>;
  path?: ConfigPaths5343;
}

const HeavyComponent5343 = memo(function HeavyComponent5343({ config }: HeavyProps5343) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5343) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5343 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5343: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5343.displayName = 'HeavyComponent5343';
export default HeavyComponent5343;

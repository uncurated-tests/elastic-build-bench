'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5870<T> = T extends (infer U)[]
  ? DeepReadonlyArray5870<U>
  : T extends object
  ? DeepReadonlyObject5870<T>
  : T;

interface DeepReadonlyArray5870<T> extends ReadonlyArray<DeepReadonly5870<T>> {}

type DeepReadonlyObject5870<T> = {
  readonly [P in keyof T]: DeepReadonly5870<T[P]>;
};

type UnionToIntersection5870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5870<T> = UnionToIntersection5870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5870<T extends unknown[], V> = [...T, V];

type TuplifyUnion5870<T, L = LastOf5870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5870<TuplifyUnion5870<Exclude<T, L>>, L>;

type DeepPartial5870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5870<T[P]> }
  : T;

type Paths5870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5870<K, Paths5870<T[K], Prev5870[D]>> : never }[keyof T]
  : never;

type Prev5870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5870 {
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

type ConfigPaths5870 = Paths5870<NestedConfig5870>;

interface HeavyProps5870 {
  config: DeepPartial5870<NestedConfig5870>;
  path?: ConfigPaths5870;
}

const HeavyComponent5870 = memo(function HeavyComponent5870({ config }: HeavyProps5870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5870.displayName = 'HeavyComponent5870';
export default HeavyComponent5870;

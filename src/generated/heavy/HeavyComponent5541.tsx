'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5541<T> = T extends (infer U)[]
  ? DeepReadonlyArray5541<U>
  : T extends object
  ? DeepReadonlyObject5541<T>
  : T;

interface DeepReadonlyArray5541<T> extends ReadonlyArray<DeepReadonly5541<T>> {}

type DeepReadonlyObject5541<T> = {
  readonly [P in keyof T]: DeepReadonly5541<T[P]>;
};

type UnionToIntersection5541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5541<T> = UnionToIntersection5541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5541<T extends unknown[], V> = [...T, V];

type TuplifyUnion5541<T, L = LastOf5541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5541<TuplifyUnion5541<Exclude<T, L>>, L>;

type DeepPartial5541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5541<T[P]> }
  : T;

type Paths5541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5541<K, Paths5541<T[K], Prev5541[D]>> : never }[keyof T]
  : never;

type Prev5541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5541 {
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

type ConfigPaths5541 = Paths5541<NestedConfig5541>;

interface HeavyProps5541 {
  config: DeepPartial5541<NestedConfig5541>;
  path?: ConfigPaths5541;
}

const HeavyComponent5541 = memo(function HeavyComponent5541({ config }: HeavyProps5541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5541.displayName = 'HeavyComponent5541';
export default HeavyComponent5541;

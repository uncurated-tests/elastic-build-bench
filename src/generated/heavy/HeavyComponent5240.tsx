'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5240<T> = T extends (infer U)[]
  ? DeepReadonlyArray5240<U>
  : T extends object
  ? DeepReadonlyObject5240<T>
  : T;

interface DeepReadonlyArray5240<T> extends ReadonlyArray<DeepReadonly5240<T>> {}

type DeepReadonlyObject5240<T> = {
  readonly [P in keyof T]: DeepReadonly5240<T[P]>;
};

type UnionToIntersection5240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5240<T> = UnionToIntersection5240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5240<T extends unknown[], V> = [...T, V];

type TuplifyUnion5240<T, L = LastOf5240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5240<TuplifyUnion5240<Exclude<T, L>>, L>;

type DeepPartial5240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5240<T[P]> }
  : T;

type Paths5240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5240<K, Paths5240<T[K], Prev5240[D]>> : never }[keyof T]
  : never;

type Prev5240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5240 {
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

type ConfigPaths5240 = Paths5240<NestedConfig5240>;

interface HeavyProps5240 {
  config: DeepPartial5240<NestedConfig5240>;
  path?: ConfigPaths5240;
}

const HeavyComponent5240 = memo(function HeavyComponent5240({ config }: HeavyProps5240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5240.displayName = 'HeavyComponent5240';
export default HeavyComponent5240;

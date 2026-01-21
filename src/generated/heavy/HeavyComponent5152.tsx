'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5152<T> = T extends (infer U)[]
  ? DeepReadonlyArray5152<U>
  : T extends object
  ? DeepReadonlyObject5152<T>
  : T;

interface DeepReadonlyArray5152<T> extends ReadonlyArray<DeepReadonly5152<T>> {}

type DeepReadonlyObject5152<T> = {
  readonly [P in keyof T]: DeepReadonly5152<T[P]>;
};

type UnionToIntersection5152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5152<T> = UnionToIntersection5152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5152<T extends unknown[], V> = [...T, V];

type TuplifyUnion5152<T, L = LastOf5152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5152<TuplifyUnion5152<Exclude<T, L>>, L>;

type DeepPartial5152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5152<T[P]> }
  : T;

type Paths5152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5152<K, Paths5152<T[K], Prev5152[D]>> : never }[keyof T]
  : never;

type Prev5152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5152 {
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

type ConfigPaths5152 = Paths5152<NestedConfig5152>;

interface HeavyProps5152 {
  config: DeepPartial5152<NestedConfig5152>;
  path?: ConfigPaths5152;
}

const HeavyComponent5152 = memo(function HeavyComponent5152({ config }: HeavyProps5152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5152.displayName = 'HeavyComponent5152';
export default HeavyComponent5152;

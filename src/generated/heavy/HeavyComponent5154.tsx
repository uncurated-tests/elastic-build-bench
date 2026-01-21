'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5154<T> = T extends (infer U)[]
  ? DeepReadonlyArray5154<U>
  : T extends object
  ? DeepReadonlyObject5154<T>
  : T;

interface DeepReadonlyArray5154<T> extends ReadonlyArray<DeepReadonly5154<T>> {}

type DeepReadonlyObject5154<T> = {
  readonly [P in keyof T]: DeepReadonly5154<T[P]>;
};

type UnionToIntersection5154<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5154<T> = UnionToIntersection5154<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5154<T extends unknown[], V> = [...T, V];

type TuplifyUnion5154<T, L = LastOf5154<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5154<TuplifyUnion5154<Exclude<T, L>>, L>;

type DeepPartial5154<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5154<T[P]> }
  : T;

type Paths5154<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5154<K, Paths5154<T[K], Prev5154[D]>> : never }[keyof T]
  : never;

type Prev5154 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5154<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5154 {
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

type ConfigPaths5154 = Paths5154<NestedConfig5154>;

interface HeavyProps5154 {
  config: DeepPartial5154<NestedConfig5154>;
  path?: ConfigPaths5154;
}

const HeavyComponent5154 = memo(function HeavyComponent5154({ config }: HeavyProps5154) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5154) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5154 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5154: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5154.displayName = 'HeavyComponent5154';
export default HeavyComponent5154;

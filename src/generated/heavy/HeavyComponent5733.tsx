'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5733<T> = T extends (infer U)[]
  ? DeepReadonlyArray5733<U>
  : T extends object
  ? DeepReadonlyObject5733<T>
  : T;

interface DeepReadonlyArray5733<T> extends ReadonlyArray<DeepReadonly5733<T>> {}

type DeepReadonlyObject5733<T> = {
  readonly [P in keyof T]: DeepReadonly5733<T[P]>;
};

type UnionToIntersection5733<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5733<T> = UnionToIntersection5733<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5733<T extends unknown[], V> = [...T, V];

type TuplifyUnion5733<T, L = LastOf5733<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5733<TuplifyUnion5733<Exclude<T, L>>, L>;

type DeepPartial5733<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5733<T[P]> }
  : T;

type Paths5733<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5733<K, Paths5733<T[K], Prev5733[D]>> : never }[keyof T]
  : never;

type Prev5733 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5733<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5733 {
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

type ConfigPaths5733 = Paths5733<NestedConfig5733>;

interface HeavyProps5733 {
  config: DeepPartial5733<NestedConfig5733>;
  path?: ConfigPaths5733;
}

const HeavyComponent5733 = memo(function HeavyComponent5733({ config }: HeavyProps5733) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5733) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5733 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5733: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5733.displayName = 'HeavyComponent5733';
export default HeavyComponent5733;

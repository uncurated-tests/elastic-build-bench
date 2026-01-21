'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5652<T> = T extends (infer U)[]
  ? DeepReadonlyArray5652<U>
  : T extends object
  ? DeepReadonlyObject5652<T>
  : T;

interface DeepReadonlyArray5652<T> extends ReadonlyArray<DeepReadonly5652<T>> {}

type DeepReadonlyObject5652<T> = {
  readonly [P in keyof T]: DeepReadonly5652<T[P]>;
};

type UnionToIntersection5652<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5652<T> = UnionToIntersection5652<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5652<T extends unknown[], V> = [...T, V];

type TuplifyUnion5652<T, L = LastOf5652<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5652<TuplifyUnion5652<Exclude<T, L>>, L>;

type DeepPartial5652<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5652<T[P]> }
  : T;

type Paths5652<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5652<K, Paths5652<T[K], Prev5652[D]>> : never }[keyof T]
  : never;

type Prev5652 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5652<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5652 {
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

type ConfigPaths5652 = Paths5652<NestedConfig5652>;

interface HeavyProps5652 {
  config: DeepPartial5652<NestedConfig5652>;
  path?: ConfigPaths5652;
}

const HeavyComponent5652 = memo(function HeavyComponent5652({ config }: HeavyProps5652) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5652) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5652 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5652: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5652.displayName = 'HeavyComponent5652';
export default HeavyComponent5652;

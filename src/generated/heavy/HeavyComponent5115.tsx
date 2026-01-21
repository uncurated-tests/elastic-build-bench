'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5115<T> = T extends (infer U)[]
  ? DeepReadonlyArray5115<U>
  : T extends object
  ? DeepReadonlyObject5115<T>
  : T;

interface DeepReadonlyArray5115<T> extends ReadonlyArray<DeepReadonly5115<T>> {}

type DeepReadonlyObject5115<T> = {
  readonly [P in keyof T]: DeepReadonly5115<T[P]>;
};

type UnionToIntersection5115<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5115<T> = UnionToIntersection5115<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5115<T extends unknown[], V> = [...T, V];

type TuplifyUnion5115<T, L = LastOf5115<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5115<TuplifyUnion5115<Exclude<T, L>>, L>;

type DeepPartial5115<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5115<T[P]> }
  : T;

type Paths5115<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5115<K, Paths5115<T[K], Prev5115[D]>> : never }[keyof T]
  : never;

type Prev5115 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5115<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5115 {
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

type ConfigPaths5115 = Paths5115<NestedConfig5115>;

interface HeavyProps5115 {
  config: DeepPartial5115<NestedConfig5115>;
  path?: ConfigPaths5115;
}

const HeavyComponent5115 = memo(function HeavyComponent5115({ config }: HeavyProps5115) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5115) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5115 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5115: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5115.displayName = 'HeavyComponent5115';
export default HeavyComponent5115;

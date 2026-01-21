'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5272<T> = T extends (infer U)[]
  ? DeepReadonlyArray5272<U>
  : T extends object
  ? DeepReadonlyObject5272<T>
  : T;

interface DeepReadonlyArray5272<T> extends ReadonlyArray<DeepReadonly5272<T>> {}

type DeepReadonlyObject5272<T> = {
  readonly [P in keyof T]: DeepReadonly5272<T[P]>;
};

type UnionToIntersection5272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5272<T> = UnionToIntersection5272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5272<T extends unknown[], V> = [...T, V];

type TuplifyUnion5272<T, L = LastOf5272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5272<TuplifyUnion5272<Exclude<T, L>>, L>;

type DeepPartial5272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5272<T[P]> }
  : T;

type Paths5272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5272<K, Paths5272<T[K], Prev5272[D]>> : never }[keyof T]
  : never;

type Prev5272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5272 {
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

type ConfigPaths5272 = Paths5272<NestedConfig5272>;

interface HeavyProps5272 {
  config: DeepPartial5272<NestedConfig5272>;
  path?: ConfigPaths5272;
}

const HeavyComponent5272 = memo(function HeavyComponent5272({ config }: HeavyProps5272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5272.displayName = 'HeavyComponent5272';
export default HeavyComponent5272;

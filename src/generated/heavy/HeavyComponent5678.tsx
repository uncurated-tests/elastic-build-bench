'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5678<T> = T extends (infer U)[]
  ? DeepReadonlyArray5678<U>
  : T extends object
  ? DeepReadonlyObject5678<T>
  : T;

interface DeepReadonlyArray5678<T> extends ReadonlyArray<DeepReadonly5678<T>> {}

type DeepReadonlyObject5678<T> = {
  readonly [P in keyof T]: DeepReadonly5678<T[P]>;
};

type UnionToIntersection5678<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5678<T> = UnionToIntersection5678<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5678<T extends unknown[], V> = [...T, V];

type TuplifyUnion5678<T, L = LastOf5678<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5678<TuplifyUnion5678<Exclude<T, L>>, L>;

type DeepPartial5678<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5678<T[P]> }
  : T;

type Paths5678<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5678<K, Paths5678<T[K], Prev5678[D]>> : never }[keyof T]
  : never;

type Prev5678 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5678<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5678 {
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

type ConfigPaths5678 = Paths5678<NestedConfig5678>;

interface HeavyProps5678 {
  config: DeepPartial5678<NestedConfig5678>;
  path?: ConfigPaths5678;
}

const HeavyComponent5678 = memo(function HeavyComponent5678({ config }: HeavyProps5678) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5678) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5678 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5678: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5678.displayName = 'HeavyComponent5678';
export default HeavyComponent5678;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5728<T> = T extends (infer U)[]
  ? DeepReadonlyArray5728<U>
  : T extends object
  ? DeepReadonlyObject5728<T>
  : T;

interface DeepReadonlyArray5728<T> extends ReadonlyArray<DeepReadonly5728<T>> {}

type DeepReadonlyObject5728<T> = {
  readonly [P in keyof T]: DeepReadonly5728<T[P]>;
};

type UnionToIntersection5728<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5728<T> = UnionToIntersection5728<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5728<T extends unknown[], V> = [...T, V];

type TuplifyUnion5728<T, L = LastOf5728<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5728<TuplifyUnion5728<Exclude<T, L>>, L>;

type DeepPartial5728<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5728<T[P]> }
  : T;

type Paths5728<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5728<K, Paths5728<T[K], Prev5728[D]>> : never }[keyof T]
  : never;

type Prev5728 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5728<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5728 {
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

type ConfigPaths5728 = Paths5728<NestedConfig5728>;

interface HeavyProps5728 {
  config: DeepPartial5728<NestedConfig5728>;
  path?: ConfigPaths5728;
}

const HeavyComponent5728 = memo(function HeavyComponent5728({ config }: HeavyProps5728) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5728) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5728 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5728: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5728.displayName = 'HeavyComponent5728';
export default HeavyComponent5728;

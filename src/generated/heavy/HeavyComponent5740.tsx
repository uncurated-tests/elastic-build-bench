'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5740<T> = T extends (infer U)[]
  ? DeepReadonlyArray5740<U>
  : T extends object
  ? DeepReadonlyObject5740<T>
  : T;

interface DeepReadonlyArray5740<T> extends ReadonlyArray<DeepReadonly5740<T>> {}

type DeepReadonlyObject5740<T> = {
  readonly [P in keyof T]: DeepReadonly5740<T[P]>;
};

type UnionToIntersection5740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5740<T> = UnionToIntersection5740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5740<T extends unknown[], V> = [...T, V];

type TuplifyUnion5740<T, L = LastOf5740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5740<TuplifyUnion5740<Exclude<T, L>>, L>;

type DeepPartial5740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5740<T[P]> }
  : T;

type Paths5740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5740<K, Paths5740<T[K], Prev5740[D]>> : never }[keyof T]
  : never;

type Prev5740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5740 {
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

type ConfigPaths5740 = Paths5740<NestedConfig5740>;

interface HeavyProps5740 {
  config: DeepPartial5740<NestedConfig5740>;
  path?: ConfigPaths5740;
}

const HeavyComponent5740 = memo(function HeavyComponent5740({ config }: HeavyProps5740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5740.displayName = 'HeavyComponent5740';
export default HeavyComponent5740;

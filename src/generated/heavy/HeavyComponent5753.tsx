'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5753<T> = T extends (infer U)[]
  ? DeepReadonlyArray5753<U>
  : T extends object
  ? DeepReadonlyObject5753<T>
  : T;

interface DeepReadonlyArray5753<T> extends ReadonlyArray<DeepReadonly5753<T>> {}

type DeepReadonlyObject5753<T> = {
  readonly [P in keyof T]: DeepReadonly5753<T[P]>;
};

type UnionToIntersection5753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5753<T> = UnionToIntersection5753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5753<T extends unknown[], V> = [...T, V];

type TuplifyUnion5753<T, L = LastOf5753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5753<TuplifyUnion5753<Exclude<T, L>>, L>;

type DeepPartial5753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5753<T[P]> }
  : T;

type Paths5753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5753<K, Paths5753<T[K], Prev5753[D]>> : never }[keyof T]
  : never;

type Prev5753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5753 {
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

type ConfigPaths5753 = Paths5753<NestedConfig5753>;

interface HeavyProps5753 {
  config: DeepPartial5753<NestedConfig5753>;
  path?: ConfigPaths5753;
}

const HeavyComponent5753 = memo(function HeavyComponent5753({ config }: HeavyProps5753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5753.displayName = 'HeavyComponent5753';
export default HeavyComponent5753;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5465<T> = T extends (infer U)[]
  ? DeepReadonlyArray5465<U>
  : T extends object
  ? DeepReadonlyObject5465<T>
  : T;

interface DeepReadonlyArray5465<T> extends ReadonlyArray<DeepReadonly5465<T>> {}

type DeepReadonlyObject5465<T> = {
  readonly [P in keyof T]: DeepReadonly5465<T[P]>;
};

type UnionToIntersection5465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5465<T> = UnionToIntersection5465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5465<T extends unknown[], V> = [...T, V];

type TuplifyUnion5465<T, L = LastOf5465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5465<TuplifyUnion5465<Exclude<T, L>>, L>;

type DeepPartial5465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5465<T[P]> }
  : T;

type Paths5465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5465<K, Paths5465<T[K], Prev5465[D]>> : never }[keyof T]
  : never;

type Prev5465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5465 {
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

type ConfigPaths5465 = Paths5465<NestedConfig5465>;

interface HeavyProps5465 {
  config: DeepPartial5465<NestedConfig5465>;
  path?: ConfigPaths5465;
}

const HeavyComponent5465 = memo(function HeavyComponent5465({ config }: HeavyProps5465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5465.displayName = 'HeavyComponent5465';
export default HeavyComponent5465;

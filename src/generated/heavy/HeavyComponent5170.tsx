'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5170<T> = T extends (infer U)[]
  ? DeepReadonlyArray5170<U>
  : T extends object
  ? DeepReadonlyObject5170<T>
  : T;

interface DeepReadonlyArray5170<T> extends ReadonlyArray<DeepReadonly5170<T>> {}

type DeepReadonlyObject5170<T> = {
  readonly [P in keyof T]: DeepReadonly5170<T[P]>;
};

type UnionToIntersection5170<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5170<T> = UnionToIntersection5170<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5170<T extends unknown[], V> = [...T, V];

type TuplifyUnion5170<T, L = LastOf5170<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5170<TuplifyUnion5170<Exclude<T, L>>, L>;

type DeepPartial5170<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5170<T[P]> }
  : T;

type Paths5170<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5170<K, Paths5170<T[K], Prev5170[D]>> : never }[keyof T]
  : never;

type Prev5170 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5170<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5170 {
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

type ConfigPaths5170 = Paths5170<NestedConfig5170>;

interface HeavyProps5170 {
  config: DeepPartial5170<NestedConfig5170>;
  path?: ConfigPaths5170;
}

const HeavyComponent5170 = memo(function HeavyComponent5170({ config }: HeavyProps5170) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5170) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5170 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5170: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5170.displayName = 'HeavyComponent5170';
export default HeavyComponent5170;

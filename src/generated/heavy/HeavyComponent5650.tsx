'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5650<T> = T extends (infer U)[]
  ? DeepReadonlyArray5650<U>
  : T extends object
  ? DeepReadonlyObject5650<T>
  : T;

interface DeepReadonlyArray5650<T> extends ReadonlyArray<DeepReadonly5650<T>> {}

type DeepReadonlyObject5650<T> = {
  readonly [P in keyof T]: DeepReadonly5650<T[P]>;
};

type UnionToIntersection5650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5650<T> = UnionToIntersection5650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5650<T extends unknown[], V> = [...T, V];

type TuplifyUnion5650<T, L = LastOf5650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5650<TuplifyUnion5650<Exclude<T, L>>, L>;

type DeepPartial5650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5650<T[P]> }
  : T;

type Paths5650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5650<K, Paths5650<T[K], Prev5650[D]>> : never }[keyof T]
  : never;

type Prev5650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5650 {
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

type ConfigPaths5650 = Paths5650<NestedConfig5650>;

interface HeavyProps5650 {
  config: DeepPartial5650<NestedConfig5650>;
  path?: ConfigPaths5650;
}

const HeavyComponent5650 = memo(function HeavyComponent5650({ config }: HeavyProps5650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5650.displayName = 'HeavyComponent5650';
export default HeavyComponent5650;

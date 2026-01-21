'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5770<T> = T extends (infer U)[]
  ? DeepReadonlyArray5770<U>
  : T extends object
  ? DeepReadonlyObject5770<T>
  : T;

interface DeepReadonlyArray5770<T> extends ReadonlyArray<DeepReadonly5770<T>> {}

type DeepReadonlyObject5770<T> = {
  readonly [P in keyof T]: DeepReadonly5770<T[P]>;
};

type UnionToIntersection5770<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5770<T> = UnionToIntersection5770<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5770<T extends unknown[], V> = [...T, V];

type TuplifyUnion5770<T, L = LastOf5770<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5770<TuplifyUnion5770<Exclude<T, L>>, L>;

type DeepPartial5770<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5770<T[P]> }
  : T;

type Paths5770<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5770<K, Paths5770<T[K], Prev5770[D]>> : never }[keyof T]
  : never;

type Prev5770 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5770<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5770 {
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

type ConfigPaths5770 = Paths5770<NestedConfig5770>;

interface HeavyProps5770 {
  config: DeepPartial5770<NestedConfig5770>;
  path?: ConfigPaths5770;
}

const HeavyComponent5770 = memo(function HeavyComponent5770({ config }: HeavyProps5770) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5770) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5770 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5770: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5770.displayName = 'HeavyComponent5770';
export default HeavyComponent5770;

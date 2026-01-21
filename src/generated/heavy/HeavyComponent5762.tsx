'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5762<T> = T extends (infer U)[]
  ? DeepReadonlyArray5762<U>
  : T extends object
  ? DeepReadonlyObject5762<T>
  : T;

interface DeepReadonlyArray5762<T> extends ReadonlyArray<DeepReadonly5762<T>> {}

type DeepReadonlyObject5762<T> = {
  readonly [P in keyof T]: DeepReadonly5762<T[P]>;
};

type UnionToIntersection5762<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5762<T> = UnionToIntersection5762<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5762<T extends unknown[], V> = [...T, V];

type TuplifyUnion5762<T, L = LastOf5762<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5762<TuplifyUnion5762<Exclude<T, L>>, L>;

type DeepPartial5762<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5762<T[P]> }
  : T;

type Paths5762<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5762<K, Paths5762<T[K], Prev5762[D]>> : never }[keyof T]
  : never;

type Prev5762 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5762<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5762 {
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

type ConfigPaths5762 = Paths5762<NestedConfig5762>;

interface HeavyProps5762 {
  config: DeepPartial5762<NestedConfig5762>;
  path?: ConfigPaths5762;
}

const HeavyComponent5762 = memo(function HeavyComponent5762({ config }: HeavyProps5762) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5762) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5762 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5762: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5762.displayName = 'HeavyComponent5762';
export default HeavyComponent5762;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5023<T> = T extends (infer U)[]
  ? DeepReadonlyArray5023<U>
  : T extends object
  ? DeepReadonlyObject5023<T>
  : T;

interface DeepReadonlyArray5023<T> extends ReadonlyArray<DeepReadonly5023<T>> {}

type DeepReadonlyObject5023<T> = {
  readonly [P in keyof T]: DeepReadonly5023<T[P]>;
};

type UnionToIntersection5023<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5023<T> = UnionToIntersection5023<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5023<T extends unknown[], V> = [...T, V];

type TuplifyUnion5023<T, L = LastOf5023<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5023<TuplifyUnion5023<Exclude<T, L>>, L>;

type DeepPartial5023<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5023<T[P]> }
  : T;

type Paths5023<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5023<K, Paths5023<T[K], Prev5023[D]>> : never }[keyof T]
  : never;

type Prev5023 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5023<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5023 {
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

type ConfigPaths5023 = Paths5023<NestedConfig5023>;

interface HeavyProps5023 {
  config: DeepPartial5023<NestedConfig5023>;
  path?: ConfigPaths5023;
}

const HeavyComponent5023 = memo(function HeavyComponent5023({ config }: HeavyProps5023) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5023) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5023 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5023: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5023.displayName = 'HeavyComponent5023';
export default HeavyComponent5023;

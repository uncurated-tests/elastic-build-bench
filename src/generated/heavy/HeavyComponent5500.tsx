'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5500<T> = T extends (infer U)[]
  ? DeepReadonlyArray5500<U>
  : T extends object
  ? DeepReadonlyObject5500<T>
  : T;

interface DeepReadonlyArray5500<T> extends ReadonlyArray<DeepReadonly5500<T>> {}

type DeepReadonlyObject5500<T> = {
  readonly [P in keyof T]: DeepReadonly5500<T[P]>;
};

type UnionToIntersection5500<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5500<T> = UnionToIntersection5500<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5500<T extends unknown[], V> = [...T, V];

type TuplifyUnion5500<T, L = LastOf5500<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5500<TuplifyUnion5500<Exclude<T, L>>, L>;

type DeepPartial5500<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5500<T[P]> }
  : T;

type Paths5500<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5500<K, Paths5500<T[K], Prev5500[D]>> : never }[keyof T]
  : never;

type Prev5500 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5500<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5500 {
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

type ConfigPaths5500 = Paths5500<NestedConfig5500>;

interface HeavyProps5500 {
  config: DeepPartial5500<NestedConfig5500>;
  path?: ConfigPaths5500;
}

const HeavyComponent5500 = memo(function HeavyComponent5500({ config }: HeavyProps5500) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5500) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5500 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5500: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5500.displayName = 'HeavyComponent5500';
export default HeavyComponent5500;

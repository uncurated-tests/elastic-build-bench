'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5296<T> = T extends (infer U)[]
  ? DeepReadonlyArray5296<U>
  : T extends object
  ? DeepReadonlyObject5296<T>
  : T;

interface DeepReadonlyArray5296<T> extends ReadonlyArray<DeepReadonly5296<T>> {}

type DeepReadonlyObject5296<T> = {
  readonly [P in keyof T]: DeepReadonly5296<T[P]>;
};

type UnionToIntersection5296<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5296<T> = UnionToIntersection5296<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5296<T extends unknown[], V> = [...T, V];

type TuplifyUnion5296<T, L = LastOf5296<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5296<TuplifyUnion5296<Exclude<T, L>>, L>;

type DeepPartial5296<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5296<T[P]> }
  : T;

type Paths5296<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5296<K, Paths5296<T[K], Prev5296[D]>> : never }[keyof T]
  : never;

type Prev5296 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5296<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5296 {
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

type ConfigPaths5296 = Paths5296<NestedConfig5296>;

interface HeavyProps5296 {
  config: DeepPartial5296<NestedConfig5296>;
  path?: ConfigPaths5296;
}

const HeavyComponent5296 = memo(function HeavyComponent5296({ config }: HeavyProps5296) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5296) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5296 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5296: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5296.displayName = 'HeavyComponent5296';
export default HeavyComponent5296;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5946<T> = T extends (infer U)[]
  ? DeepReadonlyArray5946<U>
  : T extends object
  ? DeepReadonlyObject5946<T>
  : T;

interface DeepReadonlyArray5946<T> extends ReadonlyArray<DeepReadonly5946<T>> {}

type DeepReadonlyObject5946<T> = {
  readonly [P in keyof T]: DeepReadonly5946<T[P]>;
};

type UnionToIntersection5946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5946<T> = UnionToIntersection5946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5946<T extends unknown[], V> = [...T, V];

type TuplifyUnion5946<T, L = LastOf5946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5946<TuplifyUnion5946<Exclude<T, L>>, L>;

type DeepPartial5946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5946<T[P]> }
  : T;

type Paths5946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5946<K, Paths5946<T[K], Prev5946[D]>> : never }[keyof T]
  : never;

type Prev5946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5946 {
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

type ConfigPaths5946 = Paths5946<NestedConfig5946>;

interface HeavyProps5946 {
  config: DeepPartial5946<NestedConfig5946>;
  path?: ConfigPaths5946;
}

const HeavyComponent5946 = memo(function HeavyComponent5946({ config }: HeavyProps5946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5946.displayName = 'HeavyComponent5946';
export default HeavyComponent5946;

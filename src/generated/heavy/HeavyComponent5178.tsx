'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5178<T> = T extends (infer U)[]
  ? DeepReadonlyArray5178<U>
  : T extends object
  ? DeepReadonlyObject5178<T>
  : T;

interface DeepReadonlyArray5178<T> extends ReadonlyArray<DeepReadonly5178<T>> {}

type DeepReadonlyObject5178<T> = {
  readonly [P in keyof T]: DeepReadonly5178<T[P]>;
};

type UnionToIntersection5178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5178<T> = UnionToIntersection5178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5178<T extends unknown[], V> = [...T, V];

type TuplifyUnion5178<T, L = LastOf5178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5178<TuplifyUnion5178<Exclude<T, L>>, L>;

type DeepPartial5178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5178<T[P]> }
  : T;

type Paths5178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5178<K, Paths5178<T[K], Prev5178[D]>> : never }[keyof T]
  : never;

type Prev5178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5178 {
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

type ConfigPaths5178 = Paths5178<NestedConfig5178>;

interface HeavyProps5178 {
  config: DeepPartial5178<NestedConfig5178>;
  path?: ConfigPaths5178;
}

const HeavyComponent5178 = memo(function HeavyComponent5178({ config }: HeavyProps5178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5178.displayName = 'HeavyComponent5178';
export default HeavyComponent5178;

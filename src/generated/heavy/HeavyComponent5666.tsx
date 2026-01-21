'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5666<T> = T extends (infer U)[]
  ? DeepReadonlyArray5666<U>
  : T extends object
  ? DeepReadonlyObject5666<T>
  : T;

interface DeepReadonlyArray5666<T> extends ReadonlyArray<DeepReadonly5666<T>> {}

type DeepReadonlyObject5666<T> = {
  readonly [P in keyof T]: DeepReadonly5666<T[P]>;
};

type UnionToIntersection5666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5666<T> = UnionToIntersection5666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5666<T extends unknown[], V> = [...T, V];

type TuplifyUnion5666<T, L = LastOf5666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5666<TuplifyUnion5666<Exclude<T, L>>, L>;

type DeepPartial5666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5666<T[P]> }
  : T;

type Paths5666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5666<K, Paths5666<T[K], Prev5666[D]>> : never }[keyof T]
  : never;

type Prev5666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5666 {
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

type ConfigPaths5666 = Paths5666<NestedConfig5666>;

interface HeavyProps5666 {
  config: DeepPartial5666<NestedConfig5666>;
  path?: ConfigPaths5666;
}

const HeavyComponent5666 = memo(function HeavyComponent5666({ config }: HeavyProps5666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5666.displayName = 'HeavyComponent5666';
export default HeavyComponent5666;

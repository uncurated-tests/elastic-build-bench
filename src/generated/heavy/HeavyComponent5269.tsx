'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5269<T> = T extends (infer U)[]
  ? DeepReadonlyArray5269<U>
  : T extends object
  ? DeepReadonlyObject5269<T>
  : T;

interface DeepReadonlyArray5269<T> extends ReadonlyArray<DeepReadonly5269<T>> {}

type DeepReadonlyObject5269<T> = {
  readonly [P in keyof T]: DeepReadonly5269<T[P]>;
};

type UnionToIntersection5269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5269<T> = UnionToIntersection5269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5269<T extends unknown[], V> = [...T, V];

type TuplifyUnion5269<T, L = LastOf5269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5269<TuplifyUnion5269<Exclude<T, L>>, L>;

type DeepPartial5269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5269<T[P]> }
  : T;

type Paths5269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5269<K, Paths5269<T[K], Prev5269[D]>> : never }[keyof T]
  : never;

type Prev5269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5269 {
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

type ConfigPaths5269 = Paths5269<NestedConfig5269>;

interface HeavyProps5269 {
  config: DeepPartial5269<NestedConfig5269>;
  path?: ConfigPaths5269;
}

const HeavyComponent5269 = memo(function HeavyComponent5269({ config }: HeavyProps5269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5269.displayName = 'HeavyComponent5269';
export default HeavyComponent5269;

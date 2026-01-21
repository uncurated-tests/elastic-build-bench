'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5915<T> = T extends (infer U)[]
  ? DeepReadonlyArray5915<U>
  : T extends object
  ? DeepReadonlyObject5915<T>
  : T;

interface DeepReadonlyArray5915<T> extends ReadonlyArray<DeepReadonly5915<T>> {}

type DeepReadonlyObject5915<T> = {
  readonly [P in keyof T]: DeepReadonly5915<T[P]>;
};

type UnionToIntersection5915<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5915<T> = UnionToIntersection5915<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5915<T extends unknown[], V> = [...T, V];

type TuplifyUnion5915<T, L = LastOf5915<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5915<TuplifyUnion5915<Exclude<T, L>>, L>;

type DeepPartial5915<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5915<T[P]> }
  : T;

type Paths5915<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5915<K, Paths5915<T[K], Prev5915[D]>> : never }[keyof T]
  : never;

type Prev5915 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5915<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5915 {
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

type ConfigPaths5915 = Paths5915<NestedConfig5915>;

interface HeavyProps5915 {
  config: DeepPartial5915<NestedConfig5915>;
  path?: ConfigPaths5915;
}

const HeavyComponent5915 = memo(function HeavyComponent5915({ config }: HeavyProps5915) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5915) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5915 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5915: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5915.displayName = 'HeavyComponent5915';
export default HeavyComponent5915;

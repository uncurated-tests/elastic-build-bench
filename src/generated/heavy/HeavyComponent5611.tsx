'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5611<T> = T extends (infer U)[]
  ? DeepReadonlyArray5611<U>
  : T extends object
  ? DeepReadonlyObject5611<T>
  : T;

interface DeepReadonlyArray5611<T> extends ReadonlyArray<DeepReadonly5611<T>> {}

type DeepReadonlyObject5611<T> = {
  readonly [P in keyof T]: DeepReadonly5611<T[P]>;
};

type UnionToIntersection5611<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5611<T> = UnionToIntersection5611<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5611<T extends unknown[], V> = [...T, V];

type TuplifyUnion5611<T, L = LastOf5611<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5611<TuplifyUnion5611<Exclude<T, L>>, L>;

type DeepPartial5611<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5611<T[P]> }
  : T;

type Paths5611<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5611<K, Paths5611<T[K], Prev5611[D]>> : never }[keyof T]
  : never;

type Prev5611 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5611<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5611 {
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

type ConfigPaths5611 = Paths5611<NestedConfig5611>;

interface HeavyProps5611 {
  config: DeepPartial5611<NestedConfig5611>;
  path?: ConfigPaths5611;
}

const HeavyComponent5611 = memo(function HeavyComponent5611({ config }: HeavyProps5611) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5611) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5611 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5611: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5611.displayName = 'HeavyComponent5611';
export default HeavyComponent5611;

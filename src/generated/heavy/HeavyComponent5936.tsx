'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5936<T> = T extends (infer U)[]
  ? DeepReadonlyArray5936<U>
  : T extends object
  ? DeepReadonlyObject5936<T>
  : T;

interface DeepReadonlyArray5936<T> extends ReadonlyArray<DeepReadonly5936<T>> {}

type DeepReadonlyObject5936<T> = {
  readonly [P in keyof T]: DeepReadonly5936<T[P]>;
};

type UnionToIntersection5936<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5936<T> = UnionToIntersection5936<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5936<T extends unknown[], V> = [...T, V];

type TuplifyUnion5936<T, L = LastOf5936<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5936<TuplifyUnion5936<Exclude<T, L>>, L>;

type DeepPartial5936<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5936<T[P]> }
  : T;

type Paths5936<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5936<K, Paths5936<T[K], Prev5936[D]>> : never }[keyof T]
  : never;

type Prev5936 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5936<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5936 {
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

type ConfigPaths5936 = Paths5936<NestedConfig5936>;

interface HeavyProps5936 {
  config: DeepPartial5936<NestedConfig5936>;
  path?: ConfigPaths5936;
}

const HeavyComponent5936 = memo(function HeavyComponent5936({ config }: HeavyProps5936) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5936) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5936 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5936: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5936.displayName = 'HeavyComponent5936';
export default HeavyComponent5936;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5854<T> = T extends (infer U)[]
  ? DeepReadonlyArray5854<U>
  : T extends object
  ? DeepReadonlyObject5854<T>
  : T;

interface DeepReadonlyArray5854<T> extends ReadonlyArray<DeepReadonly5854<T>> {}

type DeepReadonlyObject5854<T> = {
  readonly [P in keyof T]: DeepReadonly5854<T[P]>;
};

type UnionToIntersection5854<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5854<T> = UnionToIntersection5854<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5854<T extends unknown[], V> = [...T, V];

type TuplifyUnion5854<T, L = LastOf5854<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5854<TuplifyUnion5854<Exclude<T, L>>, L>;

type DeepPartial5854<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5854<T[P]> }
  : T;

type Paths5854<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5854<K, Paths5854<T[K], Prev5854[D]>> : never }[keyof T]
  : never;

type Prev5854 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5854<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5854 {
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

type ConfigPaths5854 = Paths5854<NestedConfig5854>;

interface HeavyProps5854 {
  config: DeepPartial5854<NestedConfig5854>;
  path?: ConfigPaths5854;
}

const HeavyComponent5854 = memo(function HeavyComponent5854({ config }: HeavyProps5854) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5854) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5854 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5854: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5854.displayName = 'HeavyComponent5854';
export default HeavyComponent5854;

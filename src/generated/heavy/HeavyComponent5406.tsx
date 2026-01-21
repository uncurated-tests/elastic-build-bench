'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5406<T> = T extends (infer U)[]
  ? DeepReadonlyArray5406<U>
  : T extends object
  ? DeepReadonlyObject5406<T>
  : T;

interface DeepReadonlyArray5406<T> extends ReadonlyArray<DeepReadonly5406<T>> {}

type DeepReadonlyObject5406<T> = {
  readonly [P in keyof T]: DeepReadonly5406<T[P]>;
};

type UnionToIntersection5406<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5406<T> = UnionToIntersection5406<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5406<T extends unknown[], V> = [...T, V];

type TuplifyUnion5406<T, L = LastOf5406<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5406<TuplifyUnion5406<Exclude<T, L>>, L>;

type DeepPartial5406<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5406<T[P]> }
  : T;

type Paths5406<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5406<K, Paths5406<T[K], Prev5406[D]>> : never }[keyof T]
  : never;

type Prev5406 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5406<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5406 {
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

type ConfigPaths5406 = Paths5406<NestedConfig5406>;

interface HeavyProps5406 {
  config: DeepPartial5406<NestedConfig5406>;
  path?: ConfigPaths5406;
}

const HeavyComponent5406 = memo(function HeavyComponent5406({ config }: HeavyProps5406) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5406) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5406 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5406: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5406.displayName = 'HeavyComponent5406';
export default HeavyComponent5406;

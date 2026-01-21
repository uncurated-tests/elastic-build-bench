'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5657<T> = T extends (infer U)[]
  ? DeepReadonlyArray5657<U>
  : T extends object
  ? DeepReadonlyObject5657<T>
  : T;

interface DeepReadonlyArray5657<T> extends ReadonlyArray<DeepReadonly5657<T>> {}

type DeepReadonlyObject5657<T> = {
  readonly [P in keyof T]: DeepReadonly5657<T[P]>;
};

type UnionToIntersection5657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5657<T> = UnionToIntersection5657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5657<T extends unknown[], V> = [...T, V];

type TuplifyUnion5657<T, L = LastOf5657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5657<TuplifyUnion5657<Exclude<T, L>>, L>;

type DeepPartial5657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5657<T[P]> }
  : T;

type Paths5657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5657<K, Paths5657<T[K], Prev5657[D]>> : never }[keyof T]
  : never;

type Prev5657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5657 {
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

type ConfigPaths5657 = Paths5657<NestedConfig5657>;

interface HeavyProps5657 {
  config: DeepPartial5657<NestedConfig5657>;
  path?: ConfigPaths5657;
}

const HeavyComponent5657 = memo(function HeavyComponent5657({ config }: HeavyProps5657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5657.displayName = 'HeavyComponent5657';
export default HeavyComponent5657;

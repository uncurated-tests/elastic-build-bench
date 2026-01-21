'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5140<T> = T extends (infer U)[]
  ? DeepReadonlyArray5140<U>
  : T extends object
  ? DeepReadonlyObject5140<T>
  : T;

interface DeepReadonlyArray5140<T> extends ReadonlyArray<DeepReadonly5140<T>> {}

type DeepReadonlyObject5140<T> = {
  readonly [P in keyof T]: DeepReadonly5140<T[P]>;
};

type UnionToIntersection5140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5140<T> = UnionToIntersection5140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5140<T extends unknown[], V> = [...T, V];

type TuplifyUnion5140<T, L = LastOf5140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5140<TuplifyUnion5140<Exclude<T, L>>, L>;

type DeepPartial5140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5140<T[P]> }
  : T;

type Paths5140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5140<K, Paths5140<T[K], Prev5140[D]>> : never }[keyof T]
  : never;

type Prev5140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5140 {
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

type ConfigPaths5140 = Paths5140<NestedConfig5140>;

interface HeavyProps5140 {
  config: DeepPartial5140<NestedConfig5140>;
  path?: ConfigPaths5140;
}

const HeavyComponent5140 = memo(function HeavyComponent5140({ config }: HeavyProps5140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5140.displayName = 'HeavyComponent5140';
export default HeavyComponent5140;

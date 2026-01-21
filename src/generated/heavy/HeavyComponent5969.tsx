'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5969<T> = T extends (infer U)[]
  ? DeepReadonlyArray5969<U>
  : T extends object
  ? DeepReadonlyObject5969<T>
  : T;

interface DeepReadonlyArray5969<T> extends ReadonlyArray<DeepReadonly5969<T>> {}

type DeepReadonlyObject5969<T> = {
  readonly [P in keyof T]: DeepReadonly5969<T[P]>;
};

type UnionToIntersection5969<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5969<T> = UnionToIntersection5969<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5969<T extends unknown[], V> = [...T, V];

type TuplifyUnion5969<T, L = LastOf5969<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5969<TuplifyUnion5969<Exclude<T, L>>, L>;

type DeepPartial5969<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5969<T[P]> }
  : T;

type Paths5969<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5969<K, Paths5969<T[K], Prev5969[D]>> : never }[keyof T]
  : never;

type Prev5969 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5969<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5969 {
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

type ConfigPaths5969 = Paths5969<NestedConfig5969>;

interface HeavyProps5969 {
  config: DeepPartial5969<NestedConfig5969>;
  path?: ConfigPaths5969;
}

const HeavyComponent5969 = memo(function HeavyComponent5969({ config }: HeavyProps5969) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5969) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5969 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5969: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5969.displayName = 'HeavyComponent5969';
export default HeavyComponent5969;

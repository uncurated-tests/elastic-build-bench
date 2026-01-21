'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5120<T> = T extends (infer U)[]
  ? DeepReadonlyArray5120<U>
  : T extends object
  ? DeepReadonlyObject5120<T>
  : T;

interface DeepReadonlyArray5120<T> extends ReadonlyArray<DeepReadonly5120<T>> {}

type DeepReadonlyObject5120<T> = {
  readonly [P in keyof T]: DeepReadonly5120<T[P]>;
};

type UnionToIntersection5120<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5120<T> = UnionToIntersection5120<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5120<T extends unknown[], V> = [...T, V];

type TuplifyUnion5120<T, L = LastOf5120<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5120<TuplifyUnion5120<Exclude<T, L>>, L>;

type DeepPartial5120<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5120<T[P]> }
  : T;

type Paths5120<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5120<K, Paths5120<T[K], Prev5120[D]>> : never }[keyof T]
  : never;

type Prev5120 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5120<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5120 {
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

type ConfigPaths5120 = Paths5120<NestedConfig5120>;

interface HeavyProps5120 {
  config: DeepPartial5120<NestedConfig5120>;
  path?: ConfigPaths5120;
}

const HeavyComponent5120 = memo(function HeavyComponent5120({ config }: HeavyProps5120) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5120) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5120 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5120: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5120.displayName = 'HeavyComponent5120';
export default HeavyComponent5120;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5701<T> = T extends (infer U)[]
  ? DeepReadonlyArray5701<U>
  : T extends object
  ? DeepReadonlyObject5701<T>
  : T;

interface DeepReadonlyArray5701<T> extends ReadonlyArray<DeepReadonly5701<T>> {}

type DeepReadonlyObject5701<T> = {
  readonly [P in keyof T]: DeepReadonly5701<T[P]>;
};

type UnionToIntersection5701<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5701<T> = UnionToIntersection5701<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5701<T extends unknown[], V> = [...T, V];

type TuplifyUnion5701<T, L = LastOf5701<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5701<TuplifyUnion5701<Exclude<T, L>>, L>;

type DeepPartial5701<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5701<T[P]> }
  : T;

type Paths5701<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5701<K, Paths5701<T[K], Prev5701[D]>> : never }[keyof T]
  : never;

type Prev5701 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5701<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5701 {
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

type ConfigPaths5701 = Paths5701<NestedConfig5701>;

interface HeavyProps5701 {
  config: DeepPartial5701<NestedConfig5701>;
  path?: ConfigPaths5701;
}

const HeavyComponent5701 = memo(function HeavyComponent5701({ config }: HeavyProps5701) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5701) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5701 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5701: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5701.displayName = 'HeavyComponent5701';
export default HeavyComponent5701;

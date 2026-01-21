'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5287<T> = T extends (infer U)[]
  ? DeepReadonlyArray5287<U>
  : T extends object
  ? DeepReadonlyObject5287<T>
  : T;

interface DeepReadonlyArray5287<T> extends ReadonlyArray<DeepReadonly5287<T>> {}

type DeepReadonlyObject5287<T> = {
  readonly [P in keyof T]: DeepReadonly5287<T[P]>;
};

type UnionToIntersection5287<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5287<T> = UnionToIntersection5287<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5287<T extends unknown[], V> = [...T, V];

type TuplifyUnion5287<T, L = LastOf5287<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5287<TuplifyUnion5287<Exclude<T, L>>, L>;

type DeepPartial5287<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5287<T[P]> }
  : T;

type Paths5287<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5287<K, Paths5287<T[K], Prev5287[D]>> : never }[keyof T]
  : never;

type Prev5287 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5287<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5287 {
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

type ConfigPaths5287 = Paths5287<NestedConfig5287>;

interface HeavyProps5287 {
  config: DeepPartial5287<NestedConfig5287>;
  path?: ConfigPaths5287;
}

const HeavyComponent5287 = memo(function HeavyComponent5287({ config }: HeavyProps5287) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5287) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5287 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5287: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5287.displayName = 'HeavyComponent5287';
export default HeavyComponent5287;

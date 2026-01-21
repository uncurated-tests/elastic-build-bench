'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5483<T> = T extends (infer U)[]
  ? DeepReadonlyArray5483<U>
  : T extends object
  ? DeepReadonlyObject5483<T>
  : T;

interface DeepReadonlyArray5483<T> extends ReadonlyArray<DeepReadonly5483<T>> {}

type DeepReadonlyObject5483<T> = {
  readonly [P in keyof T]: DeepReadonly5483<T[P]>;
};

type UnionToIntersection5483<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5483<T> = UnionToIntersection5483<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5483<T extends unknown[], V> = [...T, V];

type TuplifyUnion5483<T, L = LastOf5483<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5483<TuplifyUnion5483<Exclude<T, L>>, L>;

type DeepPartial5483<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5483<T[P]> }
  : T;

type Paths5483<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5483<K, Paths5483<T[K], Prev5483[D]>> : never }[keyof T]
  : never;

type Prev5483 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5483<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5483 {
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

type ConfigPaths5483 = Paths5483<NestedConfig5483>;

interface HeavyProps5483 {
  config: DeepPartial5483<NestedConfig5483>;
  path?: ConfigPaths5483;
}

const HeavyComponent5483 = memo(function HeavyComponent5483({ config }: HeavyProps5483) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5483) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5483 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5483: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5483.displayName = 'HeavyComponent5483';
export default HeavyComponent5483;

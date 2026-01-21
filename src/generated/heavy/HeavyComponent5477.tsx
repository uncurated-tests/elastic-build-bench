'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5477<T> = T extends (infer U)[]
  ? DeepReadonlyArray5477<U>
  : T extends object
  ? DeepReadonlyObject5477<T>
  : T;

interface DeepReadonlyArray5477<T> extends ReadonlyArray<DeepReadonly5477<T>> {}

type DeepReadonlyObject5477<T> = {
  readonly [P in keyof T]: DeepReadonly5477<T[P]>;
};

type UnionToIntersection5477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5477<T> = UnionToIntersection5477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5477<T extends unknown[], V> = [...T, V];

type TuplifyUnion5477<T, L = LastOf5477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5477<TuplifyUnion5477<Exclude<T, L>>, L>;

type DeepPartial5477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5477<T[P]> }
  : T;

type Paths5477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5477<K, Paths5477<T[K], Prev5477[D]>> : never }[keyof T]
  : never;

type Prev5477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5477 {
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

type ConfigPaths5477 = Paths5477<NestedConfig5477>;

interface HeavyProps5477 {
  config: DeepPartial5477<NestedConfig5477>;
  path?: ConfigPaths5477;
}

const HeavyComponent5477 = memo(function HeavyComponent5477({ config }: HeavyProps5477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5477.displayName = 'HeavyComponent5477';
export default HeavyComponent5477;

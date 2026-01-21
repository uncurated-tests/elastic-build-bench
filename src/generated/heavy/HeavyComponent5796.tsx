'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5796<T> = T extends (infer U)[]
  ? DeepReadonlyArray5796<U>
  : T extends object
  ? DeepReadonlyObject5796<T>
  : T;

interface DeepReadonlyArray5796<T> extends ReadonlyArray<DeepReadonly5796<T>> {}

type DeepReadonlyObject5796<T> = {
  readonly [P in keyof T]: DeepReadonly5796<T[P]>;
};

type UnionToIntersection5796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5796<T> = UnionToIntersection5796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5796<T extends unknown[], V> = [...T, V];

type TuplifyUnion5796<T, L = LastOf5796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5796<TuplifyUnion5796<Exclude<T, L>>, L>;

type DeepPartial5796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5796<T[P]> }
  : T;

type Paths5796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5796<K, Paths5796<T[K], Prev5796[D]>> : never }[keyof T]
  : never;

type Prev5796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5796 {
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

type ConfigPaths5796 = Paths5796<NestedConfig5796>;

interface HeavyProps5796 {
  config: DeepPartial5796<NestedConfig5796>;
  path?: ConfigPaths5796;
}

const HeavyComponent5796 = memo(function HeavyComponent5796({ config }: HeavyProps5796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5796.displayName = 'HeavyComponent5796';
export default HeavyComponent5796;

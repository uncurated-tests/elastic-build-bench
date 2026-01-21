'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5584<T> = T extends (infer U)[]
  ? DeepReadonlyArray5584<U>
  : T extends object
  ? DeepReadonlyObject5584<T>
  : T;

interface DeepReadonlyArray5584<T> extends ReadonlyArray<DeepReadonly5584<T>> {}

type DeepReadonlyObject5584<T> = {
  readonly [P in keyof T]: DeepReadonly5584<T[P]>;
};

type UnionToIntersection5584<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5584<T> = UnionToIntersection5584<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5584<T extends unknown[], V> = [...T, V];

type TuplifyUnion5584<T, L = LastOf5584<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5584<TuplifyUnion5584<Exclude<T, L>>, L>;

type DeepPartial5584<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5584<T[P]> }
  : T;

type Paths5584<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5584<K, Paths5584<T[K], Prev5584[D]>> : never }[keyof T]
  : never;

type Prev5584 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5584<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5584 {
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

type ConfigPaths5584 = Paths5584<NestedConfig5584>;

interface HeavyProps5584 {
  config: DeepPartial5584<NestedConfig5584>;
  path?: ConfigPaths5584;
}

const HeavyComponent5584 = memo(function HeavyComponent5584({ config }: HeavyProps5584) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5584) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5584 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5584: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5584.displayName = 'HeavyComponent5584';
export default HeavyComponent5584;

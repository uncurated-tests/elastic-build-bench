'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5470<T> = T extends (infer U)[]
  ? DeepReadonlyArray5470<U>
  : T extends object
  ? DeepReadonlyObject5470<T>
  : T;

interface DeepReadonlyArray5470<T> extends ReadonlyArray<DeepReadonly5470<T>> {}

type DeepReadonlyObject5470<T> = {
  readonly [P in keyof T]: DeepReadonly5470<T[P]>;
};

type UnionToIntersection5470<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5470<T> = UnionToIntersection5470<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5470<T extends unknown[], V> = [...T, V];

type TuplifyUnion5470<T, L = LastOf5470<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5470<TuplifyUnion5470<Exclude<T, L>>, L>;

type DeepPartial5470<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5470<T[P]> }
  : T;

type Paths5470<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5470<K, Paths5470<T[K], Prev5470[D]>> : never }[keyof T]
  : never;

type Prev5470 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5470<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5470 {
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

type ConfigPaths5470 = Paths5470<NestedConfig5470>;

interface HeavyProps5470 {
  config: DeepPartial5470<NestedConfig5470>;
  path?: ConfigPaths5470;
}

const HeavyComponent5470 = memo(function HeavyComponent5470({ config }: HeavyProps5470) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5470) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5470 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5470: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5470.displayName = 'HeavyComponent5470';
export default HeavyComponent5470;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5965<T> = T extends (infer U)[]
  ? DeepReadonlyArray5965<U>
  : T extends object
  ? DeepReadonlyObject5965<T>
  : T;

interface DeepReadonlyArray5965<T> extends ReadonlyArray<DeepReadonly5965<T>> {}

type DeepReadonlyObject5965<T> = {
  readonly [P in keyof T]: DeepReadonly5965<T[P]>;
};

type UnionToIntersection5965<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5965<T> = UnionToIntersection5965<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5965<T extends unknown[], V> = [...T, V];

type TuplifyUnion5965<T, L = LastOf5965<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5965<TuplifyUnion5965<Exclude<T, L>>, L>;

type DeepPartial5965<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5965<T[P]> }
  : T;

type Paths5965<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5965<K, Paths5965<T[K], Prev5965[D]>> : never }[keyof T]
  : never;

type Prev5965 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5965<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5965 {
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

type ConfigPaths5965 = Paths5965<NestedConfig5965>;

interface HeavyProps5965 {
  config: DeepPartial5965<NestedConfig5965>;
  path?: ConfigPaths5965;
}

const HeavyComponent5965 = memo(function HeavyComponent5965({ config }: HeavyProps5965) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5965) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5965 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5965: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5965.displayName = 'HeavyComponent5965';
export default HeavyComponent5965;

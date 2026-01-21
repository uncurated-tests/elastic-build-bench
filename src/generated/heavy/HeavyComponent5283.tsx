'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5283<T> = T extends (infer U)[]
  ? DeepReadonlyArray5283<U>
  : T extends object
  ? DeepReadonlyObject5283<T>
  : T;

interface DeepReadonlyArray5283<T> extends ReadonlyArray<DeepReadonly5283<T>> {}

type DeepReadonlyObject5283<T> = {
  readonly [P in keyof T]: DeepReadonly5283<T[P]>;
};

type UnionToIntersection5283<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5283<T> = UnionToIntersection5283<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5283<T extends unknown[], V> = [...T, V];

type TuplifyUnion5283<T, L = LastOf5283<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5283<TuplifyUnion5283<Exclude<T, L>>, L>;

type DeepPartial5283<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5283<T[P]> }
  : T;

type Paths5283<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5283<K, Paths5283<T[K], Prev5283[D]>> : never }[keyof T]
  : never;

type Prev5283 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5283<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5283 {
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

type ConfigPaths5283 = Paths5283<NestedConfig5283>;

interface HeavyProps5283 {
  config: DeepPartial5283<NestedConfig5283>;
  path?: ConfigPaths5283;
}

const HeavyComponent5283 = memo(function HeavyComponent5283({ config }: HeavyProps5283) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5283) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5283 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5283: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5283.displayName = 'HeavyComponent5283';
export default HeavyComponent5283;

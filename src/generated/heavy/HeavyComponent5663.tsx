'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5663<T> = T extends (infer U)[]
  ? DeepReadonlyArray5663<U>
  : T extends object
  ? DeepReadonlyObject5663<T>
  : T;

interface DeepReadonlyArray5663<T> extends ReadonlyArray<DeepReadonly5663<T>> {}

type DeepReadonlyObject5663<T> = {
  readonly [P in keyof T]: DeepReadonly5663<T[P]>;
};

type UnionToIntersection5663<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5663<T> = UnionToIntersection5663<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5663<T extends unknown[], V> = [...T, V];

type TuplifyUnion5663<T, L = LastOf5663<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5663<TuplifyUnion5663<Exclude<T, L>>, L>;

type DeepPartial5663<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5663<T[P]> }
  : T;

type Paths5663<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5663<K, Paths5663<T[K], Prev5663[D]>> : never }[keyof T]
  : never;

type Prev5663 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5663<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5663 {
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

type ConfigPaths5663 = Paths5663<NestedConfig5663>;

interface HeavyProps5663 {
  config: DeepPartial5663<NestedConfig5663>;
  path?: ConfigPaths5663;
}

const HeavyComponent5663 = memo(function HeavyComponent5663({ config }: HeavyProps5663) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5663) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5663 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5663: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5663.displayName = 'HeavyComponent5663';
export default HeavyComponent5663;

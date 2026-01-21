'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5054<T> = T extends (infer U)[]
  ? DeepReadonlyArray5054<U>
  : T extends object
  ? DeepReadonlyObject5054<T>
  : T;

interface DeepReadonlyArray5054<T> extends ReadonlyArray<DeepReadonly5054<T>> {}

type DeepReadonlyObject5054<T> = {
  readonly [P in keyof T]: DeepReadonly5054<T[P]>;
};

type UnionToIntersection5054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5054<T> = UnionToIntersection5054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5054<T extends unknown[], V> = [...T, V];

type TuplifyUnion5054<T, L = LastOf5054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5054<TuplifyUnion5054<Exclude<T, L>>, L>;

type DeepPartial5054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5054<T[P]> }
  : T;

type Paths5054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5054<K, Paths5054<T[K], Prev5054[D]>> : never }[keyof T]
  : never;

type Prev5054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5054 {
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

type ConfigPaths5054 = Paths5054<NestedConfig5054>;

interface HeavyProps5054 {
  config: DeepPartial5054<NestedConfig5054>;
  path?: ConfigPaths5054;
}

const HeavyComponent5054 = memo(function HeavyComponent5054({ config }: HeavyProps5054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5054.displayName = 'HeavyComponent5054';
export default HeavyComponent5054;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5826<T> = T extends (infer U)[]
  ? DeepReadonlyArray5826<U>
  : T extends object
  ? DeepReadonlyObject5826<T>
  : T;

interface DeepReadonlyArray5826<T> extends ReadonlyArray<DeepReadonly5826<T>> {}

type DeepReadonlyObject5826<T> = {
  readonly [P in keyof T]: DeepReadonly5826<T[P]>;
};

type UnionToIntersection5826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5826<T> = UnionToIntersection5826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5826<T extends unknown[], V> = [...T, V];

type TuplifyUnion5826<T, L = LastOf5826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5826<TuplifyUnion5826<Exclude<T, L>>, L>;

type DeepPartial5826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5826<T[P]> }
  : T;

type Paths5826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5826<K, Paths5826<T[K], Prev5826[D]>> : never }[keyof T]
  : never;

type Prev5826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5826 {
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

type ConfigPaths5826 = Paths5826<NestedConfig5826>;

interface HeavyProps5826 {
  config: DeepPartial5826<NestedConfig5826>;
  path?: ConfigPaths5826;
}

const HeavyComponent5826 = memo(function HeavyComponent5826({ config }: HeavyProps5826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5826.displayName = 'HeavyComponent5826';
export default HeavyComponent5826;

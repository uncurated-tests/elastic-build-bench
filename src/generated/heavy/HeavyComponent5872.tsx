'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5872<T> = T extends (infer U)[]
  ? DeepReadonlyArray5872<U>
  : T extends object
  ? DeepReadonlyObject5872<T>
  : T;

interface DeepReadonlyArray5872<T> extends ReadonlyArray<DeepReadonly5872<T>> {}

type DeepReadonlyObject5872<T> = {
  readonly [P in keyof T]: DeepReadonly5872<T[P]>;
};

type UnionToIntersection5872<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5872<T> = UnionToIntersection5872<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5872<T extends unknown[], V> = [...T, V];

type TuplifyUnion5872<T, L = LastOf5872<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5872<TuplifyUnion5872<Exclude<T, L>>, L>;

type DeepPartial5872<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5872<T[P]> }
  : T;

type Paths5872<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5872<K, Paths5872<T[K], Prev5872[D]>> : never }[keyof T]
  : never;

type Prev5872 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5872<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5872 {
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

type ConfigPaths5872 = Paths5872<NestedConfig5872>;

interface HeavyProps5872 {
  config: DeepPartial5872<NestedConfig5872>;
  path?: ConfigPaths5872;
}

const HeavyComponent5872 = memo(function HeavyComponent5872({ config }: HeavyProps5872) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5872) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5872 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5872: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5872.displayName = 'HeavyComponent5872';
export default HeavyComponent5872;

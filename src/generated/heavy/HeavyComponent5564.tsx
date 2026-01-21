'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5564<T> = T extends (infer U)[]
  ? DeepReadonlyArray5564<U>
  : T extends object
  ? DeepReadonlyObject5564<T>
  : T;

interface DeepReadonlyArray5564<T> extends ReadonlyArray<DeepReadonly5564<T>> {}

type DeepReadonlyObject5564<T> = {
  readonly [P in keyof T]: DeepReadonly5564<T[P]>;
};

type UnionToIntersection5564<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5564<T> = UnionToIntersection5564<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5564<T extends unknown[], V> = [...T, V];

type TuplifyUnion5564<T, L = LastOf5564<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5564<TuplifyUnion5564<Exclude<T, L>>, L>;

type DeepPartial5564<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5564<T[P]> }
  : T;

type Paths5564<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5564<K, Paths5564<T[K], Prev5564[D]>> : never }[keyof T]
  : never;

type Prev5564 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5564<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5564 {
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

type ConfigPaths5564 = Paths5564<NestedConfig5564>;

interface HeavyProps5564 {
  config: DeepPartial5564<NestedConfig5564>;
  path?: ConfigPaths5564;
}

const HeavyComponent5564 = memo(function HeavyComponent5564({ config }: HeavyProps5564) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5564) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5564 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5564: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5564.displayName = 'HeavyComponent5564';
export default HeavyComponent5564;

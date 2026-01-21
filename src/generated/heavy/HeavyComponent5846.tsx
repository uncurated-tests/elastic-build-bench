'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5846<T> = T extends (infer U)[]
  ? DeepReadonlyArray5846<U>
  : T extends object
  ? DeepReadonlyObject5846<T>
  : T;

interface DeepReadonlyArray5846<T> extends ReadonlyArray<DeepReadonly5846<T>> {}

type DeepReadonlyObject5846<T> = {
  readonly [P in keyof T]: DeepReadonly5846<T[P]>;
};

type UnionToIntersection5846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5846<T> = UnionToIntersection5846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5846<T extends unknown[], V> = [...T, V];

type TuplifyUnion5846<T, L = LastOf5846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5846<TuplifyUnion5846<Exclude<T, L>>, L>;

type DeepPartial5846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5846<T[P]> }
  : T;

type Paths5846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5846<K, Paths5846<T[K], Prev5846[D]>> : never }[keyof T]
  : never;

type Prev5846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5846 {
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

type ConfigPaths5846 = Paths5846<NestedConfig5846>;

interface HeavyProps5846 {
  config: DeepPartial5846<NestedConfig5846>;
  path?: ConfigPaths5846;
}

const HeavyComponent5846 = memo(function HeavyComponent5846({ config }: HeavyProps5846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5846.displayName = 'HeavyComponent5846';
export default HeavyComponent5846;

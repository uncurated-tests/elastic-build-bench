'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5876<T> = T extends (infer U)[]
  ? DeepReadonlyArray5876<U>
  : T extends object
  ? DeepReadonlyObject5876<T>
  : T;

interface DeepReadonlyArray5876<T> extends ReadonlyArray<DeepReadonly5876<T>> {}

type DeepReadonlyObject5876<T> = {
  readonly [P in keyof T]: DeepReadonly5876<T[P]>;
};

type UnionToIntersection5876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5876<T> = UnionToIntersection5876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5876<T extends unknown[], V> = [...T, V];

type TuplifyUnion5876<T, L = LastOf5876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5876<TuplifyUnion5876<Exclude<T, L>>, L>;

type DeepPartial5876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5876<T[P]> }
  : T;

type Paths5876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5876<K, Paths5876<T[K], Prev5876[D]>> : never }[keyof T]
  : never;

type Prev5876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5876 {
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

type ConfigPaths5876 = Paths5876<NestedConfig5876>;

interface HeavyProps5876 {
  config: DeepPartial5876<NestedConfig5876>;
  path?: ConfigPaths5876;
}

const HeavyComponent5876 = memo(function HeavyComponent5876({ config }: HeavyProps5876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5876.displayName = 'HeavyComponent5876';
export default HeavyComponent5876;

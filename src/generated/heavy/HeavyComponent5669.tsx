'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5669<T> = T extends (infer U)[]
  ? DeepReadonlyArray5669<U>
  : T extends object
  ? DeepReadonlyObject5669<T>
  : T;

interface DeepReadonlyArray5669<T> extends ReadonlyArray<DeepReadonly5669<T>> {}

type DeepReadonlyObject5669<T> = {
  readonly [P in keyof T]: DeepReadonly5669<T[P]>;
};

type UnionToIntersection5669<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5669<T> = UnionToIntersection5669<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5669<T extends unknown[], V> = [...T, V];

type TuplifyUnion5669<T, L = LastOf5669<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5669<TuplifyUnion5669<Exclude<T, L>>, L>;

type DeepPartial5669<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5669<T[P]> }
  : T;

type Paths5669<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5669<K, Paths5669<T[K], Prev5669[D]>> : never }[keyof T]
  : never;

type Prev5669 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5669<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5669 {
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

type ConfigPaths5669 = Paths5669<NestedConfig5669>;

interface HeavyProps5669 {
  config: DeepPartial5669<NestedConfig5669>;
  path?: ConfigPaths5669;
}

const HeavyComponent5669 = memo(function HeavyComponent5669({ config }: HeavyProps5669) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5669) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5669 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5669: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5669.displayName = 'HeavyComponent5669';
export default HeavyComponent5669;

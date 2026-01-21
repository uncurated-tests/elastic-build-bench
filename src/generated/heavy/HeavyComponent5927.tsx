'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5927<T> = T extends (infer U)[]
  ? DeepReadonlyArray5927<U>
  : T extends object
  ? DeepReadonlyObject5927<T>
  : T;

interface DeepReadonlyArray5927<T> extends ReadonlyArray<DeepReadonly5927<T>> {}

type DeepReadonlyObject5927<T> = {
  readonly [P in keyof T]: DeepReadonly5927<T[P]>;
};

type UnionToIntersection5927<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5927<T> = UnionToIntersection5927<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5927<T extends unknown[], V> = [...T, V];

type TuplifyUnion5927<T, L = LastOf5927<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5927<TuplifyUnion5927<Exclude<T, L>>, L>;

type DeepPartial5927<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5927<T[P]> }
  : T;

type Paths5927<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5927<K, Paths5927<T[K], Prev5927[D]>> : never }[keyof T]
  : never;

type Prev5927 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5927<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5927 {
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

type ConfigPaths5927 = Paths5927<NestedConfig5927>;

interface HeavyProps5927 {
  config: DeepPartial5927<NestedConfig5927>;
  path?: ConfigPaths5927;
}

const HeavyComponent5927 = memo(function HeavyComponent5927({ config }: HeavyProps5927) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5927) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5927 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5927: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5927.displayName = 'HeavyComponent5927';
export default HeavyComponent5927;

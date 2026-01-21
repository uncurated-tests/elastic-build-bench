'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5916<T> = T extends (infer U)[]
  ? DeepReadonlyArray5916<U>
  : T extends object
  ? DeepReadonlyObject5916<T>
  : T;

interface DeepReadonlyArray5916<T> extends ReadonlyArray<DeepReadonly5916<T>> {}

type DeepReadonlyObject5916<T> = {
  readonly [P in keyof T]: DeepReadonly5916<T[P]>;
};

type UnionToIntersection5916<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5916<T> = UnionToIntersection5916<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5916<T extends unknown[], V> = [...T, V];

type TuplifyUnion5916<T, L = LastOf5916<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5916<TuplifyUnion5916<Exclude<T, L>>, L>;

type DeepPartial5916<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5916<T[P]> }
  : T;

type Paths5916<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5916<K, Paths5916<T[K], Prev5916[D]>> : never }[keyof T]
  : never;

type Prev5916 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5916<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5916 {
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

type ConfigPaths5916 = Paths5916<NestedConfig5916>;

interface HeavyProps5916 {
  config: DeepPartial5916<NestedConfig5916>;
  path?: ConfigPaths5916;
}

const HeavyComponent5916 = memo(function HeavyComponent5916({ config }: HeavyProps5916) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5916) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5916 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5916: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5916.displayName = 'HeavyComponent5916';
export default HeavyComponent5916;

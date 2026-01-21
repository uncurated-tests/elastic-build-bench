'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5062<T> = T extends (infer U)[]
  ? DeepReadonlyArray5062<U>
  : T extends object
  ? DeepReadonlyObject5062<T>
  : T;

interface DeepReadonlyArray5062<T> extends ReadonlyArray<DeepReadonly5062<T>> {}

type DeepReadonlyObject5062<T> = {
  readonly [P in keyof T]: DeepReadonly5062<T[P]>;
};

type UnionToIntersection5062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5062<T> = UnionToIntersection5062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5062<T extends unknown[], V> = [...T, V];

type TuplifyUnion5062<T, L = LastOf5062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5062<TuplifyUnion5062<Exclude<T, L>>, L>;

type DeepPartial5062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5062<T[P]> }
  : T;

type Paths5062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5062<K, Paths5062<T[K], Prev5062[D]>> : never }[keyof T]
  : never;

type Prev5062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5062 {
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

type ConfigPaths5062 = Paths5062<NestedConfig5062>;

interface HeavyProps5062 {
  config: DeepPartial5062<NestedConfig5062>;
  path?: ConfigPaths5062;
}

const HeavyComponent5062 = memo(function HeavyComponent5062({ config }: HeavyProps5062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5062.displayName = 'HeavyComponent5062';
export default HeavyComponent5062;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5788<T> = T extends (infer U)[]
  ? DeepReadonlyArray5788<U>
  : T extends object
  ? DeepReadonlyObject5788<T>
  : T;

interface DeepReadonlyArray5788<T> extends ReadonlyArray<DeepReadonly5788<T>> {}

type DeepReadonlyObject5788<T> = {
  readonly [P in keyof T]: DeepReadonly5788<T[P]>;
};

type UnionToIntersection5788<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5788<T> = UnionToIntersection5788<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5788<T extends unknown[], V> = [...T, V];

type TuplifyUnion5788<T, L = LastOf5788<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5788<TuplifyUnion5788<Exclude<T, L>>, L>;

type DeepPartial5788<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5788<T[P]> }
  : T;

type Paths5788<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5788<K, Paths5788<T[K], Prev5788[D]>> : never }[keyof T]
  : never;

type Prev5788 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5788<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5788 {
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

type ConfigPaths5788 = Paths5788<NestedConfig5788>;

interface HeavyProps5788 {
  config: DeepPartial5788<NestedConfig5788>;
  path?: ConfigPaths5788;
}

const HeavyComponent5788 = memo(function HeavyComponent5788({ config }: HeavyProps5788) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5788) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5788 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5788: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5788.displayName = 'HeavyComponent5788';
export default HeavyComponent5788;

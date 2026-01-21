'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5984<T> = T extends (infer U)[]
  ? DeepReadonlyArray5984<U>
  : T extends object
  ? DeepReadonlyObject5984<T>
  : T;

interface DeepReadonlyArray5984<T> extends ReadonlyArray<DeepReadonly5984<T>> {}

type DeepReadonlyObject5984<T> = {
  readonly [P in keyof T]: DeepReadonly5984<T[P]>;
};

type UnionToIntersection5984<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5984<T> = UnionToIntersection5984<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5984<T extends unknown[], V> = [...T, V];

type TuplifyUnion5984<T, L = LastOf5984<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5984<TuplifyUnion5984<Exclude<T, L>>, L>;

type DeepPartial5984<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5984<T[P]> }
  : T;

type Paths5984<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5984<K, Paths5984<T[K], Prev5984[D]>> : never }[keyof T]
  : never;

type Prev5984 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5984<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5984 {
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

type ConfigPaths5984 = Paths5984<NestedConfig5984>;

interface HeavyProps5984 {
  config: DeepPartial5984<NestedConfig5984>;
  path?: ConfigPaths5984;
}

const HeavyComponent5984 = memo(function HeavyComponent5984({ config }: HeavyProps5984) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5984) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5984 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5984: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5984.displayName = 'HeavyComponent5984';
export default HeavyComponent5984;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5787<T> = T extends (infer U)[]
  ? DeepReadonlyArray5787<U>
  : T extends object
  ? DeepReadonlyObject5787<T>
  : T;

interface DeepReadonlyArray5787<T> extends ReadonlyArray<DeepReadonly5787<T>> {}

type DeepReadonlyObject5787<T> = {
  readonly [P in keyof T]: DeepReadonly5787<T[P]>;
};

type UnionToIntersection5787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5787<T> = UnionToIntersection5787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5787<T extends unknown[], V> = [...T, V];

type TuplifyUnion5787<T, L = LastOf5787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5787<TuplifyUnion5787<Exclude<T, L>>, L>;

type DeepPartial5787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5787<T[P]> }
  : T;

type Paths5787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5787<K, Paths5787<T[K], Prev5787[D]>> : never }[keyof T]
  : never;

type Prev5787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5787 {
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

type ConfigPaths5787 = Paths5787<NestedConfig5787>;

interface HeavyProps5787 {
  config: DeepPartial5787<NestedConfig5787>;
  path?: ConfigPaths5787;
}

const HeavyComponent5787 = memo(function HeavyComponent5787({ config }: HeavyProps5787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5787.displayName = 'HeavyComponent5787';
export default HeavyComponent5787;

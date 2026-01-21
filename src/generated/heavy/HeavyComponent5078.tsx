'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5078<T> = T extends (infer U)[]
  ? DeepReadonlyArray5078<U>
  : T extends object
  ? DeepReadonlyObject5078<T>
  : T;

interface DeepReadonlyArray5078<T> extends ReadonlyArray<DeepReadonly5078<T>> {}

type DeepReadonlyObject5078<T> = {
  readonly [P in keyof T]: DeepReadonly5078<T[P]>;
};

type UnionToIntersection5078<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5078<T> = UnionToIntersection5078<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5078<T extends unknown[], V> = [...T, V];

type TuplifyUnion5078<T, L = LastOf5078<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5078<TuplifyUnion5078<Exclude<T, L>>, L>;

type DeepPartial5078<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5078<T[P]> }
  : T;

type Paths5078<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5078<K, Paths5078<T[K], Prev5078[D]>> : never }[keyof T]
  : never;

type Prev5078 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5078<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5078 {
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

type ConfigPaths5078 = Paths5078<NestedConfig5078>;

interface HeavyProps5078 {
  config: DeepPartial5078<NestedConfig5078>;
  path?: ConfigPaths5078;
}

const HeavyComponent5078 = memo(function HeavyComponent5078({ config }: HeavyProps5078) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5078) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5078 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5078: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5078.displayName = 'HeavyComponent5078';
export default HeavyComponent5078;

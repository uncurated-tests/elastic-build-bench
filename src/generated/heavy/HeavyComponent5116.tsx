'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5116<T> = T extends (infer U)[]
  ? DeepReadonlyArray5116<U>
  : T extends object
  ? DeepReadonlyObject5116<T>
  : T;

interface DeepReadonlyArray5116<T> extends ReadonlyArray<DeepReadonly5116<T>> {}

type DeepReadonlyObject5116<T> = {
  readonly [P in keyof T]: DeepReadonly5116<T[P]>;
};

type UnionToIntersection5116<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5116<T> = UnionToIntersection5116<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5116<T extends unknown[], V> = [...T, V];

type TuplifyUnion5116<T, L = LastOf5116<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5116<TuplifyUnion5116<Exclude<T, L>>, L>;

type DeepPartial5116<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5116<T[P]> }
  : T;

type Paths5116<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5116<K, Paths5116<T[K], Prev5116[D]>> : never }[keyof T]
  : never;

type Prev5116 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5116<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5116 {
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

type ConfigPaths5116 = Paths5116<NestedConfig5116>;

interface HeavyProps5116 {
  config: DeepPartial5116<NestedConfig5116>;
  path?: ConfigPaths5116;
}

const HeavyComponent5116 = memo(function HeavyComponent5116({ config }: HeavyProps5116) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5116) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5116 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5116: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5116.displayName = 'HeavyComponent5116';
export default HeavyComponent5116;

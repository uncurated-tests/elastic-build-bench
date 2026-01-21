'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5864<T> = T extends (infer U)[]
  ? DeepReadonlyArray5864<U>
  : T extends object
  ? DeepReadonlyObject5864<T>
  : T;

interface DeepReadonlyArray5864<T> extends ReadonlyArray<DeepReadonly5864<T>> {}

type DeepReadonlyObject5864<T> = {
  readonly [P in keyof T]: DeepReadonly5864<T[P]>;
};

type UnionToIntersection5864<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5864<T> = UnionToIntersection5864<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5864<T extends unknown[], V> = [...T, V];

type TuplifyUnion5864<T, L = LastOf5864<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5864<TuplifyUnion5864<Exclude<T, L>>, L>;

type DeepPartial5864<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5864<T[P]> }
  : T;

type Paths5864<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5864<K, Paths5864<T[K], Prev5864[D]>> : never }[keyof T]
  : never;

type Prev5864 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5864<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5864 {
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

type ConfigPaths5864 = Paths5864<NestedConfig5864>;

interface HeavyProps5864 {
  config: DeepPartial5864<NestedConfig5864>;
  path?: ConfigPaths5864;
}

const HeavyComponent5864 = memo(function HeavyComponent5864({ config }: HeavyProps5864) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5864) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5864 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5864: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5864.displayName = 'HeavyComponent5864';
export default HeavyComponent5864;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5480<T> = T extends (infer U)[]
  ? DeepReadonlyArray5480<U>
  : T extends object
  ? DeepReadonlyObject5480<T>
  : T;

interface DeepReadonlyArray5480<T> extends ReadonlyArray<DeepReadonly5480<T>> {}

type DeepReadonlyObject5480<T> = {
  readonly [P in keyof T]: DeepReadonly5480<T[P]>;
};

type UnionToIntersection5480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5480<T> = UnionToIntersection5480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5480<T extends unknown[], V> = [...T, V];

type TuplifyUnion5480<T, L = LastOf5480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5480<TuplifyUnion5480<Exclude<T, L>>, L>;

type DeepPartial5480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5480<T[P]> }
  : T;

type Paths5480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5480<K, Paths5480<T[K], Prev5480[D]>> : never }[keyof T]
  : never;

type Prev5480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5480 {
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

type ConfigPaths5480 = Paths5480<NestedConfig5480>;

interface HeavyProps5480 {
  config: DeepPartial5480<NestedConfig5480>;
  path?: ConfigPaths5480;
}

const HeavyComponent5480 = memo(function HeavyComponent5480({ config }: HeavyProps5480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5480.displayName = 'HeavyComponent5480';
export default HeavyComponent5480;

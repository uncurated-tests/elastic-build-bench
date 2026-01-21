'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5356<T> = T extends (infer U)[]
  ? DeepReadonlyArray5356<U>
  : T extends object
  ? DeepReadonlyObject5356<T>
  : T;

interface DeepReadonlyArray5356<T> extends ReadonlyArray<DeepReadonly5356<T>> {}

type DeepReadonlyObject5356<T> = {
  readonly [P in keyof T]: DeepReadonly5356<T[P]>;
};

type UnionToIntersection5356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5356<T> = UnionToIntersection5356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5356<T extends unknown[], V> = [...T, V];

type TuplifyUnion5356<T, L = LastOf5356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5356<TuplifyUnion5356<Exclude<T, L>>, L>;

type DeepPartial5356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5356<T[P]> }
  : T;

type Paths5356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5356<K, Paths5356<T[K], Prev5356[D]>> : never }[keyof T]
  : never;

type Prev5356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5356 {
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

type ConfigPaths5356 = Paths5356<NestedConfig5356>;

interface HeavyProps5356 {
  config: DeepPartial5356<NestedConfig5356>;
  path?: ConfigPaths5356;
}

const HeavyComponent5356 = memo(function HeavyComponent5356({ config }: HeavyProps5356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5356.displayName = 'HeavyComponent5356';
export default HeavyComponent5356;

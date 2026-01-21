'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5372<T> = T extends (infer U)[]
  ? DeepReadonlyArray5372<U>
  : T extends object
  ? DeepReadonlyObject5372<T>
  : T;

interface DeepReadonlyArray5372<T> extends ReadonlyArray<DeepReadonly5372<T>> {}

type DeepReadonlyObject5372<T> = {
  readonly [P in keyof T]: DeepReadonly5372<T[P]>;
};

type UnionToIntersection5372<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5372<T> = UnionToIntersection5372<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5372<T extends unknown[], V> = [...T, V];

type TuplifyUnion5372<T, L = LastOf5372<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5372<TuplifyUnion5372<Exclude<T, L>>, L>;

type DeepPartial5372<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5372<T[P]> }
  : T;

type Paths5372<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5372<K, Paths5372<T[K], Prev5372[D]>> : never }[keyof T]
  : never;

type Prev5372 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5372<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5372 {
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

type ConfigPaths5372 = Paths5372<NestedConfig5372>;

interface HeavyProps5372 {
  config: DeepPartial5372<NestedConfig5372>;
  path?: ConfigPaths5372;
}

const HeavyComponent5372 = memo(function HeavyComponent5372({ config }: HeavyProps5372) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5372) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5372 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5372: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5372.displayName = 'HeavyComponent5372';
export default HeavyComponent5372;

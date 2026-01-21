'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5481<T> = T extends (infer U)[]
  ? DeepReadonlyArray5481<U>
  : T extends object
  ? DeepReadonlyObject5481<T>
  : T;

interface DeepReadonlyArray5481<T> extends ReadonlyArray<DeepReadonly5481<T>> {}

type DeepReadonlyObject5481<T> = {
  readonly [P in keyof T]: DeepReadonly5481<T[P]>;
};

type UnionToIntersection5481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5481<T> = UnionToIntersection5481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5481<T extends unknown[], V> = [...T, V];

type TuplifyUnion5481<T, L = LastOf5481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5481<TuplifyUnion5481<Exclude<T, L>>, L>;

type DeepPartial5481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5481<T[P]> }
  : T;

type Paths5481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5481<K, Paths5481<T[K], Prev5481[D]>> : never }[keyof T]
  : never;

type Prev5481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5481 {
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

type ConfigPaths5481 = Paths5481<NestedConfig5481>;

interface HeavyProps5481 {
  config: DeepPartial5481<NestedConfig5481>;
  path?: ConfigPaths5481;
}

const HeavyComponent5481 = memo(function HeavyComponent5481({ config }: HeavyProps5481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5481.displayName = 'HeavyComponent5481';
export default HeavyComponent5481;

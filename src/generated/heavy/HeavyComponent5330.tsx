'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5330<T> = T extends (infer U)[]
  ? DeepReadonlyArray5330<U>
  : T extends object
  ? DeepReadonlyObject5330<T>
  : T;

interface DeepReadonlyArray5330<T> extends ReadonlyArray<DeepReadonly5330<T>> {}

type DeepReadonlyObject5330<T> = {
  readonly [P in keyof T]: DeepReadonly5330<T[P]>;
};

type UnionToIntersection5330<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5330<T> = UnionToIntersection5330<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5330<T extends unknown[], V> = [...T, V];

type TuplifyUnion5330<T, L = LastOf5330<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5330<TuplifyUnion5330<Exclude<T, L>>, L>;

type DeepPartial5330<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5330<T[P]> }
  : T;

type Paths5330<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5330<K, Paths5330<T[K], Prev5330[D]>> : never }[keyof T]
  : never;

type Prev5330 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5330<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5330 {
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

type ConfigPaths5330 = Paths5330<NestedConfig5330>;

interface HeavyProps5330 {
  config: DeepPartial5330<NestedConfig5330>;
  path?: ConfigPaths5330;
}

const HeavyComponent5330 = memo(function HeavyComponent5330({ config }: HeavyProps5330) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5330) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5330 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5330: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5330.displayName = 'HeavyComponent5330';
export default HeavyComponent5330;

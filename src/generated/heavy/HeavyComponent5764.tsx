'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5764<T> = T extends (infer U)[]
  ? DeepReadonlyArray5764<U>
  : T extends object
  ? DeepReadonlyObject5764<T>
  : T;

interface DeepReadonlyArray5764<T> extends ReadonlyArray<DeepReadonly5764<T>> {}

type DeepReadonlyObject5764<T> = {
  readonly [P in keyof T]: DeepReadonly5764<T[P]>;
};

type UnionToIntersection5764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5764<T> = UnionToIntersection5764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5764<T extends unknown[], V> = [...T, V];

type TuplifyUnion5764<T, L = LastOf5764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5764<TuplifyUnion5764<Exclude<T, L>>, L>;

type DeepPartial5764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5764<T[P]> }
  : T;

type Paths5764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5764<K, Paths5764<T[K], Prev5764[D]>> : never }[keyof T]
  : never;

type Prev5764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5764 {
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

type ConfigPaths5764 = Paths5764<NestedConfig5764>;

interface HeavyProps5764 {
  config: DeepPartial5764<NestedConfig5764>;
  path?: ConfigPaths5764;
}

const HeavyComponent5764 = memo(function HeavyComponent5764({ config }: HeavyProps5764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5764.displayName = 'HeavyComponent5764';
export default HeavyComponent5764;

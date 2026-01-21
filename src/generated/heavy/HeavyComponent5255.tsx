'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5255<T> = T extends (infer U)[]
  ? DeepReadonlyArray5255<U>
  : T extends object
  ? DeepReadonlyObject5255<T>
  : T;

interface DeepReadonlyArray5255<T> extends ReadonlyArray<DeepReadonly5255<T>> {}

type DeepReadonlyObject5255<T> = {
  readonly [P in keyof T]: DeepReadonly5255<T[P]>;
};

type UnionToIntersection5255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5255<T> = UnionToIntersection5255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5255<T extends unknown[], V> = [...T, V];

type TuplifyUnion5255<T, L = LastOf5255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5255<TuplifyUnion5255<Exclude<T, L>>, L>;

type DeepPartial5255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5255<T[P]> }
  : T;

type Paths5255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5255<K, Paths5255<T[K], Prev5255[D]>> : never }[keyof T]
  : never;

type Prev5255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5255 {
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

type ConfigPaths5255 = Paths5255<NestedConfig5255>;

interface HeavyProps5255 {
  config: DeepPartial5255<NestedConfig5255>;
  path?: ConfigPaths5255;
}

const HeavyComponent5255 = memo(function HeavyComponent5255({ config }: HeavyProps5255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5255.displayName = 'HeavyComponent5255';
export default HeavyComponent5255;

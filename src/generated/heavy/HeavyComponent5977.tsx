'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5977<T> = T extends (infer U)[]
  ? DeepReadonlyArray5977<U>
  : T extends object
  ? DeepReadonlyObject5977<T>
  : T;

interface DeepReadonlyArray5977<T> extends ReadonlyArray<DeepReadonly5977<T>> {}

type DeepReadonlyObject5977<T> = {
  readonly [P in keyof T]: DeepReadonly5977<T[P]>;
};

type UnionToIntersection5977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5977<T> = UnionToIntersection5977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5977<T extends unknown[], V> = [...T, V];

type TuplifyUnion5977<T, L = LastOf5977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5977<TuplifyUnion5977<Exclude<T, L>>, L>;

type DeepPartial5977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5977<T[P]> }
  : T;

type Paths5977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5977<K, Paths5977<T[K], Prev5977[D]>> : never }[keyof T]
  : never;

type Prev5977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5977 {
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

type ConfigPaths5977 = Paths5977<NestedConfig5977>;

interface HeavyProps5977 {
  config: DeepPartial5977<NestedConfig5977>;
  path?: ConfigPaths5977;
}

const HeavyComponent5977 = memo(function HeavyComponent5977({ config }: HeavyProps5977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5977.displayName = 'HeavyComponent5977';
export default HeavyComponent5977;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5620<T> = T extends (infer U)[]
  ? DeepReadonlyArray5620<U>
  : T extends object
  ? DeepReadonlyObject5620<T>
  : T;

interface DeepReadonlyArray5620<T> extends ReadonlyArray<DeepReadonly5620<T>> {}

type DeepReadonlyObject5620<T> = {
  readonly [P in keyof T]: DeepReadonly5620<T[P]>;
};

type UnionToIntersection5620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5620<T> = UnionToIntersection5620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5620<T extends unknown[], V> = [...T, V];

type TuplifyUnion5620<T, L = LastOf5620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5620<TuplifyUnion5620<Exclude<T, L>>, L>;

type DeepPartial5620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5620<T[P]> }
  : T;

type Paths5620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5620<K, Paths5620<T[K], Prev5620[D]>> : never }[keyof T]
  : never;

type Prev5620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5620 {
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

type ConfigPaths5620 = Paths5620<NestedConfig5620>;

interface HeavyProps5620 {
  config: DeepPartial5620<NestedConfig5620>;
  path?: ConfigPaths5620;
}

const HeavyComponent5620 = memo(function HeavyComponent5620({ config }: HeavyProps5620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5620.displayName = 'HeavyComponent5620';
export default HeavyComponent5620;

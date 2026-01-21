'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5615<T> = T extends (infer U)[]
  ? DeepReadonlyArray5615<U>
  : T extends object
  ? DeepReadonlyObject5615<T>
  : T;

interface DeepReadonlyArray5615<T> extends ReadonlyArray<DeepReadonly5615<T>> {}

type DeepReadonlyObject5615<T> = {
  readonly [P in keyof T]: DeepReadonly5615<T[P]>;
};

type UnionToIntersection5615<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5615<T> = UnionToIntersection5615<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5615<T extends unknown[], V> = [...T, V];

type TuplifyUnion5615<T, L = LastOf5615<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5615<TuplifyUnion5615<Exclude<T, L>>, L>;

type DeepPartial5615<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5615<T[P]> }
  : T;

type Paths5615<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5615<K, Paths5615<T[K], Prev5615[D]>> : never }[keyof T]
  : never;

type Prev5615 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5615<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5615 {
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

type ConfigPaths5615 = Paths5615<NestedConfig5615>;

interface HeavyProps5615 {
  config: DeepPartial5615<NestedConfig5615>;
  path?: ConfigPaths5615;
}

const HeavyComponent5615 = memo(function HeavyComponent5615({ config }: HeavyProps5615) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5615) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5615 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5615: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5615.displayName = 'HeavyComponent5615';
export default HeavyComponent5615;

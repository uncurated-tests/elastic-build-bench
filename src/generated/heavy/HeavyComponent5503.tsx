'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5503<T> = T extends (infer U)[]
  ? DeepReadonlyArray5503<U>
  : T extends object
  ? DeepReadonlyObject5503<T>
  : T;

interface DeepReadonlyArray5503<T> extends ReadonlyArray<DeepReadonly5503<T>> {}

type DeepReadonlyObject5503<T> = {
  readonly [P in keyof T]: DeepReadonly5503<T[P]>;
};

type UnionToIntersection5503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5503<T> = UnionToIntersection5503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5503<T extends unknown[], V> = [...T, V];

type TuplifyUnion5503<T, L = LastOf5503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5503<TuplifyUnion5503<Exclude<T, L>>, L>;

type DeepPartial5503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5503<T[P]> }
  : T;

type Paths5503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5503<K, Paths5503<T[K], Prev5503[D]>> : never }[keyof T]
  : never;

type Prev5503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5503 {
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

type ConfigPaths5503 = Paths5503<NestedConfig5503>;

interface HeavyProps5503 {
  config: DeepPartial5503<NestedConfig5503>;
  path?: ConfigPaths5503;
}

const HeavyComponent5503 = memo(function HeavyComponent5503({ config }: HeavyProps5503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5503.displayName = 'HeavyComponent5503';
export default HeavyComponent5503;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5700<T> = T extends (infer U)[]
  ? DeepReadonlyArray5700<U>
  : T extends object
  ? DeepReadonlyObject5700<T>
  : T;

interface DeepReadonlyArray5700<T> extends ReadonlyArray<DeepReadonly5700<T>> {}

type DeepReadonlyObject5700<T> = {
  readonly [P in keyof T]: DeepReadonly5700<T[P]>;
};

type UnionToIntersection5700<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5700<T> = UnionToIntersection5700<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5700<T extends unknown[], V> = [...T, V];

type TuplifyUnion5700<T, L = LastOf5700<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5700<TuplifyUnion5700<Exclude<T, L>>, L>;

type DeepPartial5700<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5700<T[P]> }
  : T;

type Paths5700<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5700<K, Paths5700<T[K], Prev5700[D]>> : never }[keyof T]
  : never;

type Prev5700 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5700<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5700 {
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

type ConfigPaths5700 = Paths5700<NestedConfig5700>;

interface HeavyProps5700 {
  config: DeepPartial5700<NestedConfig5700>;
  path?: ConfigPaths5700;
}

const HeavyComponent5700 = memo(function HeavyComponent5700({ config }: HeavyProps5700) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5700) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5700 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5700: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5700.displayName = 'HeavyComponent5700';
export default HeavyComponent5700;

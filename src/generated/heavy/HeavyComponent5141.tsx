'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5141<T> = T extends (infer U)[]
  ? DeepReadonlyArray5141<U>
  : T extends object
  ? DeepReadonlyObject5141<T>
  : T;

interface DeepReadonlyArray5141<T> extends ReadonlyArray<DeepReadonly5141<T>> {}

type DeepReadonlyObject5141<T> = {
  readonly [P in keyof T]: DeepReadonly5141<T[P]>;
};

type UnionToIntersection5141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5141<T> = UnionToIntersection5141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5141<T extends unknown[], V> = [...T, V];

type TuplifyUnion5141<T, L = LastOf5141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5141<TuplifyUnion5141<Exclude<T, L>>, L>;

type DeepPartial5141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5141<T[P]> }
  : T;

type Paths5141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5141<K, Paths5141<T[K], Prev5141[D]>> : never }[keyof T]
  : never;

type Prev5141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5141 {
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

type ConfigPaths5141 = Paths5141<NestedConfig5141>;

interface HeavyProps5141 {
  config: DeepPartial5141<NestedConfig5141>;
  path?: ConfigPaths5141;
}

const HeavyComponent5141 = memo(function HeavyComponent5141({ config }: HeavyProps5141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5141.displayName = 'HeavyComponent5141';
export default HeavyComponent5141;

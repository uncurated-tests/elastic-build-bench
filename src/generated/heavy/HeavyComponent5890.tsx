'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5890<T> = T extends (infer U)[]
  ? DeepReadonlyArray5890<U>
  : T extends object
  ? DeepReadonlyObject5890<T>
  : T;

interface DeepReadonlyArray5890<T> extends ReadonlyArray<DeepReadonly5890<T>> {}

type DeepReadonlyObject5890<T> = {
  readonly [P in keyof T]: DeepReadonly5890<T[P]>;
};

type UnionToIntersection5890<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5890<T> = UnionToIntersection5890<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5890<T extends unknown[], V> = [...T, V];

type TuplifyUnion5890<T, L = LastOf5890<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5890<TuplifyUnion5890<Exclude<T, L>>, L>;

type DeepPartial5890<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5890<T[P]> }
  : T;

type Paths5890<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5890<K, Paths5890<T[K], Prev5890[D]>> : never }[keyof T]
  : never;

type Prev5890 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5890<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5890 {
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

type ConfigPaths5890 = Paths5890<NestedConfig5890>;

interface HeavyProps5890 {
  config: DeepPartial5890<NestedConfig5890>;
  path?: ConfigPaths5890;
}

const HeavyComponent5890 = memo(function HeavyComponent5890({ config }: HeavyProps5890) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5890) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5890 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5890: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5890.displayName = 'HeavyComponent5890';
export default HeavyComponent5890;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5705<T> = T extends (infer U)[]
  ? DeepReadonlyArray5705<U>
  : T extends object
  ? DeepReadonlyObject5705<T>
  : T;

interface DeepReadonlyArray5705<T> extends ReadonlyArray<DeepReadonly5705<T>> {}

type DeepReadonlyObject5705<T> = {
  readonly [P in keyof T]: DeepReadonly5705<T[P]>;
};

type UnionToIntersection5705<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5705<T> = UnionToIntersection5705<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5705<T extends unknown[], V> = [...T, V];

type TuplifyUnion5705<T, L = LastOf5705<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5705<TuplifyUnion5705<Exclude<T, L>>, L>;

type DeepPartial5705<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5705<T[P]> }
  : T;

type Paths5705<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5705<K, Paths5705<T[K], Prev5705[D]>> : never }[keyof T]
  : never;

type Prev5705 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5705<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5705 {
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

type ConfigPaths5705 = Paths5705<NestedConfig5705>;

interface HeavyProps5705 {
  config: DeepPartial5705<NestedConfig5705>;
  path?: ConfigPaths5705;
}

const HeavyComponent5705 = memo(function HeavyComponent5705({ config }: HeavyProps5705) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5705) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5705 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5705: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5705.displayName = 'HeavyComponent5705';
export default HeavyComponent5705;

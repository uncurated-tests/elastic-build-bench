'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5866<T> = T extends (infer U)[]
  ? DeepReadonlyArray5866<U>
  : T extends object
  ? DeepReadonlyObject5866<T>
  : T;

interface DeepReadonlyArray5866<T> extends ReadonlyArray<DeepReadonly5866<T>> {}

type DeepReadonlyObject5866<T> = {
  readonly [P in keyof T]: DeepReadonly5866<T[P]>;
};

type UnionToIntersection5866<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5866<T> = UnionToIntersection5866<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5866<T extends unknown[], V> = [...T, V];

type TuplifyUnion5866<T, L = LastOf5866<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5866<TuplifyUnion5866<Exclude<T, L>>, L>;

type DeepPartial5866<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5866<T[P]> }
  : T;

type Paths5866<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5866<K, Paths5866<T[K], Prev5866[D]>> : never }[keyof T]
  : never;

type Prev5866 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5866<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5866 {
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

type ConfigPaths5866 = Paths5866<NestedConfig5866>;

interface HeavyProps5866 {
  config: DeepPartial5866<NestedConfig5866>;
  path?: ConfigPaths5866;
}

const HeavyComponent5866 = memo(function HeavyComponent5866({ config }: HeavyProps5866) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5866) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5866 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5866: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5866.displayName = 'HeavyComponent5866';
export default HeavyComponent5866;

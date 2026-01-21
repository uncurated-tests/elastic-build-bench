'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5777<T> = T extends (infer U)[]
  ? DeepReadonlyArray5777<U>
  : T extends object
  ? DeepReadonlyObject5777<T>
  : T;

interface DeepReadonlyArray5777<T> extends ReadonlyArray<DeepReadonly5777<T>> {}

type DeepReadonlyObject5777<T> = {
  readonly [P in keyof T]: DeepReadonly5777<T[P]>;
};

type UnionToIntersection5777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5777<T> = UnionToIntersection5777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5777<T extends unknown[], V> = [...T, V];

type TuplifyUnion5777<T, L = LastOf5777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5777<TuplifyUnion5777<Exclude<T, L>>, L>;

type DeepPartial5777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5777<T[P]> }
  : T;

type Paths5777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5777<K, Paths5777<T[K], Prev5777[D]>> : never }[keyof T]
  : never;

type Prev5777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5777 {
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

type ConfigPaths5777 = Paths5777<NestedConfig5777>;

interface HeavyProps5777 {
  config: DeepPartial5777<NestedConfig5777>;
  path?: ConfigPaths5777;
}

const HeavyComponent5777 = memo(function HeavyComponent5777({ config }: HeavyProps5777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5777.displayName = 'HeavyComponent5777';
export default HeavyComponent5777;

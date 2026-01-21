'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5609<T> = T extends (infer U)[]
  ? DeepReadonlyArray5609<U>
  : T extends object
  ? DeepReadonlyObject5609<T>
  : T;

interface DeepReadonlyArray5609<T> extends ReadonlyArray<DeepReadonly5609<T>> {}

type DeepReadonlyObject5609<T> = {
  readonly [P in keyof T]: DeepReadonly5609<T[P]>;
};

type UnionToIntersection5609<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5609<T> = UnionToIntersection5609<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5609<T extends unknown[], V> = [...T, V];

type TuplifyUnion5609<T, L = LastOf5609<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5609<TuplifyUnion5609<Exclude<T, L>>, L>;

type DeepPartial5609<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5609<T[P]> }
  : T;

type Paths5609<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5609<K, Paths5609<T[K], Prev5609[D]>> : never }[keyof T]
  : never;

type Prev5609 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5609<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5609 {
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

type ConfigPaths5609 = Paths5609<NestedConfig5609>;

interface HeavyProps5609 {
  config: DeepPartial5609<NestedConfig5609>;
  path?: ConfigPaths5609;
}

const HeavyComponent5609 = memo(function HeavyComponent5609({ config }: HeavyProps5609) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5609) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5609 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5609: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5609.displayName = 'HeavyComponent5609';
export default HeavyComponent5609;

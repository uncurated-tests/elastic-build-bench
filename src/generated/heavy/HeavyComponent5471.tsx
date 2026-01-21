'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5471<T> = T extends (infer U)[]
  ? DeepReadonlyArray5471<U>
  : T extends object
  ? DeepReadonlyObject5471<T>
  : T;

interface DeepReadonlyArray5471<T> extends ReadonlyArray<DeepReadonly5471<T>> {}

type DeepReadonlyObject5471<T> = {
  readonly [P in keyof T]: DeepReadonly5471<T[P]>;
};

type UnionToIntersection5471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5471<T> = UnionToIntersection5471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5471<T extends unknown[], V> = [...T, V];

type TuplifyUnion5471<T, L = LastOf5471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5471<TuplifyUnion5471<Exclude<T, L>>, L>;

type DeepPartial5471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5471<T[P]> }
  : T;

type Paths5471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5471<K, Paths5471<T[K], Prev5471[D]>> : never }[keyof T]
  : never;

type Prev5471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5471 {
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

type ConfigPaths5471 = Paths5471<NestedConfig5471>;

interface HeavyProps5471 {
  config: DeepPartial5471<NestedConfig5471>;
  path?: ConfigPaths5471;
}

const HeavyComponent5471 = memo(function HeavyComponent5471({ config }: HeavyProps5471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5471.displayName = 'HeavyComponent5471';
export default HeavyComponent5471;

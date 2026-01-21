'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5940<T> = T extends (infer U)[]
  ? DeepReadonlyArray5940<U>
  : T extends object
  ? DeepReadonlyObject5940<T>
  : T;

interface DeepReadonlyArray5940<T> extends ReadonlyArray<DeepReadonly5940<T>> {}

type DeepReadonlyObject5940<T> = {
  readonly [P in keyof T]: DeepReadonly5940<T[P]>;
};

type UnionToIntersection5940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5940<T> = UnionToIntersection5940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5940<T extends unknown[], V> = [...T, V];

type TuplifyUnion5940<T, L = LastOf5940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5940<TuplifyUnion5940<Exclude<T, L>>, L>;

type DeepPartial5940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5940<T[P]> }
  : T;

type Paths5940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5940<K, Paths5940<T[K], Prev5940[D]>> : never }[keyof T]
  : never;

type Prev5940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5940 {
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

type ConfigPaths5940 = Paths5940<NestedConfig5940>;

interface HeavyProps5940 {
  config: DeepPartial5940<NestedConfig5940>;
  path?: ConfigPaths5940;
}

const HeavyComponent5940 = memo(function HeavyComponent5940({ config }: HeavyProps5940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5940.displayName = 'HeavyComponent5940';
export default HeavyComponent5940;

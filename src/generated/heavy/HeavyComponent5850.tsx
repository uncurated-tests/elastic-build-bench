'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5850<T> = T extends (infer U)[]
  ? DeepReadonlyArray5850<U>
  : T extends object
  ? DeepReadonlyObject5850<T>
  : T;

interface DeepReadonlyArray5850<T> extends ReadonlyArray<DeepReadonly5850<T>> {}

type DeepReadonlyObject5850<T> = {
  readonly [P in keyof T]: DeepReadonly5850<T[P]>;
};

type UnionToIntersection5850<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5850<T> = UnionToIntersection5850<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5850<T extends unknown[], V> = [...T, V];

type TuplifyUnion5850<T, L = LastOf5850<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5850<TuplifyUnion5850<Exclude<T, L>>, L>;

type DeepPartial5850<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5850<T[P]> }
  : T;

type Paths5850<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5850<K, Paths5850<T[K], Prev5850[D]>> : never }[keyof T]
  : never;

type Prev5850 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5850<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5850 {
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

type ConfigPaths5850 = Paths5850<NestedConfig5850>;

interface HeavyProps5850 {
  config: DeepPartial5850<NestedConfig5850>;
  path?: ConfigPaths5850;
}

const HeavyComponent5850 = memo(function HeavyComponent5850({ config }: HeavyProps5850) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5850) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5850 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5850: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5850.displayName = 'HeavyComponent5850';
export default HeavyComponent5850;

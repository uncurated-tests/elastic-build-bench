'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5193<T> = T extends (infer U)[]
  ? DeepReadonlyArray5193<U>
  : T extends object
  ? DeepReadonlyObject5193<T>
  : T;

interface DeepReadonlyArray5193<T> extends ReadonlyArray<DeepReadonly5193<T>> {}

type DeepReadonlyObject5193<T> = {
  readonly [P in keyof T]: DeepReadonly5193<T[P]>;
};

type UnionToIntersection5193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5193<T> = UnionToIntersection5193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5193<T extends unknown[], V> = [...T, V];

type TuplifyUnion5193<T, L = LastOf5193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5193<TuplifyUnion5193<Exclude<T, L>>, L>;

type DeepPartial5193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5193<T[P]> }
  : T;

type Paths5193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5193<K, Paths5193<T[K], Prev5193[D]>> : never }[keyof T]
  : never;

type Prev5193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5193 {
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

type ConfigPaths5193 = Paths5193<NestedConfig5193>;

interface HeavyProps5193 {
  config: DeepPartial5193<NestedConfig5193>;
  path?: ConfigPaths5193;
}

const HeavyComponent5193 = memo(function HeavyComponent5193({ config }: HeavyProps5193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5193.displayName = 'HeavyComponent5193';
export default HeavyComponent5193;

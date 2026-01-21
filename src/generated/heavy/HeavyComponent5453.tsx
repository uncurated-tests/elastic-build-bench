'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5453<T> = T extends (infer U)[]
  ? DeepReadonlyArray5453<U>
  : T extends object
  ? DeepReadonlyObject5453<T>
  : T;

interface DeepReadonlyArray5453<T> extends ReadonlyArray<DeepReadonly5453<T>> {}

type DeepReadonlyObject5453<T> = {
  readonly [P in keyof T]: DeepReadonly5453<T[P]>;
};

type UnionToIntersection5453<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5453<T> = UnionToIntersection5453<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5453<T extends unknown[], V> = [...T, V];

type TuplifyUnion5453<T, L = LastOf5453<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5453<TuplifyUnion5453<Exclude<T, L>>, L>;

type DeepPartial5453<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5453<T[P]> }
  : T;

type Paths5453<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5453<K, Paths5453<T[K], Prev5453[D]>> : never }[keyof T]
  : never;

type Prev5453 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5453<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5453 {
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

type ConfigPaths5453 = Paths5453<NestedConfig5453>;

interface HeavyProps5453 {
  config: DeepPartial5453<NestedConfig5453>;
  path?: ConfigPaths5453;
}

const HeavyComponent5453 = memo(function HeavyComponent5453({ config }: HeavyProps5453) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5453) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5453 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5453: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5453.displayName = 'HeavyComponent5453';
export default HeavyComponent5453;

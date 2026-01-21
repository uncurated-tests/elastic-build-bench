'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5765<T> = T extends (infer U)[]
  ? DeepReadonlyArray5765<U>
  : T extends object
  ? DeepReadonlyObject5765<T>
  : T;

interface DeepReadonlyArray5765<T> extends ReadonlyArray<DeepReadonly5765<T>> {}

type DeepReadonlyObject5765<T> = {
  readonly [P in keyof T]: DeepReadonly5765<T[P]>;
};

type UnionToIntersection5765<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5765<T> = UnionToIntersection5765<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5765<T extends unknown[], V> = [...T, V];

type TuplifyUnion5765<T, L = LastOf5765<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5765<TuplifyUnion5765<Exclude<T, L>>, L>;

type DeepPartial5765<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5765<T[P]> }
  : T;

type Paths5765<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5765<K, Paths5765<T[K], Prev5765[D]>> : never }[keyof T]
  : never;

type Prev5765 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5765<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5765 {
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

type ConfigPaths5765 = Paths5765<NestedConfig5765>;

interface HeavyProps5765 {
  config: DeepPartial5765<NestedConfig5765>;
  path?: ConfigPaths5765;
}

const HeavyComponent5765 = memo(function HeavyComponent5765({ config }: HeavyProps5765) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5765) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5765 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5765: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5765.displayName = 'HeavyComponent5765';
export default HeavyComponent5765;

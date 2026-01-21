'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5080<T> = T extends (infer U)[]
  ? DeepReadonlyArray5080<U>
  : T extends object
  ? DeepReadonlyObject5080<T>
  : T;

interface DeepReadonlyArray5080<T> extends ReadonlyArray<DeepReadonly5080<T>> {}

type DeepReadonlyObject5080<T> = {
  readonly [P in keyof T]: DeepReadonly5080<T[P]>;
};

type UnionToIntersection5080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5080<T> = UnionToIntersection5080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5080<T extends unknown[], V> = [...T, V];

type TuplifyUnion5080<T, L = LastOf5080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5080<TuplifyUnion5080<Exclude<T, L>>, L>;

type DeepPartial5080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5080<T[P]> }
  : T;

type Paths5080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5080<K, Paths5080<T[K], Prev5080[D]>> : never }[keyof T]
  : never;

type Prev5080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5080 {
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

type ConfigPaths5080 = Paths5080<NestedConfig5080>;

interface HeavyProps5080 {
  config: DeepPartial5080<NestedConfig5080>;
  path?: ConfigPaths5080;
}

const HeavyComponent5080 = memo(function HeavyComponent5080({ config }: HeavyProps5080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5080.displayName = 'HeavyComponent5080';
export default HeavyComponent5080;

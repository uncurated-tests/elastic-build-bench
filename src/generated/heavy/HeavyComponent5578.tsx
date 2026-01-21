'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5578<T> = T extends (infer U)[]
  ? DeepReadonlyArray5578<U>
  : T extends object
  ? DeepReadonlyObject5578<T>
  : T;

interface DeepReadonlyArray5578<T> extends ReadonlyArray<DeepReadonly5578<T>> {}

type DeepReadonlyObject5578<T> = {
  readonly [P in keyof T]: DeepReadonly5578<T[P]>;
};

type UnionToIntersection5578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5578<T> = UnionToIntersection5578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5578<T extends unknown[], V> = [...T, V];

type TuplifyUnion5578<T, L = LastOf5578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5578<TuplifyUnion5578<Exclude<T, L>>, L>;

type DeepPartial5578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5578<T[P]> }
  : T;

type Paths5578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5578<K, Paths5578<T[K], Prev5578[D]>> : never }[keyof T]
  : never;

type Prev5578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5578 {
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

type ConfigPaths5578 = Paths5578<NestedConfig5578>;

interface HeavyProps5578 {
  config: DeepPartial5578<NestedConfig5578>;
  path?: ConfigPaths5578;
}

const HeavyComponent5578 = memo(function HeavyComponent5578({ config }: HeavyProps5578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5578.displayName = 'HeavyComponent5578';
export default HeavyComponent5578;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5546<T> = T extends (infer U)[]
  ? DeepReadonlyArray5546<U>
  : T extends object
  ? DeepReadonlyObject5546<T>
  : T;

interface DeepReadonlyArray5546<T> extends ReadonlyArray<DeepReadonly5546<T>> {}

type DeepReadonlyObject5546<T> = {
  readonly [P in keyof T]: DeepReadonly5546<T[P]>;
};

type UnionToIntersection5546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5546<T> = UnionToIntersection5546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5546<T extends unknown[], V> = [...T, V];

type TuplifyUnion5546<T, L = LastOf5546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5546<TuplifyUnion5546<Exclude<T, L>>, L>;

type DeepPartial5546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5546<T[P]> }
  : T;

type Paths5546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5546<K, Paths5546<T[K], Prev5546[D]>> : never }[keyof T]
  : never;

type Prev5546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5546 {
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

type ConfigPaths5546 = Paths5546<NestedConfig5546>;

interface HeavyProps5546 {
  config: DeepPartial5546<NestedConfig5546>;
  path?: ConfigPaths5546;
}

const HeavyComponent5546 = memo(function HeavyComponent5546({ config }: HeavyProps5546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5546.displayName = 'HeavyComponent5546';
export default HeavyComponent5546;

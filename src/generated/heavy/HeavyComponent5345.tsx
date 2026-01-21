'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5345<T> = T extends (infer U)[]
  ? DeepReadonlyArray5345<U>
  : T extends object
  ? DeepReadonlyObject5345<T>
  : T;

interface DeepReadonlyArray5345<T> extends ReadonlyArray<DeepReadonly5345<T>> {}

type DeepReadonlyObject5345<T> = {
  readonly [P in keyof T]: DeepReadonly5345<T[P]>;
};

type UnionToIntersection5345<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5345<T> = UnionToIntersection5345<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5345<T extends unknown[], V> = [...T, V];

type TuplifyUnion5345<T, L = LastOf5345<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5345<TuplifyUnion5345<Exclude<T, L>>, L>;

type DeepPartial5345<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5345<T[P]> }
  : T;

type Paths5345<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5345<K, Paths5345<T[K], Prev5345[D]>> : never }[keyof T]
  : never;

type Prev5345 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5345<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5345 {
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

type ConfigPaths5345 = Paths5345<NestedConfig5345>;

interface HeavyProps5345 {
  config: DeepPartial5345<NestedConfig5345>;
  path?: ConfigPaths5345;
}

const HeavyComponent5345 = memo(function HeavyComponent5345({ config }: HeavyProps5345) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5345) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5345 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5345: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5345.displayName = 'HeavyComponent5345';
export default HeavyComponent5345;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5334<T> = T extends (infer U)[]
  ? DeepReadonlyArray5334<U>
  : T extends object
  ? DeepReadonlyObject5334<T>
  : T;

interface DeepReadonlyArray5334<T> extends ReadonlyArray<DeepReadonly5334<T>> {}

type DeepReadonlyObject5334<T> = {
  readonly [P in keyof T]: DeepReadonly5334<T[P]>;
};

type UnionToIntersection5334<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5334<T> = UnionToIntersection5334<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5334<T extends unknown[], V> = [...T, V];

type TuplifyUnion5334<T, L = LastOf5334<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5334<TuplifyUnion5334<Exclude<T, L>>, L>;

type DeepPartial5334<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5334<T[P]> }
  : T;

type Paths5334<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5334<K, Paths5334<T[K], Prev5334[D]>> : never }[keyof T]
  : never;

type Prev5334 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5334<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5334 {
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

type ConfigPaths5334 = Paths5334<NestedConfig5334>;

interface HeavyProps5334 {
  config: DeepPartial5334<NestedConfig5334>;
  path?: ConfigPaths5334;
}

const HeavyComponent5334 = memo(function HeavyComponent5334({ config }: HeavyProps5334) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5334) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5334 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5334: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5334.displayName = 'HeavyComponent5334';
export default HeavyComponent5334;

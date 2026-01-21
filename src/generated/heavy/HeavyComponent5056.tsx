'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5056<T> = T extends (infer U)[]
  ? DeepReadonlyArray5056<U>
  : T extends object
  ? DeepReadonlyObject5056<T>
  : T;

interface DeepReadonlyArray5056<T> extends ReadonlyArray<DeepReadonly5056<T>> {}

type DeepReadonlyObject5056<T> = {
  readonly [P in keyof T]: DeepReadonly5056<T[P]>;
};

type UnionToIntersection5056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5056<T> = UnionToIntersection5056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5056<T extends unknown[], V> = [...T, V];

type TuplifyUnion5056<T, L = LastOf5056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5056<TuplifyUnion5056<Exclude<T, L>>, L>;

type DeepPartial5056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5056<T[P]> }
  : T;

type Paths5056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5056<K, Paths5056<T[K], Prev5056[D]>> : never }[keyof T]
  : never;

type Prev5056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5056 {
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

type ConfigPaths5056 = Paths5056<NestedConfig5056>;

interface HeavyProps5056 {
  config: DeepPartial5056<NestedConfig5056>;
  path?: ConfigPaths5056;
}

const HeavyComponent5056 = memo(function HeavyComponent5056({ config }: HeavyProps5056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5056.displayName = 'HeavyComponent5056';
export default HeavyComponent5056;

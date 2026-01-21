'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5107<T> = T extends (infer U)[]
  ? DeepReadonlyArray5107<U>
  : T extends object
  ? DeepReadonlyObject5107<T>
  : T;

interface DeepReadonlyArray5107<T> extends ReadonlyArray<DeepReadonly5107<T>> {}

type DeepReadonlyObject5107<T> = {
  readonly [P in keyof T]: DeepReadonly5107<T[P]>;
};

type UnionToIntersection5107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5107<T> = UnionToIntersection5107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5107<T extends unknown[], V> = [...T, V];

type TuplifyUnion5107<T, L = LastOf5107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5107<TuplifyUnion5107<Exclude<T, L>>, L>;

type DeepPartial5107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5107<T[P]> }
  : T;

type Paths5107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5107<K, Paths5107<T[K], Prev5107[D]>> : never }[keyof T]
  : never;

type Prev5107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5107 {
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

type ConfigPaths5107 = Paths5107<NestedConfig5107>;

interface HeavyProps5107 {
  config: DeepPartial5107<NestedConfig5107>;
  path?: ConfigPaths5107;
}

const HeavyComponent5107 = memo(function HeavyComponent5107({ config }: HeavyProps5107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5107.displayName = 'HeavyComponent5107';
export default HeavyComponent5107;

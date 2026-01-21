'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5381<T> = T extends (infer U)[]
  ? DeepReadonlyArray5381<U>
  : T extends object
  ? DeepReadonlyObject5381<T>
  : T;

interface DeepReadonlyArray5381<T> extends ReadonlyArray<DeepReadonly5381<T>> {}

type DeepReadonlyObject5381<T> = {
  readonly [P in keyof T]: DeepReadonly5381<T[P]>;
};

type UnionToIntersection5381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5381<T> = UnionToIntersection5381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5381<T extends unknown[], V> = [...T, V];

type TuplifyUnion5381<T, L = LastOf5381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5381<TuplifyUnion5381<Exclude<T, L>>, L>;

type DeepPartial5381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5381<T[P]> }
  : T;

type Paths5381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5381<K, Paths5381<T[K], Prev5381[D]>> : never }[keyof T]
  : never;

type Prev5381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5381 {
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

type ConfigPaths5381 = Paths5381<NestedConfig5381>;

interface HeavyProps5381 {
  config: DeepPartial5381<NestedConfig5381>;
  path?: ConfigPaths5381;
}

const HeavyComponent5381 = memo(function HeavyComponent5381({ config }: HeavyProps5381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5381.displayName = 'HeavyComponent5381';
export default HeavyComponent5381;

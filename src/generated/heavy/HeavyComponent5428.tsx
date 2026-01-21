'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5428<T> = T extends (infer U)[]
  ? DeepReadonlyArray5428<U>
  : T extends object
  ? DeepReadonlyObject5428<T>
  : T;

interface DeepReadonlyArray5428<T> extends ReadonlyArray<DeepReadonly5428<T>> {}

type DeepReadonlyObject5428<T> = {
  readonly [P in keyof T]: DeepReadonly5428<T[P]>;
};

type UnionToIntersection5428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5428<T> = UnionToIntersection5428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5428<T extends unknown[], V> = [...T, V];

type TuplifyUnion5428<T, L = LastOf5428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5428<TuplifyUnion5428<Exclude<T, L>>, L>;

type DeepPartial5428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5428<T[P]> }
  : T;

type Paths5428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5428<K, Paths5428<T[K], Prev5428[D]>> : never }[keyof T]
  : never;

type Prev5428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5428 {
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

type ConfigPaths5428 = Paths5428<NestedConfig5428>;

interface HeavyProps5428 {
  config: DeepPartial5428<NestedConfig5428>;
  path?: ConfigPaths5428;
}

const HeavyComponent5428 = memo(function HeavyComponent5428({ config }: HeavyProps5428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5428.displayName = 'HeavyComponent5428';
export default HeavyComponent5428;

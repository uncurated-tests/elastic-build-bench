'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5422<T> = T extends (infer U)[]
  ? DeepReadonlyArray5422<U>
  : T extends object
  ? DeepReadonlyObject5422<T>
  : T;

interface DeepReadonlyArray5422<T> extends ReadonlyArray<DeepReadonly5422<T>> {}

type DeepReadonlyObject5422<T> = {
  readonly [P in keyof T]: DeepReadonly5422<T[P]>;
};

type UnionToIntersection5422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5422<T> = UnionToIntersection5422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5422<T extends unknown[], V> = [...T, V];

type TuplifyUnion5422<T, L = LastOf5422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5422<TuplifyUnion5422<Exclude<T, L>>, L>;

type DeepPartial5422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5422<T[P]> }
  : T;

type Paths5422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5422<K, Paths5422<T[K], Prev5422[D]>> : never }[keyof T]
  : never;

type Prev5422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5422 {
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

type ConfigPaths5422 = Paths5422<NestedConfig5422>;

interface HeavyProps5422 {
  config: DeepPartial5422<NestedConfig5422>;
  path?: ConfigPaths5422;
}

const HeavyComponent5422 = memo(function HeavyComponent5422({ config }: HeavyProps5422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5422.displayName = 'HeavyComponent5422';
export default HeavyComponent5422;

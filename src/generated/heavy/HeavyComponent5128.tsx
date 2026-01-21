'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5128<T> = T extends (infer U)[]
  ? DeepReadonlyArray5128<U>
  : T extends object
  ? DeepReadonlyObject5128<T>
  : T;

interface DeepReadonlyArray5128<T> extends ReadonlyArray<DeepReadonly5128<T>> {}

type DeepReadonlyObject5128<T> = {
  readonly [P in keyof T]: DeepReadonly5128<T[P]>;
};

type UnionToIntersection5128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5128<T> = UnionToIntersection5128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5128<T extends unknown[], V> = [...T, V];

type TuplifyUnion5128<T, L = LastOf5128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5128<TuplifyUnion5128<Exclude<T, L>>, L>;

type DeepPartial5128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5128<T[P]> }
  : T;

type Paths5128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5128<K, Paths5128<T[K], Prev5128[D]>> : never }[keyof T]
  : never;

type Prev5128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5128 {
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

type ConfigPaths5128 = Paths5128<NestedConfig5128>;

interface HeavyProps5128 {
  config: DeepPartial5128<NestedConfig5128>;
  path?: ConfigPaths5128;
}

const HeavyComponent5128 = memo(function HeavyComponent5128({ config }: HeavyProps5128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5128.displayName = 'HeavyComponent5128';
export default HeavyComponent5128;

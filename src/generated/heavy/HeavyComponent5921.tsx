'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5921<T> = T extends (infer U)[]
  ? DeepReadonlyArray5921<U>
  : T extends object
  ? DeepReadonlyObject5921<T>
  : T;

interface DeepReadonlyArray5921<T> extends ReadonlyArray<DeepReadonly5921<T>> {}

type DeepReadonlyObject5921<T> = {
  readonly [P in keyof T]: DeepReadonly5921<T[P]>;
};

type UnionToIntersection5921<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5921<T> = UnionToIntersection5921<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5921<T extends unknown[], V> = [...T, V];

type TuplifyUnion5921<T, L = LastOf5921<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5921<TuplifyUnion5921<Exclude<T, L>>, L>;

type DeepPartial5921<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5921<T[P]> }
  : T;

type Paths5921<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5921<K, Paths5921<T[K], Prev5921[D]>> : never }[keyof T]
  : never;

type Prev5921 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5921<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5921 {
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

type ConfigPaths5921 = Paths5921<NestedConfig5921>;

interface HeavyProps5921 {
  config: DeepPartial5921<NestedConfig5921>;
  path?: ConfigPaths5921;
}

const HeavyComponent5921 = memo(function HeavyComponent5921({ config }: HeavyProps5921) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5921) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5921 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5921: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5921.displayName = 'HeavyComponent5921';
export default HeavyComponent5921;

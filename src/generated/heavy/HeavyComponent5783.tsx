'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5783<T> = T extends (infer U)[]
  ? DeepReadonlyArray5783<U>
  : T extends object
  ? DeepReadonlyObject5783<T>
  : T;

interface DeepReadonlyArray5783<T> extends ReadonlyArray<DeepReadonly5783<T>> {}

type DeepReadonlyObject5783<T> = {
  readonly [P in keyof T]: DeepReadonly5783<T[P]>;
};

type UnionToIntersection5783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5783<T> = UnionToIntersection5783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5783<T extends unknown[], V> = [...T, V];

type TuplifyUnion5783<T, L = LastOf5783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5783<TuplifyUnion5783<Exclude<T, L>>, L>;

type DeepPartial5783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5783<T[P]> }
  : T;

type Paths5783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5783<K, Paths5783<T[K], Prev5783[D]>> : never }[keyof T]
  : never;

type Prev5783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5783 {
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

type ConfigPaths5783 = Paths5783<NestedConfig5783>;

interface HeavyProps5783 {
  config: DeepPartial5783<NestedConfig5783>;
  path?: ConfigPaths5783;
}

const HeavyComponent5783 = memo(function HeavyComponent5783({ config }: HeavyProps5783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5783.displayName = 'HeavyComponent5783';
export default HeavyComponent5783;

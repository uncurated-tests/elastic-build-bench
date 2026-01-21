'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5808<T> = T extends (infer U)[]
  ? DeepReadonlyArray5808<U>
  : T extends object
  ? DeepReadonlyObject5808<T>
  : T;

interface DeepReadonlyArray5808<T> extends ReadonlyArray<DeepReadonly5808<T>> {}

type DeepReadonlyObject5808<T> = {
  readonly [P in keyof T]: DeepReadonly5808<T[P]>;
};

type UnionToIntersection5808<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5808<T> = UnionToIntersection5808<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5808<T extends unknown[], V> = [...T, V];

type TuplifyUnion5808<T, L = LastOf5808<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5808<TuplifyUnion5808<Exclude<T, L>>, L>;

type DeepPartial5808<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5808<T[P]> }
  : T;

type Paths5808<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5808<K, Paths5808<T[K], Prev5808[D]>> : never }[keyof T]
  : never;

type Prev5808 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5808<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5808 {
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

type ConfigPaths5808 = Paths5808<NestedConfig5808>;

interface HeavyProps5808 {
  config: DeepPartial5808<NestedConfig5808>;
  path?: ConfigPaths5808;
}

const HeavyComponent5808 = memo(function HeavyComponent5808({ config }: HeavyProps5808) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5808) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5808 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5808: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5808.displayName = 'HeavyComponent5808';
export default HeavyComponent5808;

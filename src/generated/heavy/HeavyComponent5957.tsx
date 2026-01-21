'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5957<T> = T extends (infer U)[]
  ? DeepReadonlyArray5957<U>
  : T extends object
  ? DeepReadonlyObject5957<T>
  : T;

interface DeepReadonlyArray5957<T> extends ReadonlyArray<DeepReadonly5957<T>> {}

type DeepReadonlyObject5957<T> = {
  readonly [P in keyof T]: DeepReadonly5957<T[P]>;
};

type UnionToIntersection5957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5957<T> = UnionToIntersection5957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5957<T extends unknown[], V> = [...T, V];

type TuplifyUnion5957<T, L = LastOf5957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5957<TuplifyUnion5957<Exclude<T, L>>, L>;

type DeepPartial5957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5957<T[P]> }
  : T;

type Paths5957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5957<K, Paths5957<T[K], Prev5957[D]>> : never }[keyof T]
  : never;

type Prev5957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5957 {
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

type ConfigPaths5957 = Paths5957<NestedConfig5957>;

interface HeavyProps5957 {
  config: DeepPartial5957<NestedConfig5957>;
  path?: ConfigPaths5957;
}

const HeavyComponent5957 = memo(function HeavyComponent5957({ config }: HeavyProps5957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5957.displayName = 'HeavyComponent5957';
export default HeavyComponent5957;

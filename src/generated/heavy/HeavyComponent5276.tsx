'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5276<T> = T extends (infer U)[]
  ? DeepReadonlyArray5276<U>
  : T extends object
  ? DeepReadonlyObject5276<T>
  : T;

interface DeepReadonlyArray5276<T> extends ReadonlyArray<DeepReadonly5276<T>> {}

type DeepReadonlyObject5276<T> = {
  readonly [P in keyof T]: DeepReadonly5276<T[P]>;
};

type UnionToIntersection5276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5276<T> = UnionToIntersection5276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5276<T extends unknown[], V> = [...T, V];

type TuplifyUnion5276<T, L = LastOf5276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5276<TuplifyUnion5276<Exclude<T, L>>, L>;

type DeepPartial5276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5276<T[P]> }
  : T;

type Paths5276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5276<K, Paths5276<T[K], Prev5276[D]>> : never }[keyof T]
  : never;

type Prev5276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5276 {
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

type ConfigPaths5276 = Paths5276<NestedConfig5276>;

interface HeavyProps5276 {
  config: DeepPartial5276<NestedConfig5276>;
  path?: ConfigPaths5276;
}

const HeavyComponent5276 = memo(function HeavyComponent5276({ config }: HeavyProps5276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5276.displayName = 'HeavyComponent5276';
export default HeavyComponent5276;

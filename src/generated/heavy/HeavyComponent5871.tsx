'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5871<T> = T extends (infer U)[]
  ? DeepReadonlyArray5871<U>
  : T extends object
  ? DeepReadonlyObject5871<T>
  : T;

interface DeepReadonlyArray5871<T> extends ReadonlyArray<DeepReadonly5871<T>> {}

type DeepReadonlyObject5871<T> = {
  readonly [P in keyof T]: DeepReadonly5871<T[P]>;
};

type UnionToIntersection5871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5871<T> = UnionToIntersection5871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5871<T extends unknown[], V> = [...T, V];

type TuplifyUnion5871<T, L = LastOf5871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5871<TuplifyUnion5871<Exclude<T, L>>, L>;

type DeepPartial5871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5871<T[P]> }
  : T;

type Paths5871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5871<K, Paths5871<T[K], Prev5871[D]>> : never }[keyof T]
  : never;

type Prev5871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5871 {
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

type ConfigPaths5871 = Paths5871<NestedConfig5871>;

interface HeavyProps5871 {
  config: DeepPartial5871<NestedConfig5871>;
  path?: ConfigPaths5871;
}

const HeavyComponent5871 = memo(function HeavyComponent5871({ config }: HeavyProps5871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5871.displayName = 'HeavyComponent5871';
export default HeavyComponent5871;

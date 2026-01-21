'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5187<T> = T extends (infer U)[]
  ? DeepReadonlyArray5187<U>
  : T extends object
  ? DeepReadonlyObject5187<T>
  : T;

interface DeepReadonlyArray5187<T> extends ReadonlyArray<DeepReadonly5187<T>> {}

type DeepReadonlyObject5187<T> = {
  readonly [P in keyof T]: DeepReadonly5187<T[P]>;
};

type UnionToIntersection5187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5187<T> = UnionToIntersection5187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5187<T extends unknown[], V> = [...T, V];

type TuplifyUnion5187<T, L = LastOf5187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5187<TuplifyUnion5187<Exclude<T, L>>, L>;

type DeepPartial5187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5187<T[P]> }
  : T;

type Paths5187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5187<K, Paths5187<T[K], Prev5187[D]>> : never }[keyof T]
  : never;

type Prev5187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5187 {
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

type ConfigPaths5187 = Paths5187<NestedConfig5187>;

interface HeavyProps5187 {
  config: DeepPartial5187<NestedConfig5187>;
  path?: ConfigPaths5187;
}

const HeavyComponent5187 = memo(function HeavyComponent5187({ config }: HeavyProps5187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5187.displayName = 'HeavyComponent5187';
export default HeavyComponent5187;

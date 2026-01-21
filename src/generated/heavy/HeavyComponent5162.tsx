'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5162<T> = T extends (infer U)[]
  ? DeepReadonlyArray5162<U>
  : T extends object
  ? DeepReadonlyObject5162<T>
  : T;

interface DeepReadonlyArray5162<T> extends ReadonlyArray<DeepReadonly5162<T>> {}

type DeepReadonlyObject5162<T> = {
  readonly [P in keyof T]: DeepReadonly5162<T[P]>;
};

type UnionToIntersection5162<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5162<T> = UnionToIntersection5162<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5162<T extends unknown[], V> = [...T, V];

type TuplifyUnion5162<T, L = LastOf5162<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5162<TuplifyUnion5162<Exclude<T, L>>, L>;

type DeepPartial5162<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5162<T[P]> }
  : T;

type Paths5162<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5162<K, Paths5162<T[K], Prev5162[D]>> : never }[keyof T]
  : never;

type Prev5162 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5162<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5162 {
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

type ConfigPaths5162 = Paths5162<NestedConfig5162>;

interface HeavyProps5162 {
  config: DeepPartial5162<NestedConfig5162>;
  path?: ConfigPaths5162;
}

const HeavyComponent5162 = memo(function HeavyComponent5162({ config }: HeavyProps5162) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5162) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5162 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5162: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5162.displayName = 'HeavyComponent5162';
export default HeavyComponent5162;

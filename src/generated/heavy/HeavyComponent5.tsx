'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5<T> = T extends (infer U)[]
  ? DeepReadonlyArray5<U>
  : T extends object
  ? DeepReadonlyObject5<T>
  : T;

interface DeepReadonlyArray5<T> extends ReadonlyArray<DeepReadonly5<T>> {}

type DeepReadonlyObject5<T> = {
  readonly [P in keyof T]: DeepReadonly5<T[P]>;
};

type UnionToIntersection5<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5<T> = UnionToIntersection5<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5<T extends unknown[], V> = [...T, V];

type TuplifyUnion5<T, L = LastOf5<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5<TuplifyUnion5<Exclude<T, L>>, L>;

type DeepPartial5<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5<T[P]> }
  : T;

type Paths5<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5<K, Paths5<T[K], Prev5[D]>> : never }[keyof T]
  : never;

type Prev5 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5 {
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

type ConfigPaths5 = Paths5<NestedConfig5>;

interface HeavyProps5 {
  config: DeepPartial5<NestedConfig5>;
  path?: ConfigPaths5;
}

const HeavyComponent5 = memo(function HeavyComponent5({ config }: HeavyProps5) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5.displayName = 'HeavyComponent5';
export default HeavyComponent5;

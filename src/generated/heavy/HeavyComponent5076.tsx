'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5076<T> = T extends (infer U)[]
  ? DeepReadonlyArray5076<U>
  : T extends object
  ? DeepReadonlyObject5076<T>
  : T;

interface DeepReadonlyArray5076<T> extends ReadonlyArray<DeepReadonly5076<T>> {}

type DeepReadonlyObject5076<T> = {
  readonly [P in keyof T]: DeepReadonly5076<T[P]>;
};

type UnionToIntersection5076<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5076<T> = UnionToIntersection5076<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5076<T extends unknown[], V> = [...T, V];

type TuplifyUnion5076<T, L = LastOf5076<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5076<TuplifyUnion5076<Exclude<T, L>>, L>;

type DeepPartial5076<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5076<T[P]> }
  : T;

type Paths5076<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5076<K, Paths5076<T[K], Prev5076[D]>> : never }[keyof T]
  : never;

type Prev5076 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5076<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5076 {
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

type ConfigPaths5076 = Paths5076<NestedConfig5076>;

interface HeavyProps5076 {
  config: DeepPartial5076<NestedConfig5076>;
  path?: ConfigPaths5076;
}

const HeavyComponent5076 = memo(function HeavyComponent5076({ config }: HeavyProps5076) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5076) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5076 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5076: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5076.displayName = 'HeavyComponent5076';
export default HeavyComponent5076;

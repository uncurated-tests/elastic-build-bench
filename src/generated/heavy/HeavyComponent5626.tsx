'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5626<T> = T extends (infer U)[]
  ? DeepReadonlyArray5626<U>
  : T extends object
  ? DeepReadonlyObject5626<T>
  : T;

interface DeepReadonlyArray5626<T> extends ReadonlyArray<DeepReadonly5626<T>> {}

type DeepReadonlyObject5626<T> = {
  readonly [P in keyof T]: DeepReadonly5626<T[P]>;
};

type UnionToIntersection5626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5626<T> = UnionToIntersection5626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5626<T extends unknown[], V> = [...T, V];

type TuplifyUnion5626<T, L = LastOf5626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5626<TuplifyUnion5626<Exclude<T, L>>, L>;

type DeepPartial5626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5626<T[P]> }
  : T;

type Paths5626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5626<K, Paths5626<T[K], Prev5626[D]>> : never }[keyof T]
  : never;

type Prev5626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5626 {
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

type ConfigPaths5626 = Paths5626<NestedConfig5626>;

interface HeavyProps5626 {
  config: DeepPartial5626<NestedConfig5626>;
  path?: ConfigPaths5626;
}

const HeavyComponent5626 = memo(function HeavyComponent5626({ config }: HeavyProps5626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5626.displayName = 'HeavyComponent5626';
export default HeavyComponent5626;

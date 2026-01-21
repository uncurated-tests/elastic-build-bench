'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5094<T> = T extends (infer U)[]
  ? DeepReadonlyArray5094<U>
  : T extends object
  ? DeepReadonlyObject5094<T>
  : T;

interface DeepReadonlyArray5094<T> extends ReadonlyArray<DeepReadonly5094<T>> {}

type DeepReadonlyObject5094<T> = {
  readonly [P in keyof T]: DeepReadonly5094<T[P]>;
};

type UnionToIntersection5094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5094<T> = UnionToIntersection5094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5094<T extends unknown[], V> = [...T, V];

type TuplifyUnion5094<T, L = LastOf5094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5094<TuplifyUnion5094<Exclude<T, L>>, L>;

type DeepPartial5094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5094<T[P]> }
  : T;

type Paths5094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5094<K, Paths5094<T[K], Prev5094[D]>> : never }[keyof T]
  : never;

type Prev5094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5094 {
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

type ConfigPaths5094 = Paths5094<NestedConfig5094>;

interface HeavyProps5094 {
  config: DeepPartial5094<NestedConfig5094>;
  path?: ConfigPaths5094;
}

const HeavyComponent5094 = memo(function HeavyComponent5094({ config }: HeavyProps5094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5094.displayName = 'HeavyComponent5094';
export default HeavyComponent5094;

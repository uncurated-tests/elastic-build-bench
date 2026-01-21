'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5196<T> = T extends (infer U)[]
  ? DeepReadonlyArray5196<U>
  : T extends object
  ? DeepReadonlyObject5196<T>
  : T;

interface DeepReadonlyArray5196<T> extends ReadonlyArray<DeepReadonly5196<T>> {}

type DeepReadonlyObject5196<T> = {
  readonly [P in keyof T]: DeepReadonly5196<T[P]>;
};

type UnionToIntersection5196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5196<T> = UnionToIntersection5196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5196<T extends unknown[], V> = [...T, V];

type TuplifyUnion5196<T, L = LastOf5196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5196<TuplifyUnion5196<Exclude<T, L>>, L>;

type DeepPartial5196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5196<T[P]> }
  : T;

type Paths5196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5196<K, Paths5196<T[K], Prev5196[D]>> : never }[keyof T]
  : never;

type Prev5196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5196 {
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

type ConfigPaths5196 = Paths5196<NestedConfig5196>;

interface HeavyProps5196 {
  config: DeepPartial5196<NestedConfig5196>;
  path?: ConfigPaths5196;
}

const HeavyComponent5196 = memo(function HeavyComponent5196({ config }: HeavyProps5196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5196.displayName = 'HeavyComponent5196';
export default HeavyComponent5196;

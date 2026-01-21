'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5118<T> = T extends (infer U)[]
  ? DeepReadonlyArray5118<U>
  : T extends object
  ? DeepReadonlyObject5118<T>
  : T;

interface DeepReadonlyArray5118<T> extends ReadonlyArray<DeepReadonly5118<T>> {}

type DeepReadonlyObject5118<T> = {
  readonly [P in keyof T]: DeepReadonly5118<T[P]>;
};

type UnionToIntersection5118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5118<T> = UnionToIntersection5118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5118<T extends unknown[], V> = [...T, V];

type TuplifyUnion5118<T, L = LastOf5118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5118<TuplifyUnion5118<Exclude<T, L>>, L>;

type DeepPartial5118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5118<T[P]> }
  : T;

type Paths5118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5118<K, Paths5118<T[K], Prev5118[D]>> : never }[keyof T]
  : never;

type Prev5118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5118 {
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

type ConfigPaths5118 = Paths5118<NestedConfig5118>;

interface HeavyProps5118 {
  config: DeepPartial5118<NestedConfig5118>;
  path?: ConfigPaths5118;
}

const HeavyComponent5118 = memo(function HeavyComponent5118({ config }: HeavyProps5118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5118.displayName = 'HeavyComponent5118';
export default HeavyComponent5118;

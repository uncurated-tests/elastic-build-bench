'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5774<T> = T extends (infer U)[]
  ? DeepReadonlyArray5774<U>
  : T extends object
  ? DeepReadonlyObject5774<T>
  : T;

interface DeepReadonlyArray5774<T> extends ReadonlyArray<DeepReadonly5774<T>> {}

type DeepReadonlyObject5774<T> = {
  readonly [P in keyof T]: DeepReadonly5774<T[P]>;
};

type UnionToIntersection5774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5774<T> = UnionToIntersection5774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5774<T extends unknown[], V> = [...T, V];

type TuplifyUnion5774<T, L = LastOf5774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5774<TuplifyUnion5774<Exclude<T, L>>, L>;

type DeepPartial5774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5774<T[P]> }
  : T;

type Paths5774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5774<K, Paths5774<T[K], Prev5774[D]>> : never }[keyof T]
  : never;

type Prev5774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5774 {
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

type ConfigPaths5774 = Paths5774<NestedConfig5774>;

interface HeavyProps5774 {
  config: DeepPartial5774<NestedConfig5774>;
  path?: ConfigPaths5774;
}

const HeavyComponent5774 = memo(function HeavyComponent5774({ config }: HeavyProps5774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5774.displayName = 'HeavyComponent5774';
export default HeavyComponent5774;

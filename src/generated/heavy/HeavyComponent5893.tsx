'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5893<T> = T extends (infer U)[]
  ? DeepReadonlyArray5893<U>
  : T extends object
  ? DeepReadonlyObject5893<T>
  : T;

interface DeepReadonlyArray5893<T> extends ReadonlyArray<DeepReadonly5893<T>> {}

type DeepReadonlyObject5893<T> = {
  readonly [P in keyof T]: DeepReadonly5893<T[P]>;
};

type UnionToIntersection5893<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5893<T> = UnionToIntersection5893<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5893<T extends unknown[], V> = [...T, V];

type TuplifyUnion5893<T, L = LastOf5893<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5893<TuplifyUnion5893<Exclude<T, L>>, L>;

type DeepPartial5893<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5893<T[P]> }
  : T;

type Paths5893<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5893<K, Paths5893<T[K], Prev5893[D]>> : never }[keyof T]
  : never;

type Prev5893 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5893<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5893 {
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

type ConfigPaths5893 = Paths5893<NestedConfig5893>;

interface HeavyProps5893 {
  config: DeepPartial5893<NestedConfig5893>;
  path?: ConfigPaths5893;
}

const HeavyComponent5893 = memo(function HeavyComponent5893({ config }: HeavyProps5893) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5893) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5893 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5893: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5893.displayName = 'HeavyComponent5893';
export default HeavyComponent5893;

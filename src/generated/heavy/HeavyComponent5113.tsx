'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5113<T> = T extends (infer U)[]
  ? DeepReadonlyArray5113<U>
  : T extends object
  ? DeepReadonlyObject5113<T>
  : T;

interface DeepReadonlyArray5113<T> extends ReadonlyArray<DeepReadonly5113<T>> {}

type DeepReadonlyObject5113<T> = {
  readonly [P in keyof T]: DeepReadonly5113<T[P]>;
};

type UnionToIntersection5113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5113<T> = UnionToIntersection5113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5113<T extends unknown[], V> = [...T, V];

type TuplifyUnion5113<T, L = LastOf5113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5113<TuplifyUnion5113<Exclude<T, L>>, L>;

type DeepPartial5113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5113<T[P]> }
  : T;

type Paths5113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5113<K, Paths5113<T[K], Prev5113[D]>> : never }[keyof T]
  : never;

type Prev5113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5113 {
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

type ConfigPaths5113 = Paths5113<NestedConfig5113>;

interface HeavyProps5113 {
  config: DeepPartial5113<NestedConfig5113>;
  path?: ConfigPaths5113;
}

const HeavyComponent5113 = memo(function HeavyComponent5113({ config }: HeavyProps5113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5113.displayName = 'HeavyComponent5113';
export default HeavyComponent5113;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5858<T> = T extends (infer U)[]
  ? DeepReadonlyArray5858<U>
  : T extends object
  ? DeepReadonlyObject5858<T>
  : T;

interface DeepReadonlyArray5858<T> extends ReadonlyArray<DeepReadonly5858<T>> {}

type DeepReadonlyObject5858<T> = {
  readonly [P in keyof T]: DeepReadonly5858<T[P]>;
};

type UnionToIntersection5858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5858<T> = UnionToIntersection5858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5858<T extends unknown[], V> = [...T, V];

type TuplifyUnion5858<T, L = LastOf5858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5858<TuplifyUnion5858<Exclude<T, L>>, L>;

type DeepPartial5858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5858<T[P]> }
  : T;

type Paths5858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5858<K, Paths5858<T[K], Prev5858[D]>> : never }[keyof T]
  : never;

type Prev5858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5858 {
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

type ConfigPaths5858 = Paths5858<NestedConfig5858>;

interface HeavyProps5858 {
  config: DeepPartial5858<NestedConfig5858>;
  path?: ConfigPaths5858;
}

const HeavyComponent5858 = memo(function HeavyComponent5858({ config }: HeavyProps5858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5858.displayName = 'HeavyComponent5858';
export default HeavyComponent5858;

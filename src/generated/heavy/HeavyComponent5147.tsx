'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5147<T> = T extends (infer U)[]
  ? DeepReadonlyArray5147<U>
  : T extends object
  ? DeepReadonlyObject5147<T>
  : T;

interface DeepReadonlyArray5147<T> extends ReadonlyArray<DeepReadonly5147<T>> {}

type DeepReadonlyObject5147<T> = {
  readonly [P in keyof T]: DeepReadonly5147<T[P]>;
};

type UnionToIntersection5147<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5147<T> = UnionToIntersection5147<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5147<T extends unknown[], V> = [...T, V];

type TuplifyUnion5147<T, L = LastOf5147<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5147<TuplifyUnion5147<Exclude<T, L>>, L>;

type DeepPartial5147<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5147<T[P]> }
  : T;

type Paths5147<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5147<K, Paths5147<T[K], Prev5147[D]>> : never }[keyof T]
  : never;

type Prev5147 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5147<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5147 {
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

type ConfigPaths5147 = Paths5147<NestedConfig5147>;

interface HeavyProps5147 {
  config: DeepPartial5147<NestedConfig5147>;
  path?: ConfigPaths5147;
}

const HeavyComponent5147 = memo(function HeavyComponent5147({ config }: HeavyProps5147) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5147) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5147 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5147: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5147.displayName = 'HeavyComponent5147';
export default HeavyComponent5147;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5827<T> = T extends (infer U)[]
  ? DeepReadonlyArray5827<U>
  : T extends object
  ? DeepReadonlyObject5827<T>
  : T;

interface DeepReadonlyArray5827<T> extends ReadonlyArray<DeepReadonly5827<T>> {}

type DeepReadonlyObject5827<T> = {
  readonly [P in keyof T]: DeepReadonly5827<T[P]>;
};

type UnionToIntersection5827<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5827<T> = UnionToIntersection5827<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5827<T extends unknown[], V> = [...T, V];

type TuplifyUnion5827<T, L = LastOf5827<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5827<TuplifyUnion5827<Exclude<T, L>>, L>;

type DeepPartial5827<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5827<T[P]> }
  : T;

type Paths5827<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5827<K, Paths5827<T[K], Prev5827[D]>> : never }[keyof T]
  : never;

type Prev5827 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5827<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5827 {
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

type ConfigPaths5827 = Paths5827<NestedConfig5827>;

interface HeavyProps5827 {
  config: DeepPartial5827<NestedConfig5827>;
  path?: ConfigPaths5827;
}

const HeavyComponent5827 = memo(function HeavyComponent5827({ config }: HeavyProps5827) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5827) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5827 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5827: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5827.displayName = 'HeavyComponent5827';
export default HeavyComponent5827;

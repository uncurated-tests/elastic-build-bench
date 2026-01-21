'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5401<T> = T extends (infer U)[]
  ? DeepReadonlyArray5401<U>
  : T extends object
  ? DeepReadonlyObject5401<T>
  : T;

interface DeepReadonlyArray5401<T> extends ReadonlyArray<DeepReadonly5401<T>> {}

type DeepReadonlyObject5401<T> = {
  readonly [P in keyof T]: DeepReadonly5401<T[P]>;
};

type UnionToIntersection5401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5401<T> = UnionToIntersection5401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5401<T extends unknown[], V> = [...T, V];

type TuplifyUnion5401<T, L = LastOf5401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5401<TuplifyUnion5401<Exclude<T, L>>, L>;

type DeepPartial5401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5401<T[P]> }
  : T;

type Paths5401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5401<K, Paths5401<T[K], Prev5401[D]>> : never }[keyof T]
  : never;

type Prev5401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5401 {
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

type ConfigPaths5401 = Paths5401<NestedConfig5401>;

interface HeavyProps5401 {
  config: DeepPartial5401<NestedConfig5401>;
  path?: ConfigPaths5401;
}

const HeavyComponent5401 = memo(function HeavyComponent5401({ config }: HeavyProps5401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5401.displayName = 'HeavyComponent5401';
export default HeavyComponent5401;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5867<T> = T extends (infer U)[]
  ? DeepReadonlyArray5867<U>
  : T extends object
  ? DeepReadonlyObject5867<T>
  : T;

interface DeepReadonlyArray5867<T> extends ReadonlyArray<DeepReadonly5867<T>> {}

type DeepReadonlyObject5867<T> = {
  readonly [P in keyof T]: DeepReadonly5867<T[P]>;
};

type UnionToIntersection5867<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5867<T> = UnionToIntersection5867<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5867<T extends unknown[], V> = [...T, V];

type TuplifyUnion5867<T, L = LastOf5867<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5867<TuplifyUnion5867<Exclude<T, L>>, L>;

type DeepPartial5867<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5867<T[P]> }
  : T;

type Paths5867<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5867<K, Paths5867<T[K], Prev5867[D]>> : never }[keyof T]
  : never;

type Prev5867 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5867<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5867 {
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

type ConfigPaths5867 = Paths5867<NestedConfig5867>;

interface HeavyProps5867 {
  config: DeepPartial5867<NestedConfig5867>;
  path?: ConfigPaths5867;
}

const HeavyComponent5867 = memo(function HeavyComponent5867({ config }: HeavyProps5867) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5867) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5867 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5867: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5867.displayName = 'HeavyComponent5867';
export default HeavyComponent5867;

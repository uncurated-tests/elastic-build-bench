'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5101<T> = T extends (infer U)[]
  ? DeepReadonlyArray5101<U>
  : T extends object
  ? DeepReadonlyObject5101<T>
  : T;

interface DeepReadonlyArray5101<T> extends ReadonlyArray<DeepReadonly5101<T>> {}

type DeepReadonlyObject5101<T> = {
  readonly [P in keyof T]: DeepReadonly5101<T[P]>;
};

type UnionToIntersection5101<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5101<T> = UnionToIntersection5101<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5101<T extends unknown[], V> = [...T, V];

type TuplifyUnion5101<T, L = LastOf5101<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5101<TuplifyUnion5101<Exclude<T, L>>, L>;

type DeepPartial5101<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5101<T[P]> }
  : T;

type Paths5101<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5101<K, Paths5101<T[K], Prev5101[D]>> : never }[keyof T]
  : never;

type Prev5101 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5101<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5101 {
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

type ConfigPaths5101 = Paths5101<NestedConfig5101>;

interface HeavyProps5101 {
  config: DeepPartial5101<NestedConfig5101>;
  path?: ConfigPaths5101;
}

const HeavyComponent5101 = memo(function HeavyComponent5101({ config }: HeavyProps5101) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5101) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5101 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5101: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5101.displayName = 'HeavyComponent5101';
export default HeavyComponent5101;

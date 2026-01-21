'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5674<T> = T extends (infer U)[]
  ? DeepReadonlyArray5674<U>
  : T extends object
  ? DeepReadonlyObject5674<T>
  : T;

interface DeepReadonlyArray5674<T> extends ReadonlyArray<DeepReadonly5674<T>> {}

type DeepReadonlyObject5674<T> = {
  readonly [P in keyof T]: DeepReadonly5674<T[P]>;
};

type UnionToIntersection5674<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5674<T> = UnionToIntersection5674<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5674<T extends unknown[], V> = [...T, V];

type TuplifyUnion5674<T, L = LastOf5674<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5674<TuplifyUnion5674<Exclude<T, L>>, L>;

type DeepPartial5674<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5674<T[P]> }
  : T;

type Paths5674<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5674<K, Paths5674<T[K], Prev5674[D]>> : never }[keyof T]
  : never;

type Prev5674 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5674<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5674 {
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

type ConfigPaths5674 = Paths5674<NestedConfig5674>;

interface HeavyProps5674 {
  config: DeepPartial5674<NestedConfig5674>;
  path?: ConfigPaths5674;
}

const HeavyComponent5674 = memo(function HeavyComponent5674({ config }: HeavyProps5674) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5674) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5674 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5674: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5674.displayName = 'HeavyComponent5674';
export default HeavyComponent5674;

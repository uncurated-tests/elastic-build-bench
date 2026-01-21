'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5801<T> = T extends (infer U)[]
  ? DeepReadonlyArray5801<U>
  : T extends object
  ? DeepReadonlyObject5801<T>
  : T;

interface DeepReadonlyArray5801<T> extends ReadonlyArray<DeepReadonly5801<T>> {}

type DeepReadonlyObject5801<T> = {
  readonly [P in keyof T]: DeepReadonly5801<T[P]>;
};

type UnionToIntersection5801<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5801<T> = UnionToIntersection5801<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5801<T extends unknown[], V> = [...T, V];

type TuplifyUnion5801<T, L = LastOf5801<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5801<TuplifyUnion5801<Exclude<T, L>>, L>;

type DeepPartial5801<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5801<T[P]> }
  : T;

type Paths5801<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5801<K, Paths5801<T[K], Prev5801[D]>> : never }[keyof T]
  : never;

type Prev5801 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5801<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5801 {
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

type ConfigPaths5801 = Paths5801<NestedConfig5801>;

interface HeavyProps5801 {
  config: DeepPartial5801<NestedConfig5801>;
  path?: ConfigPaths5801;
}

const HeavyComponent5801 = memo(function HeavyComponent5801({ config }: HeavyProps5801) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5801) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5801 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5801: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5801.displayName = 'HeavyComponent5801';
export default HeavyComponent5801;

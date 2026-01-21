'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5989<T> = T extends (infer U)[]
  ? DeepReadonlyArray5989<U>
  : T extends object
  ? DeepReadonlyObject5989<T>
  : T;

interface DeepReadonlyArray5989<T> extends ReadonlyArray<DeepReadonly5989<T>> {}

type DeepReadonlyObject5989<T> = {
  readonly [P in keyof T]: DeepReadonly5989<T[P]>;
};

type UnionToIntersection5989<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5989<T> = UnionToIntersection5989<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5989<T extends unknown[], V> = [...T, V];

type TuplifyUnion5989<T, L = LastOf5989<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5989<TuplifyUnion5989<Exclude<T, L>>, L>;

type DeepPartial5989<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5989<T[P]> }
  : T;

type Paths5989<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5989<K, Paths5989<T[K], Prev5989[D]>> : never }[keyof T]
  : never;

type Prev5989 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5989<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5989 {
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

type ConfigPaths5989 = Paths5989<NestedConfig5989>;

interface HeavyProps5989 {
  config: DeepPartial5989<NestedConfig5989>;
  path?: ConfigPaths5989;
}

const HeavyComponent5989 = memo(function HeavyComponent5989({ config }: HeavyProps5989) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5989) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5989 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5989: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5989.displayName = 'HeavyComponent5989';
export default HeavyComponent5989;

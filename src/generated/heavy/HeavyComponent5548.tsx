'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5548<T> = T extends (infer U)[]
  ? DeepReadonlyArray5548<U>
  : T extends object
  ? DeepReadonlyObject5548<T>
  : T;

interface DeepReadonlyArray5548<T> extends ReadonlyArray<DeepReadonly5548<T>> {}

type DeepReadonlyObject5548<T> = {
  readonly [P in keyof T]: DeepReadonly5548<T[P]>;
};

type UnionToIntersection5548<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5548<T> = UnionToIntersection5548<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5548<T extends unknown[], V> = [...T, V];

type TuplifyUnion5548<T, L = LastOf5548<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5548<TuplifyUnion5548<Exclude<T, L>>, L>;

type DeepPartial5548<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5548<T[P]> }
  : T;

type Paths5548<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5548<K, Paths5548<T[K], Prev5548[D]>> : never }[keyof T]
  : never;

type Prev5548 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5548<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5548 {
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

type ConfigPaths5548 = Paths5548<NestedConfig5548>;

interface HeavyProps5548 {
  config: DeepPartial5548<NestedConfig5548>;
  path?: ConfigPaths5548;
}

const HeavyComponent5548 = memo(function HeavyComponent5548({ config }: HeavyProps5548) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5548) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5548 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5548: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5548.displayName = 'HeavyComponent5548';
export default HeavyComponent5548;

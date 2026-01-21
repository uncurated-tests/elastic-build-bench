'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5877<T> = T extends (infer U)[]
  ? DeepReadonlyArray5877<U>
  : T extends object
  ? DeepReadonlyObject5877<T>
  : T;

interface DeepReadonlyArray5877<T> extends ReadonlyArray<DeepReadonly5877<T>> {}

type DeepReadonlyObject5877<T> = {
  readonly [P in keyof T]: DeepReadonly5877<T[P]>;
};

type UnionToIntersection5877<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5877<T> = UnionToIntersection5877<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5877<T extends unknown[], V> = [...T, V];

type TuplifyUnion5877<T, L = LastOf5877<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5877<TuplifyUnion5877<Exclude<T, L>>, L>;

type DeepPartial5877<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5877<T[P]> }
  : T;

type Paths5877<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5877<K, Paths5877<T[K], Prev5877[D]>> : never }[keyof T]
  : never;

type Prev5877 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5877<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5877 {
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

type ConfigPaths5877 = Paths5877<NestedConfig5877>;

interface HeavyProps5877 {
  config: DeepPartial5877<NestedConfig5877>;
  path?: ConfigPaths5877;
}

const HeavyComponent5877 = memo(function HeavyComponent5877({ config }: HeavyProps5877) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5877) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5877 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5877: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5877.displayName = 'HeavyComponent5877';
export default HeavyComponent5877;

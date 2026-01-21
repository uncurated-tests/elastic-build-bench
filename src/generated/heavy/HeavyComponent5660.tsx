'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5660<T> = T extends (infer U)[]
  ? DeepReadonlyArray5660<U>
  : T extends object
  ? DeepReadonlyObject5660<T>
  : T;

interface DeepReadonlyArray5660<T> extends ReadonlyArray<DeepReadonly5660<T>> {}

type DeepReadonlyObject5660<T> = {
  readonly [P in keyof T]: DeepReadonly5660<T[P]>;
};

type UnionToIntersection5660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5660<T> = UnionToIntersection5660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5660<T extends unknown[], V> = [...T, V];

type TuplifyUnion5660<T, L = LastOf5660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5660<TuplifyUnion5660<Exclude<T, L>>, L>;

type DeepPartial5660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5660<T[P]> }
  : T;

type Paths5660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5660<K, Paths5660<T[K], Prev5660[D]>> : never }[keyof T]
  : never;

type Prev5660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5660 {
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

type ConfigPaths5660 = Paths5660<NestedConfig5660>;

interface HeavyProps5660 {
  config: DeepPartial5660<NestedConfig5660>;
  path?: ConfigPaths5660;
}

const HeavyComponent5660 = memo(function HeavyComponent5660({ config }: HeavyProps5660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5660.displayName = 'HeavyComponent5660';
export default HeavyComponent5660;

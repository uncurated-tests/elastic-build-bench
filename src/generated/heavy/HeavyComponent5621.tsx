'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5621<T> = T extends (infer U)[]
  ? DeepReadonlyArray5621<U>
  : T extends object
  ? DeepReadonlyObject5621<T>
  : T;

interface DeepReadonlyArray5621<T> extends ReadonlyArray<DeepReadonly5621<T>> {}

type DeepReadonlyObject5621<T> = {
  readonly [P in keyof T]: DeepReadonly5621<T[P]>;
};

type UnionToIntersection5621<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5621<T> = UnionToIntersection5621<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5621<T extends unknown[], V> = [...T, V];

type TuplifyUnion5621<T, L = LastOf5621<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5621<TuplifyUnion5621<Exclude<T, L>>, L>;

type DeepPartial5621<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5621<T[P]> }
  : T;

type Paths5621<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5621<K, Paths5621<T[K], Prev5621[D]>> : never }[keyof T]
  : never;

type Prev5621 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5621<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5621 {
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

type ConfigPaths5621 = Paths5621<NestedConfig5621>;

interface HeavyProps5621 {
  config: DeepPartial5621<NestedConfig5621>;
  path?: ConfigPaths5621;
}

const HeavyComponent5621 = memo(function HeavyComponent5621({ config }: HeavyProps5621) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5621) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5621 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5621: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5621.displayName = 'HeavyComponent5621';
export default HeavyComponent5621;

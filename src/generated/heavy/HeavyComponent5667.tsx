'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5667<T> = T extends (infer U)[]
  ? DeepReadonlyArray5667<U>
  : T extends object
  ? DeepReadonlyObject5667<T>
  : T;

interface DeepReadonlyArray5667<T> extends ReadonlyArray<DeepReadonly5667<T>> {}

type DeepReadonlyObject5667<T> = {
  readonly [P in keyof T]: DeepReadonly5667<T[P]>;
};

type UnionToIntersection5667<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5667<T> = UnionToIntersection5667<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5667<T extends unknown[], V> = [...T, V];

type TuplifyUnion5667<T, L = LastOf5667<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5667<TuplifyUnion5667<Exclude<T, L>>, L>;

type DeepPartial5667<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5667<T[P]> }
  : T;

type Paths5667<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5667<K, Paths5667<T[K], Prev5667[D]>> : never }[keyof T]
  : never;

type Prev5667 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5667<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5667 {
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

type ConfigPaths5667 = Paths5667<NestedConfig5667>;

interface HeavyProps5667 {
  config: DeepPartial5667<NestedConfig5667>;
  path?: ConfigPaths5667;
}

const HeavyComponent5667 = memo(function HeavyComponent5667({ config }: HeavyProps5667) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5667) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5667 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5667: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5667.displayName = 'HeavyComponent5667';
export default HeavyComponent5667;

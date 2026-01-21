'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5376<T> = T extends (infer U)[]
  ? DeepReadonlyArray5376<U>
  : T extends object
  ? DeepReadonlyObject5376<T>
  : T;

interface DeepReadonlyArray5376<T> extends ReadonlyArray<DeepReadonly5376<T>> {}

type DeepReadonlyObject5376<T> = {
  readonly [P in keyof T]: DeepReadonly5376<T[P]>;
};

type UnionToIntersection5376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5376<T> = UnionToIntersection5376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5376<T extends unknown[], V> = [...T, V];

type TuplifyUnion5376<T, L = LastOf5376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5376<TuplifyUnion5376<Exclude<T, L>>, L>;

type DeepPartial5376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5376<T[P]> }
  : T;

type Paths5376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5376<K, Paths5376<T[K], Prev5376[D]>> : never }[keyof T]
  : never;

type Prev5376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5376 {
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

type ConfigPaths5376 = Paths5376<NestedConfig5376>;

interface HeavyProps5376 {
  config: DeepPartial5376<NestedConfig5376>;
  path?: ConfigPaths5376;
}

const HeavyComponent5376 = memo(function HeavyComponent5376({ config }: HeavyProps5376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5376.displayName = 'HeavyComponent5376';
export default HeavyComponent5376;

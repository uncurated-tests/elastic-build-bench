'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5070<T> = T extends (infer U)[]
  ? DeepReadonlyArray5070<U>
  : T extends object
  ? DeepReadonlyObject5070<T>
  : T;

interface DeepReadonlyArray5070<T> extends ReadonlyArray<DeepReadonly5070<T>> {}

type DeepReadonlyObject5070<T> = {
  readonly [P in keyof T]: DeepReadonly5070<T[P]>;
};

type UnionToIntersection5070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5070<T> = UnionToIntersection5070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5070<T extends unknown[], V> = [...T, V];

type TuplifyUnion5070<T, L = LastOf5070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5070<TuplifyUnion5070<Exclude<T, L>>, L>;

type DeepPartial5070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5070<T[P]> }
  : T;

type Paths5070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5070<K, Paths5070<T[K], Prev5070[D]>> : never }[keyof T]
  : never;

type Prev5070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5070 {
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

type ConfigPaths5070 = Paths5070<NestedConfig5070>;

interface HeavyProps5070 {
  config: DeepPartial5070<NestedConfig5070>;
  path?: ConfigPaths5070;
}

const HeavyComponent5070 = memo(function HeavyComponent5070({ config }: HeavyProps5070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5070.displayName = 'HeavyComponent5070';
export default HeavyComponent5070;

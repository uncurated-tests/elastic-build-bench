'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5535<T> = T extends (infer U)[]
  ? DeepReadonlyArray5535<U>
  : T extends object
  ? DeepReadonlyObject5535<T>
  : T;

interface DeepReadonlyArray5535<T> extends ReadonlyArray<DeepReadonly5535<T>> {}

type DeepReadonlyObject5535<T> = {
  readonly [P in keyof T]: DeepReadonly5535<T[P]>;
};

type UnionToIntersection5535<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5535<T> = UnionToIntersection5535<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5535<T extends unknown[], V> = [...T, V];

type TuplifyUnion5535<T, L = LastOf5535<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5535<TuplifyUnion5535<Exclude<T, L>>, L>;

type DeepPartial5535<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5535<T[P]> }
  : T;

type Paths5535<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5535<K, Paths5535<T[K], Prev5535[D]>> : never }[keyof T]
  : never;

type Prev5535 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5535<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5535 {
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

type ConfigPaths5535 = Paths5535<NestedConfig5535>;

interface HeavyProps5535 {
  config: DeepPartial5535<NestedConfig5535>;
  path?: ConfigPaths5535;
}

const HeavyComponent5535 = memo(function HeavyComponent5535({ config }: HeavyProps5535) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5535) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5535 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5535: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5535.displayName = 'HeavyComponent5535';
export default HeavyComponent5535;

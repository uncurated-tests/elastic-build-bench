'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5983<T> = T extends (infer U)[]
  ? DeepReadonlyArray5983<U>
  : T extends object
  ? DeepReadonlyObject5983<T>
  : T;

interface DeepReadonlyArray5983<T> extends ReadonlyArray<DeepReadonly5983<T>> {}

type DeepReadonlyObject5983<T> = {
  readonly [P in keyof T]: DeepReadonly5983<T[P]>;
};

type UnionToIntersection5983<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5983<T> = UnionToIntersection5983<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5983<T extends unknown[], V> = [...T, V];

type TuplifyUnion5983<T, L = LastOf5983<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5983<TuplifyUnion5983<Exclude<T, L>>, L>;

type DeepPartial5983<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5983<T[P]> }
  : T;

type Paths5983<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5983<K, Paths5983<T[K], Prev5983[D]>> : never }[keyof T]
  : never;

type Prev5983 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5983<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5983 {
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

type ConfigPaths5983 = Paths5983<NestedConfig5983>;

interface HeavyProps5983 {
  config: DeepPartial5983<NestedConfig5983>;
  path?: ConfigPaths5983;
}

const HeavyComponent5983 = memo(function HeavyComponent5983({ config }: HeavyProps5983) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5983) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5983 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5983: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5983.displayName = 'HeavyComponent5983';
export default HeavyComponent5983;

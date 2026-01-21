'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5425<T> = T extends (infer U)[]
  ? DeepReadonlyArray5425<U>
  : T extends object
  ? DeepReadonlyObject5425<T>
  : T;

interface DeepReadonlyArray5425<T> extends ReadonlyArray<DeepReadonly5425<T>> {}

type DeepReadonlyObject5425<T> = {
  readonly [P in keyof T]: DeepReadonly5425<T[P]>;
};

type UnionToIntersection5425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5425<T> = UnionToIntersection5425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5425<T extends unknown[], V> = [...T, V];

type TuplifyUnion5425<T, L = LastOf5425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5425<TuplifyUnion5425<Exclude<T, L>>, L>;

type DeepPartial5425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5425<T[P]> }
  : T;

type Paths5425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5425<K, Paths5425<T[K], Prev5425[D]>> : never }[keyof T]
  : never;

type Prev5425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5425 {
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

type ConfigPaths5425 = Paths5425<NestedConfig5425>;

interface HeavyProps5425 {
  config: DeepPartial5425<NestedConfig5425>;
  path?: ConfigPaths5425;
}

const HeavyComponent5425 = memo(function HeavyComponent5425({ config }: HeavyProps5425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5425.displayName = 'HeavyComponent5425';
export default HeavyComponent5425;

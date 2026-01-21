'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5486<T> = T extends (infer U)[]
  ? DeepReadonlyArray5486<U>
  : T extends object
  ? DeepReadonlyObject5486<T>
  : T;

interface DeepReadonlyArray5486<T> extends ReadonlyArray<DeepReadonly5486<T>> {}

type DeepReadonlyObject5486<T> = {
  readonly [P in keyof T]: DeepReadonly5486<T[P]>;
};

type UnionToIntersection5486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5486<T> = UnionToIntersection5486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5486<T extends unknown[], V> = [...T, V];

type TuplifyUnion5486<T, L = LastOf5486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5486<TuplifyUnion5486<Exclude<T, L>>, L>;

type DeepPartial5486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5486<T[P]> }
  : T;

type Paths5486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5486<K, Paths5486<T[K], Prev5486[D]>> : never }[keyof T]
  : never;

type Prev5486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5486 {
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

type ConfigPaths5486 = Paths5486<NestedConfig5486>;

interface HeavyProps5486 {
  config: DeepPartial5486<NestedConfig5486>;
  path?: ConfigPaths5486;
}

const HeavyComponent5486 = memo(function HeavyComponent5486({ config }: HeavyProps5486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5486.displayName = 'HeavyComponent5486';
export default HeavyComponent5486;

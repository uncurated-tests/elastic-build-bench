'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5363<T> = T extends (infer U)[]
  ? DeepReadonlyArray5363<U>
  : T extends object
  ? DeepReadonlyObject5363<T>
  : T;

interface DeepReadonlyArray5363<T> extends ReadonlyArray<DeepReadonly5363<T>> {}

type DeepReadonlyObject5363<T> = {
  readonly [P in keyof T]: DeepReadonly5363<T[P]>;
};

type UnionToIntersection5363<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5363<T> = UnionToIntersection5363<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5363<T extends unknown[], V> = [...T, V];

type TuplifyUnion5363<T, L = LastOf5363<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5363<TuplifyUnion5363<Exclude<T, L>>, L>;

type DeepPartial5363<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5363<T[P]> }
  : T;

type Paths5363<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5363<K, Paths5363<T[K], Prev5363[D]>> : never }[keyof T]
  : never;

type Prev5363 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5363<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5363 {
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

type ConfigPaths5363 = Paths5363<NestedConfig5363>;

interface HeavyProps5363 {
  config: DeepPartial5363<NestedConfig5363>;
  path?: ConfigPaths5363;
}

const HeavyComponent5363 = memo(function HeavyComponent5363({ config }: HeavyProps5363) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5363) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5363 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5363: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5363.displayName = 'HeavyComponent5363';
export default HeavyComponent5363;

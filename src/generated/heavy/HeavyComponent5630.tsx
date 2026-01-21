'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5630<T> = T extends (infer U)[]
  ? DeepReadonlyArray5630<U>
  : T extends object
  ? DeepReadonlyObject5630<T>
  : T;

interface DeepReadonlyArray5630<T> extends ReadonlyArray<DeepReadonly5630<T>> {}

type DeepReadonlyObject5630<T> = {
  readonly [P in keyof T]: DeepReadonly5630<T[P]>;
};

type UnionToIntersection5630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5630<T> = UnionToIntersection5630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5630<T extends unknown[], V> = [...T, V];

type TuplifyUnion5630<T, L = LastOf5630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5630<TuplifyUnion5630<Exclude<T, L>>, L>;

type DeepPartial5630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5630<T[P]> }
  : T;

type Paths5630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5630<K, Paths5630<T[K], Prev5630[D]>> : never }[keyof T]
  : never;

type Prev5630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5630 {
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

type ConfigPaths5630 = Paths5630<NestedConfig5630>;

interface HeavyProps5630 {
  config: DeepPartial5630<NestedConfig5630>;
  path?: ConfigPaths5630;
}

const HeavyComponent5630 = memo(function HeavyComponent5630({ config }: HeavyProps5630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5630.displayName = 'HeavyComponent5630';
export default HeavyComponent5630;

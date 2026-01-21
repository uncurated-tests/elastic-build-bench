'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5441<T> = T extends (infer U)[]
  ? DeepReadonlyArray5441<U>
  : T extends object
  ? DeepReadonlyObject5441<T>
  : T;

interface DeepReadonlyArray5441<T> extends ReadonlyArray<DeepReadonly5441<T>> {}

type DeepReadonlyObject5441<T> = {
  readonly [P in keyof T]: DeepReadonly5441<T[P]>;
};

type UnionToIntersection5441<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5441<T> = UnionToIntersection5441<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5441<T extends unknown[], V> = [...T, V];

type TuplifyUnion5441<T, L = LastOf5441<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5441<TuplifyUnion5441<Exclude<T, L>>, L>;

type DeepPartial5441<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5441<T[P]> }
  : T;

type Paths5441<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5441<K, Paths5441<T[K], Prev5441[D]>> : never }[keyof T]
  : never;

type Prev5441 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5441<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5441 {
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

type ConfigPaths5441 = Paths5441<NestedConfig5441>;

interface HeavyProps5441 {
  config: DeepPartial5441<NestedConfig5441>;
  path?: ConfigPaths5441;
}

const HeavyComponent5441 = memo(function HeavyComponent5441({ config }: HeavyProps5441) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5441) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5441 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5441: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5441.displayName = 'HeavyComponent5441';
export default HeavyComponent5441;

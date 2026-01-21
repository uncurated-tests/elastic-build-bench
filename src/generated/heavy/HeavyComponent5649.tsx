'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5649<T> = T extends (infer U)[]
  ? DeepReadonlyArray5649<U>
  : T extends object
  ? DeepReadonlyObject5649<T>
  : T;

interface DeepReadonlyArray5649<T> extends ReadonlyArray<DeepReadonly5649<T>> {}

type DeepReadonlyObject5649<T> = {
  readonly [P in keyof T]: DeepReadonly5649<T[P]>;
};

type UnionToIntersection5649<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5649<T> = UnionToIntersection5649<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5649<T extends unknown[], V> = [...T, V];

type TuplifyUnion5649<T, L = LastOf5649<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5649<TuplifyUnion5649<Exclude<T, L>>, L>;

type DeepPartial5649<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5649<T[P]> }
  : T;

type Paths5649<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5649<K, Paths5649<T[K], Prev5649[D]>> : never }[keyof T]
  : never;

type Prev5649 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5649<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5649 {
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

type ConfigPaths5649 = Paths5649<NestedConfig5649>;

interface HeavyProps5649 {
  config: DeepPartial5649<NestedConfig5649>;
  path?: ConfigPaths5649;
}

const HeavyComponent5649 = memo(function HeavyComponent5649({ config }: HeavyProps5649) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5649) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5649 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5649: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5649.displayName = 'HeavyComponent5649';
export default HeavyComponent5649;

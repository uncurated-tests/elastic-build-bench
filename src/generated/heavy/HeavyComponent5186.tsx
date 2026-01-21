'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5186<T> = T extends (infer U)[]
  ? DeepReadonlyArray5186<U>
  : T extends object
  ? DeepReadonlyObject5186<T>
  : T;

interface DeepReadonlyArray5186<T> extends ReadonlyArray<DeepReadonly5186<T>> {}

type DeepReadonlyObject5186<T> = {
  readonly [P in keyof T]: DeepReadonly5186<T[P]>;
};

type UnionToIntersection5186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5186<T> = UnionToIntersection5186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5186<T extends unknown[], V> = [...T, V];

type TuplifyUnion5186<T, L = LastOf5186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5186<TuplifyUnion5186<Exclude<T, L>>, L>;

type DeepPartial5186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5186<T[P]> }
  : T;

type Paths5186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5186<K, Paths5186<T[K], Prev5186[D]>> : never }[keyof T]
  : never;

type Prev5186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5186 {
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

type ConfigPaths5186 = Paths5186<NestedConfig5186>;

interface HeavyProps5186 {
  config: DeepPartial5186<NestedConfig5186>;
  path?: ConfigPaths5186;
}

const HeavyComponent5186 = memo(function HeavyComponent5186({ config }: HeavyProps5186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5186.displayName = 'HeavyComponent5186';
export default HeavyComponent5186;

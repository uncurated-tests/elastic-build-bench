'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5505<T> = T extends (infer U)[]
  ? DeepReadonlyArray5505<U>
  : T extends object
  ? DeepReadonlyObject5505<T>
  : T;

interface DeepReadonlyArray5505<T> extends ReadonlyArray<DeepReadonly5505<T>> {}

type DeepReadonlyObject5505<T> = {
  readonly [P in keyof T]: DeepReadonly5505<T[P]>;
};

type UnionToIntersection5505<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5505<T> = UnionToIntersection5505<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5505<T extends unknown[], V> = [...T, V];

type TuplifyUnion5505<T, L = LastOf5505<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5505<TuplifyUnion5505<Exclude<T, L>>, L>;

type DeepPartial5505<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5505<T[P]> }
  : T;

type Paths5505<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5505<K, Paths5505<T[K], Prev5505[D]>> : never }[keyof T]
  : never;

type Prev5505 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5505<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5505 {
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

type ConfigPaths5505 = Paths5505<NestedConfig5505>;

interface HeavyProps5505 {
  config: DeepPartial5505<NestedConfig5505>;
  path?: ConfigPaths5505;
}

const HeavyComponent5505 = memo(function HeavyComponent5505({ config }: HeavyProps5505) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5505) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5505 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5505: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5505.displayName = 'HeavyComponent5505';
export default HeavyComponent5505;

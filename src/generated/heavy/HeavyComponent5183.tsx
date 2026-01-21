'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5183<T> = T extends (infer U)[]
  ? DeepReadonlyArray5183<U>
  : T extends object
  ? DeepReadonlyObject5183<T>
  : T;

interface DeepReadonlyArray5183<T> extends ReadonlyArray<DeepReadonly5183<T>> {}

type DeepReadonlyObject5183<T> = {
  readonly [P in keyof T]: DeepReadonly5183<T[P]>;
};

type UnionToIntersection5183<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5183<T> = UnionToIntersection5183<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5183<T extends unknown[], V> = [...T, V];

type TuplifyUnion5183<T, L = LastOf5183<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5183<TuplifyUnion5183<Exclude<T, L>>, L>;

type DeepPartial5183<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5183<T[P]> }
  : T;

type Paths5183<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5183<K, Paths5183<T[K], Prev5183[D]>> : never }[keyof T]
  : never;

type Prev5183 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5183<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5183 {
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

type ConfigPaths5183 = Paths5183<NestedConfig5183>;

interface HeavyProps5183 {
  config: DeepPartial5183<NestedConfig5183>;
  path?: ConfigPaths5183;
}

const HeavyComponent5183 = memo(function HeavyComponent5183({ config }: HeavyProps5183) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5183) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5183 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5183: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5183.displayName = 'HeavyComponent5183';
export default HeavyComponent5183;

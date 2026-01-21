'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5973<T> = T extends (infer U)[]
  ? DeepReadonlyArray5973<U>
  : T extends object
  ? DeepReadonlyObject5973<T>
  : T;

interface DeepReadonlyArray5973<T> extends ReadonlyArray<DeepReadonly5973<T>> {}

type DeepReadonlyObject5973<T> = {
  readonly [P in keyof T]: DeepReadonly5973<T[P]>;
};

type UnionToIntersection5973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5973<T> = UnionToIntersection5973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5973<T extends unknown[], V> = [...T, V];

type TuplifyUnion5973<T, L = LastOf5973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5973<TuplifyUnion5973<Exclude<T, L>>, L>;

type DeepPartial5973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5973<T[P]> }
  : T;

type Paths5973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5973<K, Paths5973<T[K], Prev5973[D]>> : never }[keyof T]
  : never;

type Prev5973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5973 {
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

type ConfigPaths5973 = Paths5973<NestedConfig5973>;

interface HeavyProps5973 {
  config: DeepPartial5973<NestedConfig5973>;
  path?: ConfigPaths5973;
}

const HeavyComponent5973 = memo(function HeavyComponent5973({ config }: HeavyProps5973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5973.displayName = 'HeavyComponent5973';
export default HeavyComponent5973;

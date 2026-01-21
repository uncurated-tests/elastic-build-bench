'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5327<T> = T extends (infer U)[]
  ? DeepReadonlyArray5327<U>
  : T extends object
  ? DeepReadonlyObject5327<T>
  : T;

interface DeepReadonlyArray5327<T> extends ReadonlyArray<DeepReadonly5327<T>> {}

type DeepReadonlyObject5327<T> = {
  readonly [P in keyof T]: DeepReadonly5327<T[P]>;
};

type UnionToIntersection5327<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5327<T> = UnionToIntersection5327<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5327<T extends unknown[], V> = [...T, V];

type TuplifyUnion5327<T, L = LastOf5327<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5327<TuplifyUnion5327<Exclude<T, L>>, L>;

type DeepPartial5327<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5327<T[P]> }
  : T;

type Paths5327<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5327<K, Paths5327<T[K], Prev5327[D]>> : never }[keyof T]
  : never;

type Prev5327 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5327<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5327 {
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

type ConfigPaths5327 = Paths5327<NestedConfig5327>;

interface HeavyProps5327 {
  config: DeepPartial5327<NestedConfig5327>;
  path?: ConfigPaths5327;
}

const HeavyComponent5327 = memo(function HeavyComponent5327({ config }: HeavyProps5327) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5327) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5327 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5327: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5327.displayName = 'HeavyComponent5327';
export default HeavyComponent5327;

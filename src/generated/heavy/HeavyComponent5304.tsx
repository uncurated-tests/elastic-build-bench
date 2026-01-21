'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5304<T> = T extends (infer U)[]
  ? DeepReadonlyArray5304<U>
  : T extends object
  ? DeepReadonlyObject5304<T>
  : T;

interface DeepReadonlyArray5304<T> extends ReadonlyArray<DeepReadonly5304<T>> {}

type DeepReadonlyObject5304<T> = {
  readonly [P in keyof T]: DeepReadonly5304<T[P]>;
};

type UnionToIntersection5304<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5304<T> = UnionToIntersection5304<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5304<T extends unknown[], V> = [...T, V];

type TuplifyUnion5304<T, L = LastOf5304<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5304<TuplifyUnion5304<Exclude<T, L>>, L>;

type DeepPartial5304<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5304<T[P]> }
  : T;

type Paths5304<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5304<K, Paths5304<T[K], Prev5304[D]>> : never }[keyof T]
  : never;

type Prev5304 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5304<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5304 {
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

type ConfigPaths5304 = Paths5304<NestedConfig5304>;

interface HeavyProps5304 {
  config: DeepPartial5304<NestedConfig5304>;
  path?: ConfigPaths5304;
}

const HeavyComponent5304 = memo(function HeavyComponent5304({ config }: HeavyProps5304) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5304) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5304 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5304: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5304.displayName = 'HeavyComponent5304';
export default HeavyComponent5304;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5723<T> = T extends (infer U)[]
  ? DeepReadonlyArray5723<U>
  : T extends object
  ? DeepReadonlyObject5723<T>
  : T;

interface DeepReadonlyArray5723<T> extends ReadonlyArray<DeepReadonly5723<T>> {}

type DeepReadonlyObject5723<T> = {
  readonly [P in keyof T]: DeepReadonly5723<T[P]>;
};

type UnionToIntersection5723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5723<T> = UnionToIntersection5723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5723<T extends unknown[], V> = [...T, V];

type TuplifyUnion5723<T, L = LastOf5723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5723<TuplifyUnion5723<Exclude<T, L>>, L>;

type DeepPartial5723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5723<T[P]> }
  : T;

type Paths5723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5723<K, Paths5723<T[K], Prev5723[D]>> : never }[keyof T]
  : never;

type Prev5723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5723 {
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

type ConfigPaths5723 = Paths5723<NestedConfig5723>;

interface HeavyProps5723 {
  config: DeepPartial5723<NestedConfig5723>;
  path?: ConfigPaths5723;
}

const HeavyComponent5723 = memo(function HeavyComponent5723({ config }: HeavyProps5723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5723.displayName = 'HeavyComponent5723';
export default HeavyComponent5723;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5377<T> = T extends (infer U)[]
  ? DeepReadonlyArray5377<U>
  : T extends object
  ? DeepReadonlyObject5377<T>
  : T;

interface DeepReadonlyArray5377<T> extends ReadonlyArray<DeepReadonly5377<T>> {}

type DeepReadonlyObject5377<T> = {
  readonly [P in keyof T]: DeepReadonly5377<T[P]>;
};

type UnionToIntersection5377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5377<T> = UnionToIntersection5377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5377<T extends unknown[], V> = [...T, V];

type TuplifyUnion5377<T, L = LastOf5377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5377<TuplifyUnion5377<Exclude<T, L>>, L>;

type DeepPartial5377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5377<T[P]> }
  : T;

type Paths5377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5377<K, Paths5377<T[K], Prev5377[D]>> : never }[keyof T]
  : never;

type Prev5377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5377 {
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

type ConfigPaths5377 = Paths5377<NestedConfig5377>;

interface HeavyProps5377 {
  config: DeepPartial5377<NestedConfig5377>;
  path?: ConfigPaths5377;
}

const HeavyComponent5377 = memo(function HeavyComponent5377({ config }: HeavyProps5377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5377.displayName = 'HeavyComponent5377';
export default HeavyComponent5377;

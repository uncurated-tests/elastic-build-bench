'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5146<T> = T extends (infer U)[]
  ? DeepReadonlyArray5146<U>
  : T extends object
  ? DeepReadonlyObject5146<T>
  : T;

interface DeepReadonlyArray5146<T> extends ReadonlyArray<DeepReadonly5146<T>> {}

type DeepReadonlyObject5146<T> = {
  readonly [P in keyof T]: DeepReadonly5146<T[P]>;
};

type UnionToIntersection5146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5146<T> = UnionToIntersection5146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5146<T extends unknown[], V> = [...T, V];

type TuplifyUnion5146<T, L = LastOf5146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5146<TuplifyUnion5146<Exclude<T, L>>, L>;

type DeepPartial5146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5146<T[P]> }
  : T;

type Paths5146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5146<K, Paths5146<T[K], Prev5146[D]>> : never }[keyof T]
  : never;

type Prev5146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5146 {
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

type ConfigPaths5146 = Paths5146<NestedConfig5146>;

interface HeavyProps5146 {
  config: DeepPartial5146<NestedConfig5146>;
  path?: ConfigPaths5146;
}

const HeavyComponent5146 = memo(function HeavyComponent5146({ config }: HeavyProps5146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5146.displayName = 'HeavyComponent5146';
export default HeavyComponent5146;

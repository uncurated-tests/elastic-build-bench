'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5569<T> = T extends (infer U)[]
  ? DeepReadonlyArray5569<U>
  : T extends object
  ? DeepReadonlyObject5569<T>
  : T;

interface DeepReadonlyArray5569<T> extends ReadonlyArray<DeepReadonly5569<T>> {}

type DeepReadonlyObject5569<T> = {
  readonly [P in keyof T]: DeepReadonly5569<T[P]>;
};

type UnionToIntersection5569<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5569<T> = UnionToIntersection5569<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5569<T extends unknown[], V> = [...T, V];

type TuplifyUnion5569<T, L = LastOf5569<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5569<TuplifyUnion5569<Exclude<T, L>>, L>;

type DeepPartial5569<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5569<T[P]> }
  : T;

type Paths5569<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5569<K, Paths5569<T[K], Prev5569[D]>> : never }[keyof T]
  : never;

type Prev5569 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5569<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5569 {
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

type ConfigPaths5569 = Paths5569<NestedConfig5569>;

interface HeavyProps5569 {
  config: DeepPartial5569<NestedConfig5569>;
  path?: ConfigPaths5569;
}

const HeavyComponent5569 = memo(function HeavyComponent5569({ config }: HeavyProps5569) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5569) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5569 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5569: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5569.displayName = 'HeavyComponent5569';
export default HeavyComponent5569;

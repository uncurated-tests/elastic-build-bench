'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5414<T> = T extends (infer U)[]
  ? DeepReadonlyArray5414<U>
  : T extends object
  ? DeepReadonlyObject5414<T>
  : T;

interface DeepReadonlyArray5414<T> extends ReadonlyArray<DeepReadonly5414<T>> {}

type DeepReadonlyObject5414<T> = {
  readonly [P in keyof T]: DeepReadonly5414<T[P]>;
};

type UnionToIntersection5414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5414<T> = UnionToIntersection5414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5414<T extends unknown[], V> = [...T, V];

type TuplifyUnion5414<T, L = LastOf5414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5414<TuplifyUnion5414<Exclude<T, L>>, L>;

type DeepPartial5414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5414<T[P]> }
  : T;

type Paths5414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5414<K, Paths5414<T[K], Prev5414[D]>> : never }[keyof T]
  : never;

type Prev5414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5414 {
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

type ConfigPaths5414 = Paths5414<NestedConfig5414>;

interface HeavyProps5414 {
  config: DeepPartial5414<NestedConfig5414>;
  path?: ConfigPaths5414;
}

const HeavyComponent5414 = memo(function HeavyComponent5414({ config }: HeavyProps5414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5414.displayName = 'HeavyComponent5414';
export default HeavyComponent5414;

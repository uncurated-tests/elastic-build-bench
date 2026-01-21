'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5058<T> = T extends (infer U)[]
  ? DeepReadonlyArray5058<U>
  : T extends object
  ? DeepReadonlyObject5058<T>
  : T;

interface DeepReadonlyArray5058<T> extends ReadonlyArray<DeepReadonly5058<T>> {}

type DeepReadonlyObject5058<T> = {
  readonly [P in keyof T]: DeepReadonly5058<T[P]>;
};

type UnionToIntersection5058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5058<T> = UnionToIntersection5058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5058<T extends unknown[], V> = [...T, V];

type TuplifyUnion5058<T, L = LastOf5058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5058<TuplifyUnion5058<Exclude<T, L>>, L>;

type DeepPartial5058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5058<T[P]> }
  : T;

type Paths5058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5058<K, Paths5058<T[K], Prev5058[D]>> : never }[keyof T]
  : never;

type Prev5058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5058 {
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

type ConfigPaths5058 = Paths5058<NestedConfig5058>;

interface HeavyProps5058 {
  config: DeepPartial5058<NestedConfig5058>;
  path?: ConfigPaths5058;
}

const HeavyComponent5058 = memo(function HeavyComponent5058({ config }: HeavyProps5058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5058.displayName = 'HeavyComponent5058';
export default HeavyComponent5058;

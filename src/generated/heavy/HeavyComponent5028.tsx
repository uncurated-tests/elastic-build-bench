'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5028<T> = T extends (infer U)[]
  ? DeepReadonlyArray5028<U>
  : T extends object
  ? DeepReadonlyObject5028<T>
  : T;

interface DeepReadonlyArray5028<T> extends ReadonlyArray<DeepReadonly5028<T>> {}

type DeepReadonlyObject5028<T> = {
  readonly [P in keyof T]: DeepReadonly5028<T[P]>;
};

type UnionToIntersection5028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5028<T> = UnionToIntersection5028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5028<T extends unknown[], V> = [...T, V];

type TuplifyUnion5028<T, L = LastOf5028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5028<TuplifyUnion5028<Exclude<T, L>>, L>;

type DeepPartial5028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5028<T[P]> }
  : T;

type Paths5028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5028<K, Paths5028<T[K], Prev5028[D]>> : never }[keyof T]
  : never;

type Prev5028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5028 {
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

type ConfigPaths5028 = Paths5028<NestedConfig5028>;

interface HeavyProps5028 {
  config: DeepPartial5028<NestedConfig5028>;
  path?: ConfigPaths5028;
}

const HeavyComponent5028 = memo(function HeavyComponent5028({ config }: HeavyProps5028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5028.displayName = 'HeavyComponent5028';
export default HeavyComponent5028;

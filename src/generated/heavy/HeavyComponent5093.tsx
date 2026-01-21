'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5093<T> = T extends (infer U)[]
  ? DeepReadonlyArray5093<U>
  : T extends object
  ? DeepReadonlyObject5093<T>
  : T;

interface DeepReadonlyArray5093<T> extends ReadonlyArray<DeepReadonly5093<T>> {}

type DeepReadonlyObject5093<T> = {
  readonly [P in keyof T]: DeepReadonly5093<T[P]>;
};

type UnionToIntersection5093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5093<T> = UnionToIntersection5093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5093<T extends unknown[], V> = [...T, V];

type TuplifyUnion5093<T, L = LastOf5093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5093<TuplifyUnion5093<Exclude<T, L>>, L>;

type DeepPartial5093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5093<T[P]> }
  : T;

type Paths5093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5093<K, Paths5093<T[K], Prev5093[D]>> : never }[keyof T]
  : never;

type Prev5093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5093 {
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

type ConfigPaths5093 = Paths5093<NestedConfig5093>;

interface HeavyProps5093 {
  config: DeepPartial5093<NestedConfig5093>;
  path?: ConfigPaths5093;
}

const HeavyComponent5093 = memo(function HeavyComponent5093({ config }: HeavyProps5093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5093.displayName = 'HeavyComponent5093';
export default HeavyComponent5093;

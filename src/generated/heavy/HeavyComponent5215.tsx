'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5215<T> = T extends (infer U)[]
  ? DeepReadonlyArray5215<U>
  : T extends object
  ? DeepReadonlyObject5215<T>
  : T;

interface DeepReadonlyArray5215<T> extends ReadonlyArray<DeepReadonly5215<T>> {}

type DeepReadonlyObject5215<T> = {
  readonly [P in keyof T]: DeepReadonly5215<T[P]>;
};

type UnionToIntersection5215<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5215<T> = UnionToIntersection5215<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5215<T extends unknown[], V> = [...T, V];

type TuplifyUnion5215<T, L = LastOf5215<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5215<TuplifyUnion5215<Exclude<T, L>>, L>;

type DeepPartial5215<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5215<T[P]> }
  : T;

type Paths5215<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5215<K, Paths5215<T[K], Prev5215[D]>> : never }[keyof T]
  : never;

type Prev5215 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5215<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5215 {
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

type ConfigPaths5215 = Paths5215<NestedConfig5215>;

interface HeavyProps5215 {
  config: DeepPartial5215<NestedConfig5215>;
  path?: ConfigPaths5215;
}

const HeavyComponent5215 = memo(function HeavyComponent5215({ config }: HeavyProps5215) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5215) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5215 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5215: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5215.displayName = 'HeavyComponent5215';
export default HeavyComponent5215;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5444<T> = T extends (infer U)[]
  ? DeepReadonlyArray5444<U>
  : T extends object
  ? DeepReadonlyObject5444<T>
  : T;

interface DeepReadonlyArray5444<T> extends ReadonlyArray<DeepReadonly5444<T>> {}

type DeepReadonlyObject5444<T> = {
  readonly [P in keyof T]: DeepReadonly5444<T[P]>;
};

type UnionToIntersection5444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5444<T> = UnionToIntersection5444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5444<T extends unknown[], V> = [...T, V];

type TuplifyUnion5444<T, L = LastOf5444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5444<TuplifyUnion5444<Exclude<T, L>>, L>;

type DeepPartial5444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5444<T[P]> }
  : T;

type Paths5444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5444<K, Paths5444<T[K], Prev5444[D]>> : never }[keyof T]
  : never;

type Prev5444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5444 {
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

type ConfigPaths5444 = Paths5444<NestedConfig5444>;

interface HeavyProps5444 {
  config: DeepPartial5444<NestedConfig5444>;
  path?: ConfigPaths5444;
}

const HeavyComponent5444 = memo(function HeavyComponent5444({ config }: HeavyProps5444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5444.displayName = 'HeavyComponent5444';
export default HeavyComponent5444;

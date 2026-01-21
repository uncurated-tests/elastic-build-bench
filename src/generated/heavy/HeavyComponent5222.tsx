'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5222<T> = T extends (infer U)[]
  ? DeepReadonlyArray5222<U>
  : T extends object
  ? DeepReadonlyObject5222<T>
  : T;

interface DeepReadonlyArray5222<T> extends ReadonlyArray<DeepReadonly5222<T>> {}

type DeepReadonlyObject5222<T> = {
  readonly [P in keyof T]: DeepReadonly5222<T[P]>;
};

type UnionToIntersection5222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5222<T> = UnionToIntersection5222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5222<T extends unknown[], V> = [...T, V];

type TuplifyUnion5222<T, L = LastOf5222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5222<TuplifyUnion5222<Exclude<T, L>>, L>;

type DeepPartial5222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5222<T[P]> }
  : T;

type Paths5222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5222<K, Paths5222<T[K], Prev5222[D]>> : never }[keyof T]
  : never;

type Prev5222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5222 {
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

type ConfigPaths5222 = Paths5222<NestedConfig5222>;

interface HeavyProps5222 {
  config: DeepPartial5222<NestedConfig5222>;
  path?: ConfigPaths5222;
}

const HeavyComponent5222 = memo(function HeavyComponent5222({ config }: HeavyProps5222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5222.displayName = 'HeavyComponent5222';
export default HeavyComponent5222;

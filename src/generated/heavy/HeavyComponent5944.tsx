'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5944<T> = T extends (infer U)[]
  ? DeepReadonlyArray5944<U>
  : T extends object
  ? DeepReadonlyObject5944<T>
  : T;

interface DeepReadonlyArray5944<T> extends ReadonlyArray<DeepReadonly5944<T>> {}

type DeepReadonlyObject5944<T> = {
  readonly [P in keyof T]: DeepReadonly5944<T[P]>;
};

type UnionToIntersection5944<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5944<T> = UnionToIntersection5944<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5944<T extends unknown[], V> = [...T, V];

type TuplifyUnion5944<T, L = LastOf5944<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5944<TuplifyUnion5944<Exclude<T, L>>, L>;

type DeepPartial5944<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5944<T[P]> }
  : T;

type Paths5944<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5944<K, Paths5944<T[K], Prev5944[D]>> : never }[keyof T]
  : never;

type Prev5944 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5944<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5944 {
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

type ConfigPaths5944 = Paths5944<NestedConfig5944>;

interface HeavyProps5944 {
  config: DeepPartial5944<NestedConfig5944>;
  path?: ConfigPaths5944;
}

const HeavyComponent5944 = memo(function HeavyComponent5944({ config }: HeavyProps5944) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5944) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5944 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5944: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5944.displayName = 'HeavyComponent5944';
export default HeavyComponent5944;

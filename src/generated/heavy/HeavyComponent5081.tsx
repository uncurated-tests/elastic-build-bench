'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5081<T> = T extends (infer U)[]
  ? DeepReadonlyArray5081<U>
  : T extends object
  ? DeepReadonlyObject5081<T>
  : T;

interface DeepReadonlyArray5081<T> extends ReadonlyArray<DeepReadonly5081<T>> {}

type DeepReadonlyObject5081<T> = {
  readonly [P in keyof T]: DeepReadonly5081<T[P]>;
};

type UnionToIntersection5081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5081<T> = UnionToIntersection5081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5081<T extends unknown[], V> = [...T, V];

type TuplifyUnion5081<T, L = LastOf5081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5081<TuplifyUnion5081<Exclude<T, L>>, L>;

type DeepPartial5081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5081<T[P]> }
  : T;

type Paths5081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5081<K, Paths5081<T[K], Prev5081[D]>> : never }[keyof T]
  : never;

type Prev5081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5081 {
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

type ConfigPaths5081 = Paths5081<NestedConfig5081>;

interface HeavyProps5081 {
  config: DeepPartial5081<NestedConfig5081>;
  path?: ConfigPaths5081;
}

const HeavyComponent5081 = memo(function HeavyComponent5081({ config }: HeavyProps5081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5081.displayName = 'HeavyComponent5081';
export default HeavyComponent5081;

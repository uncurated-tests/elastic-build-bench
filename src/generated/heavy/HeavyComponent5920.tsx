'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5920<T> = T extends (infer U)[]
  ? DeepReadonlyArray5920<U>
  : T extends object
  ? DeepReadonlyObject5920<T>
  : T;

interface DeepReadonlyArray5920<T> extends ReadonlyArray<DeepReadonly5920<T>> {}

type DeepReadonlyObject5920<T> = {
  readonly [P in keyof T]: DeepReadonly5920<T[P]>;
};

type UnionToIntersection5920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5920<T> = UnionToIntersection5920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5920<T extends unknown[], V> = [...T, V];

type TuplifyUnion5920<T, L = LastOf5920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5920<TuplifyUnion5920<Exclude<T, L>>, L>;

type DeepPartial5920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5920<T[P]> }
  : T;

type Paths5920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5920<K, Paths5920<T[K], Prev5920[D]>> : never }[keyof T]
  : never;

type Prev5920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5920 {
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

type ConfigPaths5920 = Paths5920<NestedConfig5920>;

interface HeavyProps5920 {
  config: DeepPartial5920<NestedConfig5920>;
  path?: ConfigPaths5920;
}

const HeavyComponent5920 = memo(function HeavyComponent5920({ config }: HeavyProps5920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5920.displayName = 'HeavyComponent5920';
export default HeavyComponent5920;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5727<T> = T extends (infer U)[]
  ? DeepReadonlyArray5727<U>
  : T extends object
  ? DeepReadonlyObject5727<T>
  : T;

interface DeepReadonlyArray5727<T> extends ReadonlyArray<DeepReadonly5727<T>> {}

type DeepReadonlyObject5727<T> = {
  readonly [P in keyof T]: DeepReadonly5727<T[P]>;
};

type UnionToIntersection5727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5727<T> = UnionToIntersection5727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5727<T extends unknown[], V> = [...T, V];

type TuplifyUnion5727<T, L = LastOf5727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5727<TuplifyUnion5727<Exclude<T, L>>, L>;

type DeepPartial5727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5727<T[P]> }
  : T;

type Paths5727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5727<K, Paths5727<T[K], Prev5727[D]>> : never }[keyof T]
  : never;

type Prev5727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5727 {
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

type ConfigPaths5727 = Paths5727<NestedConfig5727>;

interface HeavyProps5727 {
  config: DeepPartial5727<NestedConfig5727>;
  path?: ConfigPaths5727;
}

const HeavyComponent5727 = memo(function HeavyComponent5727({ config }: HeavyProps5727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5727.displayName = 'HeavyComponent5727';
export default HeavyComponent5727;

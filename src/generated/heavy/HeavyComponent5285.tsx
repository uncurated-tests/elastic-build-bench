'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5285<T> = T extends (infer U)[]
  ? DeepReadonlyArray5285<U>
  : T extends object
  ? DeepReadonlyObject5285<T>
  : T;

interface DeepReadonlyArray5285<T> extends ReadonlyArray<DeepReadonly5285<T>> {}

type DeepReadonlyObject5285<T> = {
  readonly [P in keyof T]: DeepReadonly5285<T[P]>;
};

type UnionToIntersection5285<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5285<T> = UnionToIntersection5285<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5285<T extends unknown[], V> = [...T, V];

type TuplifyUnion5285<T, L = LastOf5285<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5285<TuplifyUnion5285<Exclude<T, L>>, L>;

type DeepPartial5285<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5285<T[P]> }
  : T;

type Paths5285<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5285<K, Paths5285<T[K], Prev5285[D]>> : never }[keyof T]
  : never;

type Prev5285 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5285<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5285 {
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

type ConfigPaths5285 = Paths5285<NestedConfig5285>;

interface HeavyProps5285 {
  config: DeepPartial5285<NestedConfig5285>;
  path?: ConfigPaths5285;
}

const HeavyComponent5285 = memo(function HeavyComponent5285({ config }: HeavyProps5285) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5285) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5285 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5285: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5285.displayName = 'HeavyComponent5285';
export default HeavyComponent5285;

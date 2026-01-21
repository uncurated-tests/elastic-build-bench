'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5862<T> = T extends (infer U)[]
  ? DeepReadonlyArray5862<U>
  : T extends object
  ? DeepReadonlyObject5862<T>
  : T;

interface DeepReadonlyArray5862<T> extends ReadonlyArray<DeepReadonly5862<T>> {}

type DeepReadonlyObject5862<T> = {
  readonly [P in keyof T]: DeepReadonly5862<T[P]>;
};

type UnionToIntersection5862<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5862<T> = UnionToIntersection5862<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5862<T extends unknown[], V> = [...T, V];

type TuplifyUnion5862<T, L = LastOf5862<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5862<TuplifyUnion5862<Exclude<T, L>>, L>;

type DeepPartial5862<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5862<T[P]> }
  : T;

type Paths5862<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5862<K, Paths5862<T[K], Prev5862[D]>> : never }[keyof T]
  : never;

type Prev5862 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5862<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5862 {
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

type ConfigPaths5862 = Paths5862<NestedConfig5862>;

interface HeavyProps5862 {
  config: DeepPartial5862<NestedConfig5862>;
  path?: ConfigPaths5862;
}

const HeavyComponent5862 = memo(function HeavyComponent5862({ config }: HeavyProps5862) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5862) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5862 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5862: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5862.displayName = 'HeavyComponent5862';
export default HeavyComponent5862;

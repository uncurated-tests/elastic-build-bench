'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5672<T> = T extends (infer U)[]
  ? DeepReadonlyArray5672<U>
  : T extends object
  ? DeepReadonlyObject5672<T>
  : T;

interface DeepReadonlyArray5672<T> extends ReadonlyArray<DeepReadonly5672<T>> {}

type DeepReadonlyObject5672<T> = {
  readonly [P in keyof T]: DeepReadonly5672<T[P]>;
};

type UnionToIntersection5672<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5672<T> = UnionToIntersection5672<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5672<T extends unknown[], V> = [...T, V];

type TuplifyUnion5672<T, L = LastOf5672<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5672<TuplifyUnion5672<Exclude<T, L>>, L>;

type DeepPartial5672<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5672<T[P]> }
  : T;

type Paths5672<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5672<K, Paths5672<T[K], Prev5672[D]>> : never }[keyof T]
  : never;

type Prev5672 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5672<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5672 {
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

type ConfigPaths5672 = Paths5672<NestedConfig5672>;

interface HeavyProps5672 {
  config: DeepPartial5672<NestedConfig5672>;
  path?: ConfigPaths5672;
}

const HeavyComponent5672 = memo(function HeavyComponent5672({ config }: HeavyProps5672) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5672) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5672 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5672: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5672.displayName = 'HeavyComponent5672';
export default HeavyComponent5672;

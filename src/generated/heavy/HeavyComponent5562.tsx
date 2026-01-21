'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5562<T> = T extends (infer U)[]
  ? DeepReadonlyArray5562<U>
  : T extends object
  ? DeepReadonlyObject5562<T>
  : T;

interface DeepReadonlyArray5562<T> extends ReadonlyArray<DeepReadonly5562<T>> {}

type DeepReadonlyObject5562<T> = {
  readonly [P in keyof T]: DeepReadonly5562<T[P]>;
};

type UnionToIntersection5562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5562<T> = UnionToIntersection5562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5562<T extends unknown[], V> = [...T, V];

type TuplifyUnion5562<T, L = LastOf5562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5562<TuplifyUnion5562<Exclude<T, L>>, L>;

type DeepPartial5562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5562<T[P]> }
  : T;

type Paths5562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5562<K, Paths5562<T[K], Prev5562[D]>> : never }[keyof T]
  : never;

type Prev5562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5562 {
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

type ConfigPaths5562 = Paths5562<NestedConfig5562>;

interface HeavyProps5562 {
  config: DeepPartial5562<NestedConfig5562>;
  path?: ConfigPaths5562;
}

const HeavyComponent5562 = memo(function HeavyComponent5562({ config }: HeavyProps5562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5562.displayName = 'HeavyComponent5562';
export default HeavyComponent5562;

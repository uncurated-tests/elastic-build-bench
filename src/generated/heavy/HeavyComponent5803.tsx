'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5803<T> = T extends (infer U)[]
  ? DeepReadonlyArray5803<U>
  : T extends object
  ? DeepReadonlyObject5803<T>
  : T;

interface DeepReadonlyArray5803<T> extends ReadonlyArray<DeepReadonly5803<T>> {}

type DeepReadonlyObject5803<T> = {
  readonly [P in keyof T]: DeepReadonly5803<T[P]>;
};

type UnionToIntersection5803<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5803<T> = UnionToIntersection5803<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5803<T extends unknown[], V> = [...T, V];

type TuplifyUnion5803<T, L = LastOf5803<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5803<TuplifyUnion5803<Exclude<T, L>>, L>;

type DeepPartial5803<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5803<T[P]> }
  : T;

type Paths5803<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5803<K, Paths5803<T[K], Prev5803[D]>> : never }[keyof T]
  : never;

type Prev5803 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5803<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5803 {
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

type ConfigPaths5803 = Paths5803<NestedConfig5803>;

interface HeavyProps5803 {
  config: DeepPartial5803<NestedConfig5803>;
  path?: ConfigPaths5803;
}

const HeavyComponent5803 = memo(function HeavyComponent5803({ config }: HeavyProps5803) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5803) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5803 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5803: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5803.displayName = 'HeavyComponent5803';
export default HeavyComponent5803;

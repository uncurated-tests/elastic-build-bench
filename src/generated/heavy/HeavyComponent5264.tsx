'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5264<T> = T extends (infer U)[]
  ? DeepReadonlyArray5264<U>
  : T extends object
  ? DeepReadonlyObject5264<T>
  : T;

interface DeepReadonlyArray5264<T> extends ReadonlyArray<DeepReadonly5264<T>> {}

type DeepReadonlyObject5264<T> = {
  readonly [P in keyof T]: DeepReadonly5264<T[P]>;
};

type UnionToIntersection5264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5264<T> = UnionToIntersection5264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5264<T extends unknown[], V> = [...T, V];

type TuplifyUnion5264<T, L = LastOf5264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5264<TuplifyUnion5264<Exclude<T, L>>, L>;

type DeepPartial5264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5264<T[P]> }
  : T;

type Paths5264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5264<K, Paths5264<T[K], Prev5264[D]>> : never }[keyof T]
  : never;

type Prev5264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5264 {
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

type ConfigPaths5264 = Paths5264<NestedConfig5264>;

interface HeavyProps5264 {
  config: DeepPartial5264<NestedConfig5264>;
  path?: ConfigPaths5264;
}

const HeavyComponent5264 = memo(function HeavyComponent5264({ config }: HeavyProps5264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5264.displayName = 'HeavyComponent5264';
export default HeavyComponent5264;

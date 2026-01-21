'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5632<T> = T extends (infer U)[]
  ? DeepReadonlyArray5632<U>
  : T extends object
  ? DeepReadonlyObject5632<T>
  : T;

interface DeepReadonlyArray5632<T> extends ReadonlyArray<DeepReadonly5632<T>> {}

type DeepReadonlyObject5632<T> = {
  readonly [P in keyof T]: DeepReadonly5632<T[P]>;
};

type UnionToIntersection5632<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5632<T> = UnionToIntersection5632<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5632<T extends unknown[], V> = [...T, V];

type TuplifyUnion5632<T, L = LastOf5632<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5632<TuplifyUnion5632<Exclude<T, L>>, L>;

type DeepPartial5632<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5632<T[P]> }
  : T;

type Paths5632<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5632<K, Paths5632<T[K], Prev5632[D]>> : never }[keyof T]
  : never;

type Prev5632 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5632<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5632 {
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

type ConfigPaths5632 = Paths5632<NestedConfig5632>;

interface HeavyProps5632 {
  config: DeepPartial5632<NestedConfig5632>;
  path?: ConfigPaths5632;
}

const HeavyComponent5632 = memo(function HeavyComponent5632({ config }: HeavyProps5632) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5632) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5632 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5632: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5632.displayName = 'HeavyComponent5632';
export default HeavyComponent5632;

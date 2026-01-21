'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5918<T> = T extends (infer U)[]
  ? DeepReadonlyArray5918<U>
  : T extends object
  ? DeepReadonlyObject5918<T>
  : T;

interface DeepReadonlyArray5918<T> extends ReadonlyArray<DeepReadonly5918<T>> {}

type DeepReadonlyObject5918<T> = {
  readonly [P in keyof T]: DeepReadonly5918<T[P]>;
};

type UnionToIntersection5918<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5918<T> = UnionToIntersection5918<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5918<T extends unknown[], V> = [...T, V];

type TuplifyUnion5918<T, L = LastOf5918<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5918<TuplifyUnion5918<Exclude<T, L>>, L>;

type DeepPartial5918<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5918<T[P]> }
  : T;

type Paths5918<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5918<K, Paths5918<T[K], Prev5918[D]>> : never }[keyof T]
  : never;

type Prev5918 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5918<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5918 {
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

type ConfigPaths5918 = Paths5918<NestedConfig5918>;

interface HeavyProps5918 {
  config: DeepPartial5918<NestedConfig5918>;
  path?: ConfigPaths5918;
}

const HeavyComponent5918 = memo(function HeavyComponent5918({ config }: HeavyProps5918) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5918) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5918 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5918: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5918.displayName = 'HeavyComponent5918';
export default HeavyComponent5918;

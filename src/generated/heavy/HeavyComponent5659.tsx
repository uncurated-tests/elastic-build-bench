'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5659<T> = T extends (infer U)[]
  ? DeepReadonlyArray5659<U>
  : T extends object
  ? DeepReadonlyObject5659<T>
  : T;

interface DeepReadonlyArray5659<T> extends ReadonlyArray<DeepReadonly5659<T>> {}

type DeepReadonlyObject5659<T> = {
  readonly [P in keyof T]: DeepReadonly5659<T[P]>;
};

type UnionToIntersection5659<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5659<T> = UnionToIntersection5659<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5659<T extends unknown[], V> = [...T, V];

type TuplifyUnion5659<T, L = LastOf5659<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5659<TuplifyUnion5659<Exclude<T, L>>, L>;

type DeepPartial5659<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5659<T[P]> }
  : T;

type Paths5659<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5659<K, Paths5659<T[K], Prev5659[D]>> : never }[keyof T]
  : never;

type Prev5659 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5659<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5659 {
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

type ConfigPaths5659 = Paths5659<NestedConfig5659>;

interface HeavyProps5659 {
  config: DeepPartial5659<NestedConfig5659>;
  path?: ConfigPaths5659;
}

const HeavyComponent5659 = memo(function HeavyComponent5659({ config }: HeavyProps5659) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5659) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5659 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5659: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5659.displayName = 'HeavyComponent5659';
export default HeavyComponent5659;

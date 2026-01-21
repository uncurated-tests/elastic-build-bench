'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5189<T> = T extends (infer U)[]
  ? DeepReadonlyArray5189<U>
  : T extends object
  ? DeepReadonlyObject5189<T>
  : T;

interface DeepReadonlyArray5189<T> extends ReadonlyArray<DeepReadonly5189<T>> {}

type DeepReadonlyObject5189<T> = {
  readonly [P in keyof T]: DeepReadonly5189<T[P]>;
};

type UnionToIntersection5189<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5189<T> = UnionToIntersection5189<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5189<T extends unknown[], V> = [...T, V];

type TuplifyUnion5189<T, L = LastOf5189<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5189<TuplifyUnion5189<Exclude<T, L>>, L>;

type DeepPartial5189<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5189<T[P]> }
  : T;

type Paths5189<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5189<K, Paths5189<T[K], Prev5189[D]>> : never }[keyof T]
  : never;

type Prev5189 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5189<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5189 {
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

type ConfigPaths5189 = Paths5189<NestedConfig5189>;

interface HeavyProps5189 {
  config: DeepPartial5189<NestedConfig5189>;
  path?: ConfigPaths5189;
}

const HeavyComponent5189 = memo(function HeavyComponent5189({ config }: HeavyProps5189) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5189) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5189 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5189: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5189.displayName = 'HeavyComponent5189';
export default HeavyComponent5189;

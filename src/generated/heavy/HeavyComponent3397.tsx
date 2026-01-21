'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3397<T> = T extends (infer U)[]
  ? DeepReadonlyArray3397<U>
  : T extends object
  ? DeepReadonlyObject3397<T>
  : T;

interface DeepReadonlyArray3397<T> extends ReadonlyArray<DeepReadonly3397<T>> {}

type DeepReadonlyObject3397<T> = {
  readonly [P in keyof T]: DeepReadonly3397<T[P]>;
};

type UnionToIntersection3397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3397<T> = UnionToIntersection3397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3397<T extends unknown[], V> = [...T, V];

type TuplifyUnion3397<T, L = LastOf3397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3397<TuplifyUnion3397<Exclude<T, L>>, L>;

type DeepPartial3397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3397<T[P]> }
  : T;

type Paths3397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3397<K, Paths3397<T[K], Prev3397[D]>> : never }[keyof T]
  : never;

type Prev3397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3397 {
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

type ConfigPaths3397 = Paths3397<NestedConfig3397>;

interface HeavyProps3397 {
  config: DeepPartial3397<NestedConfig3397>;
  path?: ConfigPaths3397;
}

const HeavyComponent3397 = memo(function HeavyComponent3397({ config }: HeavyProps3397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3397.displayName = 'HeavyComponent3397';
export default HeavyComponent3397;

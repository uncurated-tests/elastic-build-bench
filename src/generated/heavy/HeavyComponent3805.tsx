'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3805<T> = T extends (infer U)[]
  ? DeepReadonlyArray3805<U>
  : T extends object
  ? DeepReadonlyObject3805<T>
  : T;

interface DeepReadonlyArray3805<T> extends ReadonlyArray<DeepReadonly3805<T>> {}

type DeepReadonlyObject3805<T> = {
  readonly [P in keyof T]: DeepReadonly3805<T[P]>;
};

type UnionToIntersection3805<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3805<T> = UnionToIntersection3805<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3805<T extends unknown[], V> = [...T, V];

type TuplifyUnion3805<T, L = LastOf3805<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3805<TuplifyUnion3805<Exclude<T, L>>, L>;

type DeepPartial3805<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3805<T[P]> }
  : T;

type Paths3805<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3805<K, Paths3805<T[K], Prev3805[D]>> : never }[keyof T]
  : never;

type Prev3805 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3805<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3805 {
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

type ConfigPaths3805 = Paths3805<NestedConfig3805>;

interface HeavyProps3805 {
  config: DeepPartial3805<NestedConfig3805>;
  path?: ConfigPaths3805;
}

const HeavyComponent3805 = memo(function HeavyComponent3805({ config }: HeavyProps3805) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3805) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3805 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3805: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3805.displayName = 'HeavyComponent3805';
export default HeavyComponent3805;

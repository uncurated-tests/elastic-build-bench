'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3662<T> = T extends (infer U)[]
  ? DeepReadonlyArray3662<U>
  : T extends object
  ? DeepReadonlyObject3662<T>
  : T;

interface DeepReadonlyArray3662<T> extends ReadonlyArray<DeepReadonly3662<T>> {}

type DeepReadonlyObject3662<T> = {
  readonly [P in keyof T]: DeepReadonly3662<T[P]>;
};

type UnionToIntersection3662<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3662<T> = UnionToIntersection3662<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3662<T extends unknown[], V> = [...T, V];

type TuplifyUnion3662<T, L = LastOf3662<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3662<TuplifyUnion3662<Exclude<T, L>>, L>;

type DeepPartial3662<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3662<T[P]> }
  : T;

type Paths3662<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3662<K, Paths3662<T[K], Prev3662[D]>> : never }[keyof T]
  : never;

type Prev3662 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3662<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3662 {
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

type ConfigPaths3662 = Paths3662<NestedConfig3662>;

interface HeavyProps3662 {
  config: DeepPartial3662<NestedConfig3662>;
  path?: ConfigPaths3662;
}

const HeavyComponent3662 = memo(function HeavyComponent3662({ config }: HeavyProps3662) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3662) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3662 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3662: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3662.displayName = 'HeavyComponent3662';
export default HeavyComponent3662;

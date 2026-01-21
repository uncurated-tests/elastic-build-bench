'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3870<T> = T extends (infer U)[]
  ? DeepReadonlyArray3870<U>
  : T extends object
  ? DeepReadonlyObject3870<T>
  : T;

interface DeepReadonlyArray3870<T> extends ReadonlyArray<DeepReadonly3870<T>> {}

type DeepReadonlyObject3870<T> = {
  readonly [P in keyof T]: DeepReadonly3870<T[P]>;
};

type UnionToIntersection3870<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3870<T> = UnionToIntersection3870<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3870<T extends unknown[], V> = [...T, V];

type TuplifyUnion3870<T, L = LastOf3870<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3870<TuplifyUnion3870<Exclude<T, L>>, L>;

type DeepPartial3870<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3870<T[P]> }
  : T;

type Paths3870<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3870<K, Paths3870<T[K], Prev3870[D]>> : never }[keyof T]
  : never;

type Prev3870 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3870<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3870 {
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

type ConfigPaths3870 = Paths3870<NestedConfig3870>;

interface HeavyProps3870 {
  config: DeepPartial3870<NestedConfig3870>;
  path?: ConfigPaths3870;
}

const HeavyComponent3870 = memo(function HeavyComponent3870({ config }: HeavyProps3870) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3870) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3870 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3870: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3870.displayName = 'HeavyComponent3870';
export default HeavyComponent3870;

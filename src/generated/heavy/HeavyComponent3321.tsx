'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3321<T> = T extends (infer U)[]
  ? DeepReadonlyArray3321<U>
  : T extends object
  ? DeepReadonlyObject3321<T>
  : T;

interface DeepReadonlyArray3321<T> extends ReadonlyArray<DeepReadonly3321<T>> {}

type DeepReadonlyObject3321<T> = {
  readonly [P in keyof T]: DeepReadonly3321<T[P]>;
};

type UnionToIntersection3321<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3321<T> = UnionToIntersection3321<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3321<T extends unknown[], V> = [...T, V];

type TuplifyUnion3321<T, L = LastOf3321<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3321<TuplifyUnion3321<Exclude<T, L>>, L>;

type DeepPartial3321<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3321<T[P]> }
  : T;

type Paths3321<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3321<K, Paths3321<T[K], Prev3321[D]>> : never }[keyof T]
  : never;

type Prev3321 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3321<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3321 {
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

type ConfigPaths3321 = Paths3321<NestedConfig3321>;

interface HeavyProps3321 {
  config: DeepPartial3321<NestedConfig3321>;
  path?: ConfigPaths3321;
}

const HeavyComponent3321 = memo(function HeavyComponent3321({ config }: HeavyProps3321) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3321) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3321 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3321: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3321.displayName = 'HeavyComponent3321';
export default HeavyComponent3321;

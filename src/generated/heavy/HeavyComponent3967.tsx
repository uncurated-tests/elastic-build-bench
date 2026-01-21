'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3967<T> = T extends (infer U)[]
  ? DeepReadonlyArray3967<U>
  : T extends object
  ? DeepReadonlyObject3967<T>
  : T;

interface DeepReadonlyArray3967<T> extends ReadonlyArray<DeepReadonly3967<T>> {}

type DeepReadonlyObject3967<T> = {
  readonly [P in keyof T]: DeepReadonly3967<T[P]>;
};

type UnionToIntersection3967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3967<T> = UnionToIntersection3967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3967<T extends unknown[], V> = [...T, V];

type TuplifyUnion3967<T, L = LastOf3967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3967<TuplifyUnion3967<Exclude<T, L>>, L>;

type DeepPartial3967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3967<T[P]> }
  : T;

type Paths3967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3967<K, Paths3967<T[K], Prev3967[D]>> : never }[keyof T]
  : never;

type Prev3967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3967 {
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

type ConfigPaths3967 = Paths3967<NestedConfig3967>;

interface HeavyProps3967 {
  config: DeepPartial3967<NestedConfig3967>;
  path?: ConfigPaths3967;
}

const HeavyComponent3967 = memo(function HeavyComponent3967({ config }: HeavyProps3967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3967.displayName = 'HeavyComponent3967';
export default HeavyComponent3967;

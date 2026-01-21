'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3660<T> = T extends (infer U)[]
  ? DeepReadonlyArray3660<U>
  : T extends object
  ? DeepReadonlyObject3660<T>
  : T;

interface DeepReadonlyArray3660<T> extends ReadonlyArray<DeepReadonly3660<T>> {}

type DeepReadonlyObject3660<T> = {
  readonly [P in keyof T]: DeepReadonly3660<T[P]>;
};

type UnionToIntersection3660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3660<T> = UnionToIntersection3660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3660<T extends unknown[], V> = [...T, V];

type TuplifyUnion3660<T, L = LastOf3660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3660<TuplifyUnion3660<Exclude<T, L>>, L>;

type DeepPartial3660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3660<T[P]> }
  : T;

type Paths3660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3660<K, Paths3660<T[K], Prev3660[D]>> : never }[keyof T]
  : never;

type Prev3660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3660 {
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

type ConfigPaths3660 = Paths3660<NestedConfig3660>;

interface HeavyProps3660 {
  config: DeepPartial3660<NestedConfig3660>;
  path?: ConfigPaths3660;
}

const HeavyComponent3660 = memo(function HeavyComponent3660({ config }: HeavyProps3660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3660.displayName = 'HeavyComponent3660';
export default HeavyComponent3660;

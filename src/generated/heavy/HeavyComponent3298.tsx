'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3298<T> = T extends (infer U)[]
  ? DeepReadonlyArray3298<U>
  : T extends object
  ? DeepReadonlyObject3298<T>
  : T;

interface DeepReadonlyArray3298<T> extends ReadonlyArray<DeepReadonly3298<T>> {}

type DeepReadonlyObject3298<T> = {
  readonly [P in keyof T]: DeepReadonly3298<T[P]>;
};

type UnionToIntersection3298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3298<T> = UnionToIntersection3298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3298<T extends unknown[], V> = [...T, V];

type TuplifyUnion3298<T, L = LastOf3298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3298<TuplifyUnion3298<Exclude<T, L>>, L>;

type DeepPartial3298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3298<T[P]> }
  : T;

type Paths3298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3298<K, Paths3298<T[K], Prev3298[D]>> : never }[keyof T]
  : never;

type Prev3298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3298 {
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

type ConfigPaths3298 = Paths3298<NestedConfig3298>;

interface HeavyProps3298 {
  config: DeepPartial3298<NestedConfig3298>;
  path?: ConfigPaths3298;
}

const HeavyComponent3298 = memo(function HeavyComponent3298({ config }: HeavyProps3298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3298.displayName = 'HeavyComponent3298';
export default HeavyComponent3298;

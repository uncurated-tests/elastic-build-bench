'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3118<T> = T extends (infer U)[]
  ? DeepReadonlyArray3118<U>
  : T extends object
  ? DeepReadonlyObject3118<T>
  : T;

interface DeepReadonlyArray3118<T> extends ReadonlyArray<DeepReadonly3118<T>> {}

type DeepReadonlyObject3118<T> = {
  readonly [P in keyof T]: DeepReadonly3118<T[P]>;
};

type UnionToIntersection3118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3118<T> = UnionToIntersection3118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3118<T extends unknown[], V> = [...T, V];

type TuplifyUnion3118<T, L = LastOf3118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3118<TuplifyUnion3118<Exclude<T, L>>, L>;

type DeepPartial3118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3118<T[P]> }
  : T;

type Paths3118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3118<K, Paths3118<T[K], Prev3118[D]>> : never }[keyof T]
  : never;

type Prev3118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3118 {
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

type ConfigPaths3118 = Paths3118<NestedConfig3118>;

interface HeavyProps3118 {
  config: DeepPartial3118<NestedConfig3118>;
  path?: ConfigPaths3118;
}

const HeavyComponent3118 = memo(function HeavyComponent3118({ config }: HeavyProps3118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3118.displayName = 'HeavyComponent3118';
export default HeavyComponent3118;

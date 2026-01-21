'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3065<T> = T extends (infer U)[]
  ? DeepReadonlyArray3065<U>
  : T extends object
  ? DeepReadonlyObject3065<T>
  : T;

interface DeepReadonlyArray3065<T> extends ReadonlyArray<DeepReadonly3065<T>> {}

type DeepReadonlyObject3065<T> = {
  readonly [P in keyof T]: DeepReadonly3065<T[P]>;
};

type UnionToIntersection3065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3065<T> = UnionToIntersection3065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3065<T extends unknown[], V> = [...T, V];

type TuplifyUnion3065<T, L = LastOf3065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3065<TuplifyUnion3065<Exclude<T, L>>, L>;

type DeepPartial3065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3065<T[P]> }
  : T;

type Paths3065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3065<K, Paths3065<T[K], Prev3065[D]>> : never }[keyof T]
  : never;

type Prev3065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3065 {
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

type ConfigPaths3065 = Paths3065<NestedConfig3065>;

interface HeavyProps3065 {
  config: DeepPartial3065<NestedConfig3065>;
  path?: ConfigPaths3065;
}

const HeavyComponent3065 = memo(function HeavyComponent3065({ config }: HeavyProps3065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3065.displayName = 'HeavyComponent3065';
export default HeavyComponent3065;

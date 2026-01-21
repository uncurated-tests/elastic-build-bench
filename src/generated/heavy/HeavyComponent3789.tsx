'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3789<T> = T extends (infer U)[]
  ? DeepReadonlyArray3789<U>
  : T extends object
  ? DeepReadonlyObject3789<T>
  : T;

interface DeepReadonlyArray3789<T> extends ReadonlyArray<DeepReadonly3789<T>> {}

type DeepReadonlyObject3789<T> = {
  readonly [P in keyof T]: DeepReadonly3789<T[P]>;
};

type UnionToIntersection3789<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3789<T> = UnionToIntersection3789<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3789<T extends unknown[], V> = [...T, V];

type TuplifyUnion3789<T, L = LastOf3789<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3789<TuplifyUnion3789<Exclude<T, L>>, L>;

type DeepPartial3789<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3789<T[P]> }
  : T;

type Paths3789<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3789<K, Paths3789<T[K], Prev3789[D]>> : never }[keyof T]
  : never;

type Prev3789 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3789<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3789 {
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

type ConfigPaths3789 = Paths3789<NestedConfig3789>;

interface HeavyProps3789 {
  config: DeepPartial3789<NestedConfig3789>;
  path?: ConfigPaths3789;
}

const HeavyComponent3789 = memo(function HeavyComponent3789({ config }: HeavyProps3789) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3789) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3789 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3789: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3789.displayName = 'HeavyComponent3789';
export default HeavyComponent3789;

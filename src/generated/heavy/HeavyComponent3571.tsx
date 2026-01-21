'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3571<T> = T extends (infer U)[]
  ? DeepReadonlyArray3571<U>
  : T extends object
  ? DeepReadonlyObject3571<T>
  : T;

interface DeepReadonlyArray3571<T> extends ReadonlyArray<DeepReadonly3571<T>> {}

type DeepReadonlyObject3571<T> = {
  readonly [P in keyof T]: DeepReadonly3571<T[P]>;
};

type UnionToIntersection3571<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3571<T> = UnionToIntersection3571<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3571<T extends unknown[], V> = [...T, V];

type TuplifyUnion3571<T, L = LastOf3571<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3571<TuplifyUnion3571<Exclude<T, L>>, L>;

type DeepPartial3571<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3571<T[P]> }
  : T;

type Paths3571<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3571<K, Paths3571<T[K], Prev3571[D]>> : never }[keyof T]
  : never;

type Prev3571 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3571<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3571 {
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

type ConfigPaths3571 = Paths3571<NestedConfig3571>;

interface HeavyProps3571 {
  config: DeepPartial3571<NestedConfig3571>;
  path?: ConfigPaths3571;
}

const HeavyComponent3571 = memo(function HeavyComponent3571({ config }: HeavyProps3571) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3571) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3571 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3571: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3571.displayName = 'HeavyComponent3571';
export default HeavyComponent3571;

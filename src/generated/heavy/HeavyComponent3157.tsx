'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3157<T> = T extends (infer U)[]
  ? DeepReadonlyArray3157<U>
  : T extends object
  ? DeepReadonlyObject3157<T>
  : T;

interface DeepReadonlyArray3157<T> extends ReadonlyArray<DeepReadonly3157<T>> {}

type DeepReadonlyObject3157<T> = {
  readonly [P in keyof T]: DeepReadonly3157<T[P]>;
};

type UnionToIntersection3157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3157<T> = UnionToIntersection3157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3157<T extends unknown[], V> = [...T, V];

type TuplifyUnion3157<T, L = LastOf3157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3157<TuplifyUnion3157<Exclude<T, L>>, L>;

type DeepPartial3157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3157<T[P]> }
  : T;

type Paths3157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3157<K, Paths3157<T[K], Prev3157[D]>> : never }[keyof T]
  : never;

type Prev3157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3157 {
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

type ConfigPaths3157 = Paths3157<NestedConfig3157>;

interface HeavyProps3157 {
  config: DeepPartial3157<NestedConfig3157>;
  path?: ConfigPaths3157;
}

const HeavyComponent3157 = memo(function HeavyComponent3157({ config }: HeavyProps3157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3157.displayName = 'HeavyComponent3157';
export default HeavyComponent3157;

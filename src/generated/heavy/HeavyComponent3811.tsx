'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3811<T> = T extends (infer U)[]
  ? DeepReadonlyArray3811<U>
  : T extends object
  ? DeepReadonlyObject3811<T>
  : T;

interface DeepReadonlyArray3811<T> extends ReadonlyArray<DeepReadonly3811<T>> {}

type DeepReadonlyObject3811<T> = {
  readonly [P in keyof T]: DeepReadonly3811<T[P]>;
};

type UnionToIntersection3811<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3811<T> = UnionToIntersection3811<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3811<T extends unknown[], V> = [...T, V];

type TuplifyUnion3811<T, L = LastOf3811<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3811<TuplifyUnion3811<Exclude<T, L>>, L>;

type DeepPartial3811<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3811<T[P]> }
  : T;

type Paths3811<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3811<K, Paths3811<T[K], Prev3811[D]>> : never }[keyof T]
  : never;

type Prev3811 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3811<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3811 {
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

type ConfigPaths3811 = Paths3811<NestedConfig3811>;

interface HeavyProps3811 {
  config: DeepPartial3811<NestedConfig3811>;
  path?: ConfigPaths3811;
}

const HeavyComponent3811 = memo(function HeavyComponent3811({ config }: HeavyProps3811) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3811) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3811 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3811: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3811.displayName = 'HeavyComponent3811';
export default HeavyComponent3811;

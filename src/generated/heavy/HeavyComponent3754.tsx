'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3754<T> = T extends (infer U)[]
  ? DeepReadonlyArray3754<U>
  : T extends object
  ? DeepReadonlyObject3754<T>
  : T;

interface DeepReadonlyArray3754<T> extends ReadonlyArray<DeepReadonly3754<T>> {}

type DeepReadonlyObject3754<T> = {
  readonly [P in keyof T]: DeepReadonly3754<T[P]>;
};

type UnionToIntersection3754<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3754<T> = UnionToIntersection3754<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3754<T extends unknown[], V> = [...T, V];

type TuplifyUnion3754<T, L = LastOf3754<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3754<TuplifyUnion3754<Exclude<T, L>>, L>;

type DeepPartial3754<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3754<T[P]> }
  : T;

type Paths3754<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3754<K, Paths3754<T[K], Prev3754[D]>> : never }[keyof T]
  : never;

type Prev3754 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3754<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3754 {
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

type ConfigPaths3754 = Paths3754<NestedConfig3754>;

interface HeavyProps3754 {
  config: DeepPartial3754<NestedConfig3754>;
  path?: ConfigPaths3754;
}

const HeavyComponent3754 = memo(function HeavyComponent3754({ config }: HeavyProps3754) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3754) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3754 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3754: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3754.displayName = 'HeavyComponent3754';
export default HeavyComponent3754;

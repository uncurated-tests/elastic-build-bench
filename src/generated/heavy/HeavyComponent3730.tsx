'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3730<T> = T extends (infer U)[]
  ? DeepReadonlyArray3730<U>
  : T extends object
  ? DeepReadonlyObject3730<T>
  : T;

interface DeepReadonlyArray3730<T> extends ReadonlyArray<DeepReadonly3730<T>> {}

type DeepReadonlyObject3730<T> = {
  readonly [P in keyof T]: DeepReadonly3730<T[P]>;
};

type UnionToIntersection3730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3730<T> = UnionToIntersection3730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3730<T extends unknown[], V> = [...T, V];

type TuplifyUnion3730<T, L = LastOf3730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3730<TuplifyUnion3730<Exclude<T, L>>, L>;

type DeepPartial3730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3730<T[P]> }
  : T;

type Paths3730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3730<K, Paths3730<T[K], Prev3730[D]>> : never }[keyof T]
  : never;

type Prev3730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3730 {
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

type ConfigPaths3730 = Paths3730<NestedConfig3730>;

interface HeavyProps3730 {
  config: DeepPartial3730<NestedConfig3730>;
  path?: ConfigPaths3730;
}

const HeavyComponent3730 = memo(function HeavyComponent3730({ config }: HeavyProps3730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3730.displayName = 'HeavyComponent3730';
export default HeavyComponent3730;

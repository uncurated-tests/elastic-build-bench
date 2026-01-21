'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3266<T> = T extends (infer U)[]
  ? DeepReadonlyArray3266<U>
  : T extends object
  ? DeepReadonlyObject3266<T>
  : T;

interface DeepReadonlyArray3266<T> extends ReadonlyArray<DeepReadonly3266<T>> {}

type DeepReadonlyObject3266<T> = {
  readonly [P in keyof T]: DeepReadonly3266<T[P]>;
};

type UnionToIntersection3266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3266<T> = UnionToIntersection3266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3266<T extends unknown[], V> = [...T, V];

type TuplifyUnion3266<T, L = LastOf3266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3266<TuplifyUnion3266<Exclude<T, L>>, L>;

type DeepPartial3266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3266<T[P]> }
  : T;

type Paths3266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3266<K, Paths3266<T[K], Prev3266[D]>> : never }[keyof T]
  : never;

type Prev3266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3266 {
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

type ConfigPaths3266 = Paths3266<NestedConfig3266>;

interface HeavyProps3266 {
  config: DeepPartial3266<NestedConfig3266>;
  path?: ConfigPaths3266;
}

const HeavyComponent3266 = memo(function HeavyComponent3266({ config }: HeavyProps3266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3266.displayName = 'HeavyComponent3266';
export default HeavyComponent3266;

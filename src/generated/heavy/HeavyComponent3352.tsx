'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3352<T> = T extends (infer U)[]
  ? DeepReadonlyArray3352<U>
  : T extends object
  ? DeepReadonlyObject3352<T>
  : T;

interface DeepReadonlyArray3352<T> extends ReadonlyArray<DeepReadonly3352<T>> {}

type DeepReadonlyObject3352<T> = {
  readonly [P in keyof T]: DeepReadonly3352<T[P]>;
};

type UnionToIntersection3352<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3352<T> = UnionToIntersection3352<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3352<T extends unknown[], V> = [...T, V];

type TuplifyUnion3352<T, L = LastOf3352<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3352<TuplifyUnion3352<Exclude<T, L>>, L>;

type DeepPartial3352<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3352<T[P]> }
  : T;

type Paths3352<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3352<K, Paths3352<T[K], Prev3352[D]>> : never }[keyof T]
  : never;

type Prev3352 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3352<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3352 {
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

type ConfigPaths3352 = Paths3352<NestedConfig3352>;

interface HeavyProps3352 {
  config: DeepPartial3352<NestedConfig3352>;
  path?: ConfigPaths3352;
}

const HeavyComponent3352 = memo(function HeavyComponent3352({ config }: HeavyProps3352) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3352) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3352 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3352: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3352.displayName = 'HeavyComponent3352';
export default HeavyComponent3352;

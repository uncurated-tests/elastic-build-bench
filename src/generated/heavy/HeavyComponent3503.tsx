'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3503<T> = T extends (infer U)[]
  ? DeepReadonlyArray3503<U>
  : T extends object
  ? DeepReadonlyObject3503<T>
  : T;

interface DeepReadonlyArray3503<T> extends ReadonlyArray<DeepReadonly3503<T>> {}

type DeepReadonlyObject3503<T> = {
  readonly [P in keyof T]: DeepReadonly3503<T[P]>;
};

type UnionToIntersection3503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3503<T> = UnionToIntersection3503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3503<T extends unknown[], V> = [...T, V];

type TuplifyUnion3503<T, L = LastOf3503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3503<TuplifyUnion3503<Exclude<T, L>>, L>;

type DeepPartial3503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3503<T[P]> }
  : T;

type Paths3503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3503<K, Paths3503<T[K], Prev3503[D]>> : never }[keyof T]
  : never;

type Prev3503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3503 {
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

type ConfigPaths3503 = Paths3503<NestedConfig3503>;

interface HeavyProps3503 {
  config: DeepPartial3503<NestedConfig3503>;
  path?: ConfigPaths3503;
}

const HeavyComponent3503 = memo(function HeavyComponent3503({ config }: HeavyProps3503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3503.displayName = 'HeavyComponent3503';
export default HeavyComponent3503;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3371<T> = T extends (infer U)[]
  ? DeepReadonlyArray3371<U>
  : T extends object
  ? DeepReadonlyObject3371<T>
  : T;

interface DeepReadonlyArray3371<T> extends ReadonlyArray<DeepReadonly3371<T>> {}

type DeepReadonlyObject3371<T> = {
  readonly [P in keyof T]: DeepReadonly3371<T[P]>;
};

type UnionToIntersection3371<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3371<T> = UnionToIntersection3371<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3371<T extends unknown[], V> = [...T, V];

type TuplifyUnion3371<T, L = LastOf3371<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3371<TuplifyUnion3371<Exclude<T, L>>, L>;

type DeepPartial3371<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3371<T[P]> }
  : T;

type Paths3371<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3371<K, Paths3371<T[K], Prev3371[D]>> : never }[keyof T]
  : never;

type Prev3371 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3371<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3371 {
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

type ConfigPaths3371 = Paths3371<NestedConfig3371>;

interface HeavyProps3371 {
  config: DeepPartial3371<NestedConfig3371>;
  path?: ConfigPaths3371;
}

const HeavyComponent3371 = memo(function HeavyComponent3371({ config }: HeavyProps3371) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3371) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3371 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3371: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3371.displayName = 'HeavyComponent3371';
export default HeavyComponent3371;

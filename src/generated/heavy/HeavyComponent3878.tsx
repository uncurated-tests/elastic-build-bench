'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3878<T> = T extends (infer U)[]
  ? DeepReadonlyArray3878<U>
  : T extends object
  ? DeepReadonlyObject3878<T>
  : T;

interface DeepReadonlyArray3878<T> extends ReadonlyArray<DeepReadonly3878<T>> {}

type DeepReadonlyObject3878<T> = {
  readonly [P in keyof T]: DeepReadonly3878<T[P]>;
};

type UnionToIntersection3878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3878<T> = UnionToIntersection3878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3878<T extends unknown[], V> = [...T, V];

type TuplifyUnion3878<T, L = LastOf3878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3878<TuplifyUnion3878<Exclude<T, L>>, L>;

type DeepPartial3878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3878<T[P]> }
  : T;

type Paths3878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3878<K, Paths3878<T[K], Prev3878[D]>> : never }[keyof T]
  : never;

type Prev3878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3878 {
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

type ConfigPaths3878 = Paths3878<NestedConfig3878>;

interface HeavyProps3878 {
  config: DeepPartial3878<NestedConfig3878>;
  path?: ConfigPaths3878;
}

const HeavyComponent3878 = memo(function HeavyComponent3878({ config }: HeavyProps3878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3878.displayName = 'HeavyComponent3878';
export default HeavyComponent3878;

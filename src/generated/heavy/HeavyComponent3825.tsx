'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3825<T> = T extends (infer U)[]
  ? DeepReadonlyArray3825<U>
  : T extends object
  ? DeepReadonlyObject3825<T>
  : T;

interface DeepReadonlyArray3825<T> extends ReadonlyArray<DeepReadonly3825<T>> {}

type DeepReadonlyObject3825<T> = {
  readonly [P in keyof T]: DeepReadonly3825<T[P]>;
};

type UnionToIntersection3825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3825<T> = UnionToIntersection3825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3825<T extends unknown[], V> = [...T, V];

type TuplifyUnion3825<T, L = LastOf3825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3825<TuplifyUnion3825<Exclude<T, L>>, L>;

type DeepPartial3825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3825<T[P]> }
  : T;

type Paths3825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3825<K, Paths3825<T[K], Prev3825[D]>> : never }[keyof T]
  : never;

type Prev3825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3825 {
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

type ConfigPaths3825 = Paths3825<NestedConfig3825>;

interface HeavyProps3825 {
  config: DeepPartial3825<NestedConfig3825>;
  path?: ConfigPaths3825;
}

const HeavyComponent3825 = memo(function HeavyComponent3825({ config }: HeavyProps3825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3825.displayName = 'HeavyComponent3825';
export default HeavyComponent3825;

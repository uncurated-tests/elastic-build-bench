'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3858<T> = T extends (infer U)[]
  ? DeepReadonlyArray3858<U>
  : T extends object
  ? DeepReadonlyObject3858<T>
  : T;

interface DeepReadonlyArray3858<T> extends ReadonlyArray<DeepReadonly3858<T>> {}

type DeepReadonlyObject3858<T> = {
  readonly [P in keyof T]: DeepReadonly3858<T[P]>;
};

type UnionToIntersection3858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3858<T> = UnionToIntersection3858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3858<T extends unknown[], V> = [...T, V];

type TuplifyUnion3858<T, L = LastOf3858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3858<TuplifyUnion3858<Exclude<T, L>>, L>;

type DeepPartial3858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3858<T[P]> }
  : T;

type Paths3858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3858<K, Paths3858<T[K], Prev3858[D]>> : never }[keyof T]
  : never;

type Prev3858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3858 {
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

type ConfigPaths3858 = Paths3858<NestedConfig3858>;

interface HeavyProps3858 {
  config: DeepPartial3858<NestedConfig3858>;
  path?: ConfigPaths3858;
}

const HeavyComponent3858 = memo(function HeavyComponent3858({ config }: HeavyProps3858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3858.displayName = 'HeavyComponent3858';
export default HeavyComponent3858;

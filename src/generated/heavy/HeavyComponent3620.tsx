'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3620<T> = T extends (infer U)[]
  ? DeepReadonlyArray3620<U>
  : T extends object
  ? DeepReadonlyObject3620<T>
  : T;

interface DeepReadonlyArray3620<T> extends ReadonlyArray<DeepReadonly3620<T>> {}

type DeepReadonlyObject3620<T> = {
  readonly [P in keyof T]: DeepReadonly3620<T[P]>;
};

type UnionToIntersection3620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3620<T> = UnionToIntersection3620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3620<T extends unknown[], V> = [...T, V];

type TuplifyUnion3620<T, L = LastOf3620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3620<TuplifyUnion3620<Exclude<T, L>>, L>;

type DeepPartial3620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3620<T[P]> }
  : T;

type Paths3620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3620<K, Paths3620<T[K], Prev3620[D]>> : never }[keyof T]
  : never;

type Prev3620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3620 {
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

type ConfigPaths3620 = Paths3620<NestedConfig3620>;

interface HeavyProps3620 {
  config: DeepPartial3620<NestedConfig3620>;
  path?: ConfigPaths3620;
}

const HeavyComponent3620 = memo(function HeavyComponent3620({ config }: HeavyProps3620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3620.displayName = 'HeavyComponent3620';
export default HeavyComponent3620;

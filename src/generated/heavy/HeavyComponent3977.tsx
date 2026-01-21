'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3977<T> = T extends (infer U)[]
  ? DeepReadonlyArray3977<U>
  : T extends object
  ? DeepReadonlyObject3977<T>
  : T;

interface DeepReadonlyArray3977<T> extends ReadonlyArray<DeepReadonly3977<T>> {}

type DeepReadonlyObject3977<T> = {
  readonly [P in keyof T]: DeepReadonly3977<T[P]>;
};

type UnionToIntersection3977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3977<T> = UnionToIntersection3977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3977<T extends unknown[], V> = [...T, V];

type TuplifyUnion3977<T, L = LastOf3977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3977<TuplifyUnion3977<Exclude<T, L>>, L>;

type DeepPartial3977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3977<T[P]> }
  : T;

type Paths3977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3977<K, Paths3977<T[K], Prev3977[D]>> : never }[keyof T]
  : never;

type Prev3977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3977 {
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

type ConfigPaths3977 = Paths3977<NestedConfig3977>;

interface HeavyProps3977 {
  config: DeepPartial3977<NestedConfig3977>;
  path?: ConfigPaths3977;
}

const HeavyComponent3977 = memo(function HeavyComponent3977({ config }: HeavyProps3977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3977.displayName = 'HeavyComponent3977';
export default HeavyComponent3977;

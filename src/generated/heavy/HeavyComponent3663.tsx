'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3663<T> = T extends (infer U)[]
  ? DeepReadonlyArray3663<U>
  : T extends object
  ? DeepReadonlyObject3663<T>
  : T;

interface DeepReadonlyArray3663<T> extends ReadonlyArray<DeepReadonly3663<T>> {}

type DeepReadonlyObject3663<T> = {
  readonly [P in keyof T]: DeepReadonly3663<T[P]>;
};

type UnionToIntersection3663<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3663<T> = UnionToIntersection3663<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3663<T extends unknown[], V> = [...T, V];

type TuplifyUnion3663<T, L = LastOf3663<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3663<TuplifyUnion3663<Exclude<T, L>>, L>;

type DeepPartial3663<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3663<T[P]> }
  : T;

type Paths3663<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3663<K, Paths3663<T[K], Prev3663[D]>> : never }[keyof T]
  : never;

type Prev3663 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3663<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3663 {
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

type ConfigPaths3663 = Paths3663<NestedConfig3663>;

interface HeavyProps3663 {
  config: DeepPartial3663<NestedConfig3663>;
  path?: ConfigPaths3663;
}

const HeavyComponent3663 = memo(function HeavyComponent3663({ config }: HeavyProps3663) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3663) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3663 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3663: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3663.displayName = 'HeavyComponent3663';
export default HeavyComponent3663;

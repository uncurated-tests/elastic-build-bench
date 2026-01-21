'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3523<T> = T extends (infer U)[]
  ? DeepReadonlyArray3523<U>
  : T extends object
  ? DeepReadonlyObject3523<T>
  : T;

interface DeepReadonlyArray3523<T> extends ReadonlyArray<DeepReadonly3523<T>> {}

type DeepReadonlyObject3523<T> = {
  readonly [P in keyof T]: DeepReadonly3523<T[P]>;
};

type UnionToIntersection3523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3523<T> = UnionToIntersection3523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3523<T extends unknown[], V> = [...T, V];

type TuplifyUnion3523<T, L = LastOf3523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3523<TuplifyUnion3523<Exclude<T, L>>, L>;

type DeepPartial3523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3523<T[P]> }
  : T;

type Paths3523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3523<K, Paths3523<T[K], Prev3523[D]>> : never }[keyof T]
  : never;

type Prev3523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3523 {
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

type ConfigPaths3523 = Paths3523<NestedConfig3523>;

interface HeavyProps3523 {
  config: DeepPartial3523<NestedConfig3523>;
  path?: ConfigPaths3523;
}

const HeavyComponent3523 = memo(function HeavyComponent3523({ config }: HeavyProps3523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3523.displayName = 'HeavyComponent3523';
export default HeavyComponent3523;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3836<T> = T extends (infer U)[]
  ? DeepReadonlyArray3836<U>
  : T extends object
  ? DeepReadonlyObject3836<T>
  : T;

interface DeepReadonlyArray3836<T> extends ReadonlyArray<DeepReadonly3836<T>> {}

type DeepReadonlyObject3836<T> = {
  readonly [P in keyof T]: DeepReadonly3836<T[P]>;
};

type UnionToIntersection3836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3836<T> = UnionToIntersection3836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3836<T extends unknown[], V> = [...T, V];

type TuplifyUnion3836<T, L = LastOf3836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3836<TuplifyUnion3836<Exclude<T, L>>, L>;

type DeepPartial3836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3836<T[P]> }
  : T;

type Paths3836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3836<K, Paths3836<T[K], Prev3836[D]>> : never }[keyof T]
  : never;

type Prev3836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3836 {
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

type ConfigPaths3836 = Paths3836<NestedConfig3836>;

interface HeavyProps3836 {
  config: DeepPartial3836<NestedConfig3836>;
  path?: ConfigPaths3836;
}

const HeavyComponent3836 = memo(function HeavyComponent3836({ config }: HeavyProps3836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3836.displayName = 'HeavyComponent3836';
export default HeavyComponent3836;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3535<T> = T extends (infer U)[]
  ? DeepReadonlyArray3535<U>
  : T extends object
  ? DeepReadonlyObject3535<T>
  : T;

interface DeepReadonlyArray3535<T> extends ReadonlyArray<DeepReadonly3535<T>> {}

type DeepReadonlyObject3535<T> = {
  readonly [P in keyof T]: DeepReadonly3535<T[P]>;
};

type UnionToIntersection3535<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3535<T> = UnionToIntersection3535<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3535<T extends unknown[], V> = [...T, V];

type TuplifyUnion3535<T, L = LastOf3535<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3535<TuplifyUnion3535<Exclude<T, L>>, L>;

type DeepPartial3535<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3535<T[P]> }
  : T;

type Paths3535<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3535<K, Paths3535<T[K], Prev3535[D]>> : never }[keyof T]
  : never;

type Prev3535 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3535<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3535 {
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

type ConfigPaths3535 = Paths3535<NestedConfig3535>;

interface HeavyProps3535 {
  config: DeepPartial3535<NestedConfig3535>;
  path?: ConfigPaths3535;
}

const HeavyComponent3535 = memo(function HeavyComponent3535({ config }: HeavyProps3535) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3535) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3535 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3535: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3535.displayName = 'HeavyComponent3535';
export default HeavyComponent3535;

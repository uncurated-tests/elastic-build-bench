'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3826<T> = T extends (infer U)[]
  ? DeepReadonlyArray3826<U>
  : T extends object
  ? DeepReadonlyObject3826<T>
  : T;

interface DeepReadonlyArray3826<T> extends ReadonlyArray<DeepReadonly3826<T>> {}

type DeepReadonlyObject3826<T> = {
  readonly [P in keyof T]: DeepReadonly3826<T[P]>;
};

type UnionToIntersection3826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3826<T> = UnionToIntersection3826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3826<T extends unknown[], V> = [...T, V];

type TuplifyUnion3826<T, L = LastOf3826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3826<TuplifyUnion3826<Exclude<T, L>>, L>;

type DeepPartial3826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3826<T[P]> }
  : T;

type Paths3826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3826<K, Paths3826<T[K], Prev3826[D]>> : never }[keyof T]
  : never;

type Prev3826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3826 {
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

type ConfigPaths3826 = Paths3826<NestedConfig3826>;

interface HeavyProps3826 {
  config: DeepPartial3826<NestedConfig3826>;
  path?: ConfigPaths3826;
}

const HeavyComponent3826 = memo(function HeavyComponent3826({ config }: HeavyProps3826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3826.displayName = 'HeavyComponent3826';
export default HeavyComponent3826;
